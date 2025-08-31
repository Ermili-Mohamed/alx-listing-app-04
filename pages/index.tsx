import axios from "axios";
import { useEffect, useState } from "react";
import { PropertyCard } from "@/components/property";
import { PropertyProps } from "@/interfaces";

export default function Home() {
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get("/api/properties");
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
        setError("Failed to fetch properties. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading properties...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Oops! Something went wrong</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (properties.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-400 text-6xl mb-4">🏠</div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">No Properties Found</h2>
          <p className="text-gray-600">There are no properties available at the moment.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect Stay
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover amazing properties in the most beautiful locations around the world
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </div>

        {/* Results Count */}
        <div className="text-center mt-8 text-gray-600">
          Showing {properties.length} properties
        </div>
      </div>
    </div>
  );
}
