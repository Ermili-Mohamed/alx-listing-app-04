import React from 'react';
import { PropertyProps } from '@/interfaces';

interface PropertyCardProps {
 property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
 const { name, address, rating, category, price, offers, image, discount } = property;

 return (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
   {/* Property Image */}
   <div className="relative">
    <img
     src={image}
     alt={name}
     className="w-full h-48 object-cover"
    />
    {discount && (
     <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
      {discount}
     </div>
    )}
   </div>

   {/* Property Details */}
   <div className="p-4">
    {/* Property Name and Rating */}
    <div className="flex justify-between items-start mb-2">
     <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
     <div className="flex items-center">
      <span className="text-yellow-500">★</span>
      <span className="ml-1 text-sm text-gray-600">{rating}</span>
     </div>
    </div>

    {/* Location */}
    <p className="text-gray-600 text-sm mb-3">
     {address.city}, {address.state}, {address.country}
    </p>

    {/* Categories */}
    <div className="flex flex-wrap gap-1 mb-3">
     {category.map((cat, index) => (
      <span
       key={index}
       className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
      >
       {cat}
      </span>
     ))}
    </div>

    {/* Property Features */}
    <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
     <span className="flex items-center">
      <span className="mr-1">🛏️</span>
      {offers.bed}
     </span>
     <span className="flex items-center">
      <span className="mr-1">🚿</span>
      {offers.shower}
     </span>
     <span className="flex items-center">
      <span className="mr-1">👥</span>
      {offers.occupants}
     </span>
    </div>

    {/* Price */}
    <div className="flex justify-between items-center">
     <div>
      <span className="text-2xl font-bold text-gray-800">${price}</span>
      <span className="text-gray-500 text-sm ml-1">/night</span>
     </div>
     <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200">
      Book Now
     </button>
    </div>
   </div>
  </div>
 );
};

export default PropertyCard;
