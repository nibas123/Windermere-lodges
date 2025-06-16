"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlusCircle, Clock, MapPin, Star } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ItineraryRecommendations() {
  const [activeTab, setActiveTab] = useState("popular")
  const { toast } = useToast()

  const handleAddToItinerary = (activity: any) => {
    toast({
      title: "Added to Itinerary",
      description: `${activity.title} has been added to your itinerary.`,
    })
  }

  const recommendedActivities = {
    popular: [
      {
        id: 1,
        title: "Lake Windermere Cruise",
        description:
          "Experience the beauty of England's largest lake with a guided cruise. Enjoy breathtaking views of the surrounding fells and learn about the lake's history and wildlife.",
        image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=800&auto=format&fit=crop",
        duration: "45 minutes - 3 hours",
        location: "Bowness Pier",
        rating: 4.8,
        reviews: 1245,
        category: "water",
      },
      {
        id: 2,
        title: "Beatrix Potter Gallery & Hill Top House",
        description:
          "Step into the world of Beatrix Potter with a visit to her 17th-century farmhouse and the gallery showcasing her original illustrations and personal effects.",
        image: "https://images.unsplash.com/photo-1585779034823-7e9ac8faec70?q=80&w=800&auto=format&fit=crop",
        duration: "2-3 hours",
        location: "Near Sawrey",
        rating: 4.7,
        reviews: 892,
        category: "cultural",
      },
      {
        id: 3,
        title: "Ambleside to Grasmere Scenic Walk",
        description:
          "A beautiful moderate walk connecting two charming Lake District villages through stunning landscapes and literary connections.",
        image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=800&auto=format&fit=crop",
        duration: "3-4 hours",
        location: "Ambleside",
        rating: 4.9,
        reviews: 756,
        category: "hiking",
      },
    ],
    family: [
      {
        id: 4,
        title: "The World of Beatrix Potter Attraction",
        description:
          "A magical indoor recreation of Beatrix Potter's beloved stories, bringing Peter Rabbit and friends to life for children of all ages.",
        image: "https://images.unsplash.com/photo-1585779034823-7e9ac8faec70?q=80&w=800&auto=format&fit=crop",
        duration: "1-2 hours",
        location: "Bowness-on-Windermere",
        rating: 4.6,
        reviews: 1023,
        category: "family",
      },
      {
        id: 5,
        title: "Brockhole on Windermere",
        description:
          "The Lake District Visitor Centre offering treetop adventures, boat rentals, archery, mini-golf, and beautiful gardens.",
        image: "https://images.unsplash.com/photo-1603114595741-db0684d3aafc?q=80&w=800&auto=format&fit=crop",
        duration: "Half day or full day",
        location: "Windermere",
        rating: 4.5,
        reviews: 876,
        category: "family",
      },
      {
        id: 6,
        title: "Lakeland Wildlife Oasis",
        description:
          "A unique zoo and conservation center with snow leopards, meerkats, and interactive exhibits perfect for curious young minds.",
        image: "https://images.unsplash.com/photo-1574147833132-363613d8c4bd?q=80&w=800&auto=format&fit=crop",
        duration: "2-3 hours",
        location: "Milnthorpe",
        rating: 4.4,
        reviews: 542,
        category: "family",
      },
    ],
    adventure: [
      {
        id: 7,
        title: "Scafell Pike Summit Hike",
        description:
          "Conquer England's highest mountain with a guided hike to the summit of Scafell Pike. Experience stunning panoramic views across the Lake District and beyond.",
        image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=800&auto=format&fit=crop",
        duration: "6-8 hours",
        location: "Wasdale",
        rating: 4.9,
        reviews: 687,
        category: "adventure",
      },
      {
        id: 8,
        title: "Honister Slate Mine Via Ferrata",
        description:
          "An exhilarating high-wire adventure following the original miners' route up the steep outer incline of Fleetwith Pike.",
        image: "https://images.unsplash.com/photo-1581439645468-327982a0da29?q=80&w=800&auto=format&fit=crop",
        duration: "3-4 hours",
        location: "Honister Pass",
        rating: 4.8,
        reviews: 432,
        category: "adventure",
      },
      {
        id: 9,
        title: "Ghyll Scrambling",
        description:
          "A thrilling adventure climbing up mountain streams, jumping into deep pools, and sliding down natural water chutes.",
        image: "https://images.unsplash.com/photo-1603114595741-db0684d3aafc?q=80&w=800&auto=format&fit=crop",
        duration: "3 hours",
        location: "Langdale Valley",
        rating: 4.7,
        reviews: 389,
        category: "adventure",
      },
    ],
    relaxation: [
      {
        id: 10,
        title: "Brimstone Spa Experience",
        description:
          "A luxurious spa day with thermal experiences, indoor and outdoor pools, and relaxation lounges in a stunning setting.",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop",
        duration: "Half day or full day",
        location: "Langdale Estate",
        rating: 4.9,
        reviews: 512,
        category: "relaxation",
      },
      {
        id: 11,
        title: "Afternoon Tea at Lindeth Howe",
        description:
          "Indulge in a traditional afternoon tea with lake views at Beatrix Potter's former home, now a country house hotel.",
        image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=800&auto=format&fit=crop",
        duration: "1-2 hours",
        location: "Bowness-on-Windermere",
        rating: 4.6,
        reviews: 378,
        category: "relaxation",
      },
      {
        id: 12,
        title: "Sunset Cruise with Champagne",
        description:
          "A private evening cruise on Lake Windermere with champagne and canapés as the sun sets over the fells.",
        image: "https://images.unsplash.com/photo-1567013275689-c179a874478f?q=80&w=800&auto=format&fit=crop",
        duration: "2 hours",
        location: "Bowness Bay",
        rating: 4.8,
        reviews: 245,
        category: "relaxation",
      },
    ],
  }

  const activities = recommendedActivities[activeTab as keyof typeof recommendedActivities] || []

  return (
    <div>
      <Tabs defaultValue="popular" value={activeTab} onValueChange={setActiveTab}>
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="popular">Most Popular</TabsTrigger>
            <TabsTrigger value="family">Family Friendly</TabsTrigger>
            <TabsTrigger value="adventure">Adventure</TabsTrigger>
            <TabsTrigger value="relaxation">Relaxation</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value={activeTab} className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity) => (
              <Card key={activity.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={activity.image || "/placeholder.svg"}
                    alt={activity.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <Badge className="absolute top-3 right-3 bg-teal-600">
                    {activity.category.charAt(0).toUpperCase() + activity.category.slice(1)}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{activity.title}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-sm">{activity.rating}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{activity.description}</p>

                  <div className="flex flex-col space-y-1 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-teal-600" />
                      <span>{activity.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-teal-600" />
                      <span>{activity.location}</span>
                    </div>
                  </div>

                  <Button
                    onClick={() => handleAddToItinerary(activity)}
                    className="w-full bg-teal-600 hover:bg-teal-700"
                  >
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add to Itinerary
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

