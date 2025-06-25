'use client';

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Users, Maximize, ArrowRight } from "lucide-react"

const lodges = [
  {
    id: 1,
    name: "Glenridding Lodge",
    // description: "A stunning lodge with panoramic lake views and private hot tub",
    description: "Grasmere 2, White Cross Bay near Windermere, Cumbria & The Lake District (Ref. 1068867)",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop",
    price: 250,
    rating: 4.9,
    capacity: 4,
    bedrooms: 2,
    bathrooms: 3,
    size: 120,
    features: ["Off road parking", "Garden / Patio", "Cot available", "+3"],
    isNew: true,
  },
  {
    id: 2,
    name: "Water's Reach",
    // description: "Secluded woodland lodge surrounded by ancient trees and wildlife",
    description: "White Cross Bay Holiday Park near Troutbeck Bridge, Cumbria & The Lake District (Ref. 1172323)",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop",
    price: 195,
    rating: 4.7,
    capacity: 2,
    bedrooms: 2,
    bathrooms: 3,
    size: 90,
    features: ["Swimming pool", "Cot available", "Highchair available", "+3"],
    isNew: false,
  },
  {
    id: 3,
    name: "Serenity",
    // description: "Elevated position with breathtaking mountain and valley views",
    description: "Skiptory Howe 10, White Cross Bay near Windermere, Cumbria & The Lake District (Ref. 1172347)",
    image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=2070&auto=format&fit=crop",
    price: 275,
    rating: 4.8,
    capacity: 6,
    bedrooms: 3,
    batahrooms: 2,
    size: 20,
    features: ["Off road parking", "Ground floor accommodation", "+3"],
    isNew: false,
  },
]

export const FeaturedLodges = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Featured Lodges</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our most popular luxury lodges, each offering a unique Lake District experience with stunning views
            and premium amenities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lodges.map((lodge) => (
            <Card
              key={lodge.id}
              className="overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-64">
                <Image src={lodge.image || "/placeholder.svg"} alt={lodge.name} fill className="object-cover" />
                {lodge.isNew && (
                  <Badge className="absolute top-4 left-4 bg-emerald-600 hover:bg-emerald-700">New</Badge>
                )}
                <div className="absolute bottom-4 left-4 flex items-center bg-white bg-opacity-90 px-2 py-1 rounded-full">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" fill="currentColor" />
                  <span className="text-sm font-medium">{lodge.rating}</span>
                </div>
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                  £{lodge.price}/night
                </div>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{lodge.name}</CardTitle>
                  <Badge variant="secondary">£{lodge.price}/night</Badge>
                </div>
                <CardDescription>{lodge.description}</CardDescription>
              </CardHeader>

              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{lodge.capacity} Guests</span>
                  </div>
                  <div className="flex items-center">
                    <Maximize className="h-4 w-4 mr-1" />
                    <span>{lodge.size} m²</span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {lodge.features.map((feature, index) => (
                    <Badge key={index} variant="outline" className="bg-gray-100">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex justify-between pt-0">
                <Link href={`/our-lodges/${lodge.id}`} passHref>
                  <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                    View Details
                  </Button>
                </Link>
                <Link href="/booking">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">Book Now</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <Link href="/our-lodges">
            <Button variant="outline" size="lg" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
              View All Lodges <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div> */}
      </div>
    </section>
  )
}

