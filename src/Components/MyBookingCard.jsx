"use client";
import { Avatar, Button, Calendar, Card } from "@heroui/react"; // Optional: For clean iconography
import { ClockArrowRotateLeft, MapPinMinus } from "@gravity-ui/icons";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function MyBookingCard({ booking }) {
  const {
    country,
    category,
    priceUSD,
    duration,
    imageURL,
    userName,
    userEmail,
    userImage,
    bookingDate,
    imageUrl,
    price,
    _id,
  } = booking;
  const router = useRouter();
  //   console.log(_id, booking);
  // function for handle cancel booking
  const handleCancelBooking = async () => {
    // console.log("im clicked");
    const uri = process.env.NEXT_PUBLIC_BACKEND_URI;
    const res = await fetch(`${uri}/bookings/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    if (data) {
      router.push("/bookings");
    }
    console.log(data);
    return data;
  };

  return (
    <div>
      {booking ? (
        <Card className="max-w-[850px] w-full overflow-hidden rounded-2xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* Image */}
            <div className="relative md:col-span-5 h-[280px] md:h-auto min-h-[320px]">
              <Image
                src={imageUrl || imageURL}
                alt={country}
                fill
                className="object-cover"
              />

              <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/50 text-white text-xs font-semibold">
                {category}
              </span>
            </div>

            {/* Content */}
            <div className="md:col-span-7 p-6 flex flex-col justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 text-primary text-sm font-medium">
                  <MapPinMinus size={16} />
                  {country}
                </div>

                <h2 className="text-2xl font-bold mt-2">
                  Premium {category} Experience
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Duration */}
                <div className="flex gap-3 items-center">
                  <ClockArrowRotateLeft size={20} />
                  <div>
                    <p className="text-xs text-default-500">Duration</p>
                    <p className="font-semibold">{duration}</p>
                  </div>
                </div>

                {/* Booking Date */}
                <div>
                  <p className="text-xs text-default-500">Booking Date</p>
                  <p className="font-semibold">
                    {new Date(bookingDate).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <div className="flex items-center gap-3">
                  <Avatar src={userImage} color="primary" />

                  <div>
                    <p className="font-semibold">{userName}</p>
                    <p className="text-xs text-default-500">{userEmail}</p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-xs text-default-500">Total Paid</p>
                  <p className="text-2xl font-bold text-success">
                    ${priceUSD || price}
                  </p>
                </div>
              </div>
              <div>
                <Button
                  onClick={handleCancelBooking}
                  variant="danger"
                  className="rounded-none"
                >
                  Cancel Booking
                </Button>
              </div>
            </div>
          </div>
        </Card>
      ) : (
        <>
          <p>No data found</p>
        </>
      )}
    </div>
  );
}
