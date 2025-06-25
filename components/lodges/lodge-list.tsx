"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, Users, Maximize, BedDouble, Bath, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Sample lodge data
export const lodges = [
  {
    id: 1,
    name: "Glenridding Lodge",
    // description: "A stunning lodge with panoramic lake views and private hot tub",
    description: "Grasmere 2, White Cross Bay near Windermere, Cumbria & The Lake District (Ref. 1068867)",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop",
    price: 250,
    rating: 4.9,
    reviews: 68,
    guests: 4,
    bedrooms: 2,
    bathrooms: 3,
    size: 120,
    tags: ["Off road parking", "Garden / Patio", "Cot available", "Highchair available", "Pub/shop < 1 mile", "Dishwasher", "Broadband / WiFi"],
    // isNew: true,
    featured: true,
  },
  {
    id: 2,
    name: "Water's Reach",
    // description: "Secluded woodland lodge surrounded by ancient trees and wildlife",
    description: "White Cross Bay Holiday Park near Troutbeck Bridge, Cumbria & The Lake District (Ref. 1172323)",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop",
    price: 195,
    rating: 4.7,
    reviews: 68,
    guests: 2,
    bedrooms: 2,
    bathrooms: 3,
    size: 90,
    tags: ["Swimming pool", "Off road parking", "Ground floor accommodation", "Ground floor bedroom", "Garden / Patio", "Cot available", "Highchair available", "Pub/shop < 1 mile", "Dishwasher", "Broadband / WiFi"],
    // isNew: false,
    featured: false,
  },
  {
    id: 3,
    name: "Serenity",
    // description: "Elevated position with breathtaking mountain and valley views",
    description: "Skiptory Howe 10, White Cross Bay near Windermere, Cumbria & The Lake District (Ref. 1172347)",
    image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=2070&auto=format&fit=crop",
    price: 275,
    rating: 4.8,
    reviews: 68,
    guests: 6,
    bedrooms: 3,
    batahrooms: 2,
    size: 20,
    tags: ["Off road parking", "Garden / Patio", "Pub/shop < 1 mile", "Dishwasher", "Broadband / WiFi", "Ground floor accommodation",],
    featured: false,
    // isNew: false,
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

      <div className="flex overflow-x-auto justify-center pb-4 mb-4">
        {lodges.map((lodge) => (
          <div key={lodge.id} className="min-w-[350px] w-[750px] pr-6">
          <Card className="overflow-hidden h-full w-full flex flex-col">
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 relative h-80">
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

            <CardContent className="p-5 flex-grow">
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

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
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

            <CardFooter className="p-5 pt-0 flex justify-between items-center border-t border-gray-100 mt-auto">
              <div>
                <span className="text-2xl font-bold text-emerald-600">£{lodge.price}</span>
                <span className="text-gray-500 text-sm"> / night</span>
              </div>
              <Link href={`/our-lodges/${lodge.id}`} passHref>
                <Button className="bg-emerald-600 hover:bg-emerald-700">View Details</Button>
              </Link>
            </CardFooter>
          </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

