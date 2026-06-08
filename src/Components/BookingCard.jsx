"use client";

import { authClient } from "@/lib/auth-client";
import { Card, Input, Button } from "@heroui/react";
import { useState } from "react";

export default function BookingCard({ details }) {
  //   console.log(details);
  const { country, category, priceUSD, duration, imageURL, imageUrl, price } =
    details;
  // getting the departure date set by user
  const [departureDate, setDepartureDate] = useState("");
  //getting session data
  const { data: session } = authClient.useSession();
  //   console.log(session);

  // handle booknow section and send the data to backend
  const handleBookNow = async () => {
    const selectedDate = new Date(departureDate);
    // console.log(selectedDate);
    const data = {
      country,
      category,
      priceUSD,
      duration,
      imageURL,
      imageUrl,
      price,
      userName: session?.user.name,
      userId: session?.user.id,
      userEmail: session?.user.email,
      userImage: session?.user.image,
      bookingDate: selectedDate,
    };
    const uri = process.env.NEXT_PUBLIC_BACKEND_URI;
    // console.log(data);
    const res = await fetch(`${uri}/bookings`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    // console.log(result);
    return result;
  };

  return (
    <Card className="max-w-md w-full p-5 rounded-2xl shadow-md">
      <div className="space-y-4">
        {/* Title */}
        <h2 className="text-lg font-semibold text-slate-800">Book Your Trip</h2>

        {/* Departure Date */}
        <Input
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
          type="date"
          label="Departure Date"
          placeholder="Select date"
          className="w-full"
        />

        {/* Book Now Button */}
        <button
          onClick={handleBookNow}
          className="w-full bg-slate-900 hover:bg-indigo-600 text-white font-medium py-2.5 px-4 rounded-xl transition-colors duration-200 shadow-sm text-sm"
        >
          Book Now
        </button>
      </div>
    </Card>
  );
}
