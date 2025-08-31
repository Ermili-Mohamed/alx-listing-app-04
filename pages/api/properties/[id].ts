import { NextApiRequest, NextApiResponse } from "next";
import { PropertyProps } from "@/interfaces";

const mockProperties: PropertyProps[] = [
  {
    name: "Luxury Beach Villa",
    address: {
      state: "California",
      city: "Malibu",
      country: "USA",
    },
    rating: 4.8,
    category: ["Beach", "Luxury", "Ocean View"],
    price: 450,
    offers: {
      bed: "3 Bedrooms",
      shower: "2 Bathrooms",
      occupants: "6 Guests",
    },
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
    discount: "20% OFF",
  },
  {
    name: "Cozy Mountain Cabin",
    address: {
      state: "Colorado",
      city: "Aspen",
      country: "USA",
    },
    rating: 4.6,
    category: ["Mountain", "Rustic", "Skiing"],
    price: 280,
    offers: {
      bed: "2 Bedrooms",
      shower: "1 Bathroom",
      occupants: "4 Guests",
    },
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
    discount: "",
  },
  {
    name: "Modern City Apartment",
    address: {
      state: "New York",
      city: "Manhattan",
      country: "USA",
    },
    rating: 4.7,
    category: ["City", "Modern", "Downtown"],
    price: 320,
    offers: {
      bed: "1 Bedroom",
      shower: "1 Bathroom",
      occupants: "2 Guests",
    },
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
    discount: "15% OFF",
  },
  {
    name: "Tropical Paradise Resort",
    address: {
      state: "Hawaii",
      city: "Maui",
      country: "USA",
    },
    rating: 4.9,
    category: ["Tropical", "Resort", "Beachfront"],
    price: 580,
    offers: {
      bed: "4 Bedrooms",
      shower: "3 Bathrooms",
      occupants: "8 Guests",
    },
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
    discount: "25% OFF",
  },
  {
    name: "Historic Downtown Loft",
    address: {
      state: "Louisiana",
      city: "New Orleans",
      country: "USA",
    },
    rating: 4.5,
    category: ["Historic", "Downtown", "Cultural"],
    price: 220,
    offers: {
      bed: "1 Bedroom",
      shower: "1 Bathroom",
      occupants: "2 Guests",
    },
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    discount: "",
  },
  {
    name: "Desert Oasis Villa",
    address: {
      state: "Arizona",
      city: "Sedona",
      country: "USA",
    },
    rating: 4.7,
    category: ["Desert", "Luxury", "Scenic"],
    price: 380,
    offers: {
      bed: "3 Bedrooms",
      shower: "2 Bathrooms",
      occupants: "6 Guests",
    },
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop",
    discount: "10% OFF",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PropertyProps | { error: string }>
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { id } = req.query;

  if (!id || typeof id !== "string") {
    return res.status(400).json({ error: "Property ID is required" });
  }

  // Find property by ID (using index as ID for mock data)
  const propertyIndex = parseInt(id);

  if (
    isNaN(propertyIndex) ||
    propertyIndex < 0 ||
    propertyIndex >= mockProperties.length
  ) {
    return res.status(404).json({ error: "Property not found" });
  }

  const property = mockProperties[propertyIndex];

  // Simulate API delay
  setTimeout(() => {
    res.status(200).json(property);
  }, 500);
}
