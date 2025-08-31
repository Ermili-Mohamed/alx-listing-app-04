import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";
import { PropertyProps } from "@/interfaces";
import PropertyDetail from "@/components/property/PropertyDetail";

export default function PropertyDetailPage() {
 const router = useRouter();
 const { id } = router.query;
 const [property, setProperty] = useState<PropertyProps | null>(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState<string | null>(null);

 useEffect(() => {
  const fetchProperty = async () => {
   if (!id) return;

   try {
    setLoading(true);
    setError(null);
    const response = await axios.get(`/api/properties/${id}`);
    setProperty(response.data);
   } catch (error) {
    console.error("Error fetching property details:", error);
    setError("Failed to fetch property details. Please try again later.");
   } finally {
    setLoading(false);
   }
  };

  fetchProperty();
 }, [id]);

 if (loading) {
  return (
   <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
     <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
     <p className="text-gray-600 text-lg">Loading property details...</p>
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
     <div className="flex gap-4 justify-center">
      <button
       onClick={() => router.back()}
       className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
      >
       Go Back
      </button>
      <button
       onClick={() => window.location.reload()}
       className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
      >
       Try Again
      </button>
     </div>
    </div>
   </div>
  );
 }

 if (!property) {
  return (
   <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
     <div className="text-gray-400 text-6xl mb-4">🏠</div>
     <h2 className="text-2xl font-semibold text-gray-800 mb-2">Property Not Found</h2>
     <p className="text-gray-600 mb-4">The property you're looking for doesn't exist or has been removed.</p>
     <button
      onClick={() => router.push('/')}
      className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
     >
      Back to Home
     </button>
    </div>
   </div>
  );
 }

 return <PropertyDetail property={property} propertyId={id as string} />;
}
