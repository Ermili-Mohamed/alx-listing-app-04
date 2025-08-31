import React from 'react';
import Link from 'next/link';
import { PropertyProps } from '@/interfaces';
import { ReviewSection } from './index';

interface PropertyDetailProps {
 property: PropertyProps;
 propertyId?: string;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property, propertyId }) => {
 const { name, address, rating, category, price, offers, image, discount } = property;

 return (
  <div className="min-h-screen bg-gray-50 py-8">
   <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Breadcrumb */}
    <nav className="mb-8">
     <ol className="flex items-center space-x-2 text-sm text-gray-600">
      <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
      <li>/</li>
      <li><Link href="/properties" className="hover:text-blue-600">Properties</Link></li>
      <li>/</li>
      <li className="text-gray-900 font-medium">{name}</li>
     </ol>
    </nav>

    {/* Main Content */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
     {/* Left Column - Images and Basic Info */}
     <div>
      {/* Main Image */}
      <div className="relative mb-6">
       <img
        src={image}
        alt={name}
        className="w-full h-96 object-cover rounded-lg"
       />
       {discount && (
        <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-2 rounded-lg text-sm font-semibold">
         {discount}
        </div>
       )}
      </div>

      {/* Property Features */}
      <div className="bg-white rounded-lg p-6 mb-6">
       <h3 className="text-lg font-semibold text-gray-800 mb-4">Property Features</h3>
       <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
         <div className="text-2xl mb-2">🛏️</div>
         <div className="text-sm text-gray-600">{offers.bed}</div>
        </div>
        <div className="text-center">
         <div className="text-2xl mb-2">🚿</div>
         <div className="text-sm text-gray-600">{offers.shower}</div>
        </div>
        <div className="text-center">
         <div className="text-2xl mb-2">👥</div>
         <div className="text-sm text-gray-600">{offers.occupants}</div>
        </div>
       </div>
      </div>
     </div>

     {/* Right Column - Details and Booking */}
     <div>
      {/* Property Header */}
      <div className="bg-white rounded-lg p-6 mb-6">
       <div className="flex justify-between items-start mb-4">
        <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
        <div className="flex items-center">
         <span className="text-yellow-500 text-xl">★</span>
         <span className="ml-2 text-lg font-semibold">{rating}</span>
        </div>
       </div>

       {/* Location */}
       <p className="text-gray-600 text-lg mb-4">
        📍 {address.city}, {address.state}, {address.country}
       </p>

       {/* Categories */}
       <div className="flex flex-wrap gap-2 mb-6">
        {category.map((cat, index) => (
         <span
          key={index}
          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
         >
          {cat}
         </span>
        ))}
       </div>

       {/* Price and Booking */}
       <div className="border-t pt-6">
        <div className="flex justify-between items-center mb-6">
         <div>
          <span className="text-4xl font-bold text-gray-900">${price}</span>
          <span className="text-gray-500 text-lg ml-2">/night</span>
         </div>
         <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
          Book Now
         </button>
        </div>
       </div>
      </div>

      {/* Description */}
      <div className="bg-white rounded-lg p-6 mb-6">
       <h3 className="text-lg font-semibold text-gray-800 mb-4">About this property</h3>
       <p className="text-gray-600 leading-relaxed">
        Experience the perfect blend of luxury and comfort in this stunning {category.join(', ').toLowerCase()} property.
        Located in the heart of {address.city}, this accommodation offers everything you need for an unforgettable stay.
        With {offers.bed.toLowerCase()} and {offers.shower.toLowerCase()}, it&apos;s perfect for {offers.occupants.toLowerCase()}.
       </p>
      </div>

      {/* Amenities */}
      <div className="bg-white rounded-lg p-6 mb-6">
       <h3 className="text-lg font-semibold text-gray-800 mb-4">Amenities</h3>
       <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center">
         <span className="text-green-500 mr-3">✓</span>
         <span className="text-gray-600">Free WiFi</span>
        </div>
        <div className="flex items-center">
         <span className="text-green-500 mr-3">✓</span>
         <span className="text-gray-600">Air Conditioning</span>
        </div>
        <div className="flex items-center">
         <span className="text-green-500 mr-3">✓</span>
         <span className="text-gray-600">Kitchen</span>
        </div>
        <div className="flex items-center">
         <span className="text-green-500 mr-3">✓</span>
         <span className="text-gray-600">Free Parking</span>
        </div>
        <div className="flex items-center">
         <span className="text-green-500 mr-3">✓</span>
         <span className="text-gray-600">Washing Machine</span>
        </div>
        <div className="flex items-center">
         <span className="text-green-500 mr-3">✓</span>
         <span className="text-gray-600">TV</span>
        </div>
       </div>
      </div>
     </div>
    </div>

    {/* Reviews Section - Full Width */}
    <div className="mt-8">
     <ReviewSection propertyId={propertyId || "0"} />
    </div>
   </div>
  </div>
 );
};

export default PropertyDetail;
