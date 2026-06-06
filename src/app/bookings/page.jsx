import MyBookingCard from "@/Components/MyBookingCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const MyBookings = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const id = session?.user?.id;
  //   console.log(session, id);

  // feting data from api
  const myBookingsData = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URI}/bookings/${id}`,
    );
    const data = res.json();
    return data;
  };
  const bookingData = await myBookingsData();
  //   console.log(bookingData);
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
  } = bookingData;

  return (
    <div className="w-10/12 mx-auto flex items-center justify-center flex-col">
      <p className="text-3xl text-center"> My Bookings</p>
      <div className=" flex flex-col  gap-3">
        {bookingData.map((booking, index) => (
          <MyBookingCard key={index} booking={booking} />
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
