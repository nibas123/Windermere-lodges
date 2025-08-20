"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Navigation } from "lucide-react"

export function ActivitiesMap() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [isClient, setIsClient] = useState(false)

  // Handle hydration mismatch with useEffect
  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Activities Near You</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the best activities and attractions within easy reach of Windermere Lodges
          </p>
        </div>

        <Card className="overflow-hidden border shadow-md">
          <Tabs defaultValue="all" onValueChange={setActiveCategory}>
            <div className="border-b p-4">
              <TabsList className="grid grid-cols-6">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="water">Water</TabsTrigger>
                <TabsTrigger value="adventure">Adventure</TabsTrigger>
                <TabsTrigger value="cultural">Cultural</TabsTrigger>
                <TabsTrigger value="food">Food & Drink</TabsTrigger>
                <TabsTrigger value="family">Family</TabsTrigger>
              </TabsList>
            </div>

            <CardContent className="p-0">
              <div className="grid md:grid-cols-3">
                <div className="p-4 border-r overflow-y-auto max-h-[500px]">
                  <div className="space-y-4">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="flex items-start p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
                        <div className="h-12 w-12 rounded-md bg-teal-100 flex items-center justify-center mr-3 flex-shrink-0">
                          <MapPin className="h-6 w-6 text-teal-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">Activity {i + 1}</h4>
                          <p className="text-xs text-gray-500">
                            {i % 2 === 0 ? "5 min drive" : i % 3 === 0 ? "15 min drive" : "10 min drive"}
                          </p>
                          <p className="text-xs text-gray-600 mt-1">
                            Brief description about this activity or attraction near Windermere Lodges.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-2 h-[500px] bg-gray-200 relative">
                  {/* This would be a real map in production */}
                  <div className="absolute inset-0 flex items-center justify-center flex-col text-gray-500">
                    <Navigation className="h-16 w-16 mb-4 text-teal-600" />
                    <p className="text-lg font-medium">Interactive Map</p>
                    <p className="text-sm">Showing activities near Windermere Lodges</p>
                  </div>

                  {/* Map pins would be positioned absolutely here */}
                  <div className="absolute top-1/4 left-1/3 w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center text-white text-xs animate-pulse">
                    1
                  </div>
                  <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center text-white text-xs animate-pulse">
                    2
                  </div>
                  <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center text-white text-xs animate-pulse">
                    3
                  </div>
                </div>
              </div>
            </CardContent>
          </Tabs>
        </Card>

        <div className="text-center mt-8 text-sm text-gray-500">
          <p>Use our interactive map to discover activities and attractions near your lodge.</p>
          <p>Click on any pin to see details and get directions.</p>
        </div>
      </div>
    </section>
  )
}

