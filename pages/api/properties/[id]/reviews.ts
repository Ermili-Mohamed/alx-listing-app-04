import { NextApiRequest, NextApiResponse } from "next";

interface Review {
  id: string;
  propertyId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  userAvatar?: string;
}

// Mock reviews data
const mockReviews: Review[] = [
  {
    id: "1",
    propertyId: "0",
    userName: "Sarah Johnson",
    rating: 5,
    comment: "Absolutely stunning property! The ocean view was breathtaking and the amenities were top-notch. Highly recommend for anyone looking for a luxury beach getaway.",
    date: "2024-01-15",
    userAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: "2",
    propertyId: "0",
    userName: "Michael Chen",
    rating: 4,
    comment: "Great location and beautiful property. The rooms were spacious and clean. Only minor issue was the WiFi was a bit slow at times.",
    date: "2024-01-10",
    userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: "3",
    propertyId: "0",
    userName: "Emily Rodriguez",
    rating: 5,
    comment: "Perfect vacation rental! The kitchen was fully equipped, the beds were comfortable, and the beach access was incredible. Will definitely return!",
    date: "2024-01-05",
    userAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: "4",
    propertyId: "1",
    userName: "David Thompson",
    rating: 4,
    comment: "Cozy cabin with amazing mountain views. Perfect for a winter ski trip. The rustic charm was exactly what we were looking for.",
    date: "2024-01-12",
    userAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: "5",
    propertyId: "1",
    userName: "Lisa Wang",
    rating: 5,
    comment: "Beautiful mountain retreat! The cabin was warm and inviting, perfect for our family getaway. The location was ideal for hiking and outdoor activities.",
    date: "2024-01-08",
    userAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: "6",
    propertyId: "2",
    userName: "James Wilson",
    rating: 4,
    comment: "Modern apartment in a great downtown location. Easy access to restaurants and attractions. The apartment was clean and well-maintained.",
    date: "2024-01-14",
    userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: "7",
    propertyId: "2",
    userName: "Amanda Lee",
    rating: 5,
    comment: "Excellent city apartment! The design was modern and stylish, perfect for our business trip. The building amenities were impressive.",
    date: "2024-01-09",
    userAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
  }
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Review[] | { error: string }>
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { id } = req.query;

  if (!id || typeof id !== "string") {
    return res.status(400).json({ error: "Property ID is required" });
  }

  // Filter reviews by property ID
  const propertyReviews = mockReviews.filter(review => review.propertyId === id);

  // Simulate API delay
  setTimeout(() => {
    res.status(200).json(propertyReviews);
  }, 300);
}
