import BookingCard from "@/Components/BookingCard";
import { DeteleDestinations } from "@/Components/DeteleDestinations";
import EditDetails from "@/Components/EditDetails";
import { getDetailsDestination } from "@/lib/actions";
import { auth } from "@/lib/auth";
import { Clock, MapPin } from "@gravity-ui/icons";
import { Calendar, Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";

const DetailsDestinationPage = async ({ params }) => {
  const { id } = await params;
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const details = await getDetailsDestination(id, token);
  //   console.log(details);
  const {
    country,
    category,
    priceUSD,
    duration,
    departureDate,
    imageURL,
    description,
    imageUrl,
    price,
  } = details;

  return (
    <div>
      <div className="container mx-auto gap-2.5 flex">
        <EditDetails details={details} />
        <DeteleDestinations details={details} />
      </div>

      <div className="w-full mx-auto flex justify-center items-center min-h-screen p-4">
        <div className="max-w-2xl rounded-2xl overflow-hidden shadow-lg bg-white border border-slate-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group">
          {/* Image Container */}
          <div className="relative h-96 overflow-hidden bg-slate-200">
            {imageURL || imageUrl ? (
              <Image
                src={imageURL || imageUrl}
                alt={`Destination in ${country}`}
                height={600}
                width={670}
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-300 to-slate-400 text-slate-500">
                <span>No image available</span>
              </div>
            )}
            {/* Category Badge */}
            <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1">
              <svg
                className="w-3 h-3 text-indigo-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M17.5 1.5H2.5a1 1 0 00-1 1v4a1 1 0 001 1h15a1 1 0 001-1v-4a1 1 0 00-1-1zm-7.5 12l-5 5h15l-5-5h-5z" />
              </svg>
              {category}
            </span>
            {/* Price Tag */}
            <div className="absolute bottom-4 right-4 bg-indigo-600 text-white px-4 py-1.5 rounded-xl font-bold shadow-md">
              ${priceUSD || price}
            </div>
          </div>

          {/* Content Body */}
          <div className="p-6">
            {/* Location / Country */}
            <div className="flex items-center gap-1 text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-2">
              <MapPin className="w-4 h-4" />
              <span>{country}</span>
            </div>

            {/* Description */}
            <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-6">
              {description}
            </p>

            <hr className="border-slate-100 mb-4" />

            {/* Meta Details Footer */}
            <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>{duration}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span>{departureDate}</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="px-6 pb-6 flex items-center justify-center">
            <BookingCard details={details} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsDestinationPage;
