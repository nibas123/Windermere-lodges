"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, Users, Maximize, BedDouble, Bath, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Sample lodge data
const lodges = [
  {
    id: 1,
    name: "Lakeside Retreat",
    description: "A stunning waterfront lodge with panoramic lake views and private dock access.",
    price: 250,
    rating: 4.9,
    reviews: 128,
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    size: 1200,
    image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?q=80&w=800&auto=format&fit=crop",
    tags: ["Waterfront", "Hot Tub", "Pet Friendly"],
    featured: true,
  },
  {
    id: 2,
    name: "Forest Haven",
    description: "Secluded woodland lodge surrounded by ancient trees and wildlife.",
    price: 180,
    rating: 4.7,
    reviews: 94,
    guests: 4,
    bedrooms: 2,
    bathrooms: 1,
    size: 950,
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=800&auto=format&fit=crop",
    tags: ["Woodland", "Fireplace", "Hiking Trails"],
    featured: false,
  },
  {
    id: 3,
    name: "Mountain View Cabin",
    description: "Elevated position with breathtaking mountain panoramas and luxury interiors.",
    price: 220,
    rating: 4.8,
    reviews: 112,
    guests: 5,
    bedrooms: 2,
    bathrooms: 2,
    size: 1050,
    image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=800&auto=format&fit=crop",
    tags: ["Mountain View", "Sauna", "Balcony"],
    featured: true,
  },
  {
    id: 4,
    name: "Riverside Lodge",
    description: "Peaceful lodge alongside a gentle river with fishing rights and outdoor dining.",
    price: 195,
    rating: 4.6,
    reviews: 86,
    guests: 4,
    bedrooms: 2,
    bathrooms: 1,
    size: 900,
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=800&auto=format&fit=crop",
    tags: ["Riverside", "Fishing", "BBQ Area"],
    featured: false,
  },
  {
    id: 5,
    name: "Luxury Hilltop Villa",
    description: "Premium lodge with panoramic views, infinity pool and high-end amenities.",
    price: 350,
    rating: 5.0,
    reviews: 74,
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    size: 1800,
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=800&auto=format&fit=crop",
    tags: ["Luxury", "Infinity Pool", "Home Cinema"],
    featured: true,
  },
  {
    id: 6,
    name: "Cozy Valley Retreat",
    description: "Intimate lodge nestled in a tranquil valley with beautiful garden.",
    price: 165,
    rating: 4.5,
    reviews: 68,
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    size: 750,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
    tags: ["Romantic", "Garden", "Wood Burner"],
    featured: false,
  },
]

export function LodgeList() {
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id))
    } else {
      setFavorites([...favorites, id])
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Available Lodges</h2>
        <div className="text-sm text-gray-500">Showing {lodges.length} lodges</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {lodges.map((lodge) => (
          <Card key={lodge.id} className="overflow-hidden">
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 relative h-48">
                <Image src={lodge.image || "/placeholder.svg"} alt={lodge.name} fill className="object-cover" />
              </div>
              <button
                onClick={() => toggleFavorite(lodge.id)}
                className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md"
              >
                <Heart
                  size={20}
                  className={favorites.includes(lodge.id) ? "fill-red-500 text-red-500" : "text-gray-400"}
                />
              </button>
              {lodge.featured && <Badge className="absolute top-3 left-3 bg-emerald-600">Featured</Badge>}
            </div>

            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">{lodge.name}</h3>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
                  <span className="text-sm font-medium">{lodge.rating}</span>
                  <span className="text-xs text-gray-500 ml-1">({lodge.reviews})</span>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4">{lodge.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {lodge.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="bg-gray-100">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2 text-gray-500" />
                  <span>{lodge.guests} Guests</span>
                </div>
                <div className="flex items-center">
                  <BedDouble className="h-4 w-4 mr-2 text-gray-500" />
                  <span>{lodge.bedrooms} Bedrooms</span>
                </div>
                <div className="flex items-center">
                  <Bath className="h-4 w-4 mr-2 text-gray-500" />
                  <span>{lodge.bathrooms} Bathrooms</span>
                </div>
                <div className="flex items-center">
                  <Maximize className="h-4 w-4 mr-2 text-gray-500" />
                  <span>{lodge.size} sq ft</span>
                </div>
              </div>
            </CardContent>

            <CardFooter className="p-5 pt-0 flex justify-between items-center border-t border-gray-100">
              <div>
                <span className="text-2xl font-bold text-emerald-600">£{lodge.price}</span>
                <span className="text-gray-500 text-sm"> / night</span>
              </div>
              <Link href="/booking">
                <Button className="bg-emerald-600 hover:bg-emerald-700">Book Now</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

