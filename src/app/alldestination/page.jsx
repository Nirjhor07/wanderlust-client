import { getApiActions } from "@/lib/actions";
import Image from "next/image";

const AllDestinationPage = async () => {
  const tours = await getApiActions();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            All Destinations
          </h1>
          <p className="text-xl text-gray-300">
            Explore amazing travel experiences around the world
          </p>
        </div>

        {/* Tours Grid */}
        {tours && tours.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <div
                key={tour._id}
                className="bg-slate-700 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-64 w-full overflow-hidden bg-gray-600">
                  {tour.imageUrl || tour.imageURL ? (
                    <Image
                      src={tour.imageUrl || tour.imageURL}
                      alt={tour.destinationName}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white text-2xl font-bold">
                      {tour.destinationName?.[0] || "D"}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {tour.destinationName}
                  </h2>

                  <p className="text-cyan-400 text-sm mb-4 flex items-center">
                    📍 {tour.country}
                  </p>

                  <div className="space-y-3 mb-4 text-gray-300">
                    <p className="flex items-center gap-2">
                      <span className="text-cyan-400">Category:</span>
                      <span className="bg-blue-900 px-3 py-1 rounded-full text-sm">
                        {tour.category}
                      </span>
                    </p>

                    <p className="flex items-center gap-2">
                      <span className="text-cyan-400">Duration:</span>
                      <span>{tour.duration}</span>
                    </p>

                    <p className="flex items-center gap-2">
                      <span className="text-cyan-400">Departure:</span>
                      <span>
                        {new Date(tour.departureDate).toLocaleDateString()}
                      </span>
                    </p>
                  </div>

                  {/* Price and Button */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-600">
                    <div className="text-3xl font-bold text-cyan-400">
                      ${tour.price || tour.priceUSD}
                    </div>
                    <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-300">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-300">
              No destinations available yet
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllDestinationPage;
