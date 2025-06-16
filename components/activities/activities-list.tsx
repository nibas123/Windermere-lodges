import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Calendar, Users } from "lucide-react"

export function ActivitiesList() {
  const activities = [
    {
      title: "Lake Windermere Cruises",
      description:
        "Experience the beauty of England's largest lake with a guided cruise. Enjoy breathtaking views of the surrounding fells and learn about the lake's history and wildlife.",
      image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=800&auto=format&fit=crop",
      duration: "45 minutes - 3 hours",
      location: "Bowness Pier, 5 min drive",
      seasons: ["Spring", "Summer", "Autumn"],
      groupSize: "Any",
      category: "water",
      pricing: "From £12.50 per adult",
      bookable: true,
    },
    {
      title: "Scafell Pike Hike",
      description:
        "Conquer England's highest mountain with a guided hike to the summit of Scafell Pike. Experience stunning panoramic views across the Lake District and beyond.",
      image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=800&auto=format&fit=crop",
      duration: "6-8 hours",
      location: "Wasdale, 45 min drive",
      seasons: ["Spring", "Summer", "Autumn"],
      groupSize: "Up to 10",
      category: "adventure",
      pricing: "From £45 per person",
      bookable: true,
    },
    {
      title: "Beatrix Potter Gallery & Hill Top House",
      description:
        "Step into the world of Beatrix Potter with a visit to her 17th-century farmhouse and the gallery showcasing her original illustrations and personal effects.",
      image: "https://images.unsplash.com/photo-1585779034823-7e9ac8faec70?q=80&w=800&auto=format&fit=crop",
      duration: "2-3 hours",
      location: "Near Sawrey, 15 min drive",
      seasons: ["All year"],
      groupSize: "Any",
      category: "cultural",
      pricing: "From £14 per adult",
      bookable: true,
    },
    {
      title: "Zip Wire Adventure",
      description:
        "Experience the thrill of England's longest zip line as you soar over the spectacular Lake District landscape. A perfect adventure for adrenaline seekers.",
      image: "https://images.unsplash.com/photo-1581439645468-327982a0da29?q=80&w=800&auto=format&fit=crop",
      duration: "3 hours",
      location: "Honister, 40 min drive",
      seasons: ["Spring", "Summer", "Autumn"],
      groupSize: "2-20",
      category: "adventure",
      pricing: "From £55 per person",
      bookable: true,
    },
    {
      title: "Waterside Kayaking",
      description:
        "Explore the hidden shores and secret bays of Lake Windermere by kayak. Suitable for beginners and experienced paddlers alike.",
      image: "https://images.unsplash.com/photo-1603114595741-db0684d3aafc?q=80&w=800&auto=format&fit=crop",
      duration: "2-4 hours",
      location: "Waterhead, 10 min drive",
      seasons: ["Spring", "Summer", "Autumn"],
      groupSize: "1-12",
      category: "water",
      pricing: "From £35 per person",
      bookable: true,
    },
    {
      title: "Lakeland Distillery Tour",
      description:
        "Discover the craft behind the award-winning Lakes Distillery whisky, gin, and vodka with a guided tour and tasting session. Learn about the distillation process and sample their finest spirits.",
      image: "https://images.unsplash.com/photo-1574147833132-363613d8c4bd?q=80&w=800&auto=format&fit=crop",
      duration: "1.5 hours",
      location: "Bassenthwaite Lake, 30 min drive",
      seasons: ["All year"],
      groupSize: "2-20",
      category: "food-drink",
      pricing: "From £25 per person",
      bookable: true,
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Lake District Activities</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover unforgettable experiences in one of Britain's most beautiful regions
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-6">
            <Badge className="bg-teal-600 hover:bg-teal-700 cursor-pointer">All Activities</Badge>
            <Badge variant="outline" className="cursor-pointer">
              Water Activities
            </Badge>
            <Badge variant="outline" className="cursor-pointer">
              Adventure
            </Badge>
            <Badge variant="outline" className="cursor-pointer">
              Cultural
            </Badge>
            <Badge variant="outline" className="cursor-pointer">
              Food & Drink
            </Badge>
            <Badge variant="outline" className="cursor-pointer">
              Family Friendly
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <Badge
                  className={`absolute top-3 right-3 ${
                    activity.category === "water"
                      ? "bg-blue-600"
                      : activity.category === "adventure"
                        ? "bg-orange-600"
                        : activity.category === "cultural"
                          ? "bg-purple-600"
                          : activity.category === "food-drink"
                            ? "bg-red-600"
                            : "bg-teal-600"
                  }`}
                >
                  {activity.category === "food-drink"
                    ? "Food & Drink"
                    : activity.category.charAt(0).toUpperCase() + activity.category.slice(1)}
                </Badge>
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{activity.title}</CardTitle>
                <CardDescription>{activity.pricing}</CardDescription>
              </CardHeader>

              <CardContent className="flex-grow">
                <p className="text-gray-600 mb-4">{activity.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <Clock className="h-4 w-4 text-teal-600 mt-0.5 mr-2" />
                    <span>{activity.duration}</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 text-teal-600 mt-0.5 mr-2" />
                    <span>{activity.location}</span>
                  </div>
                  <div className="flex items-start">
                    <Calendar className="h-4 w-4 text-teal-600 mt-0.5 mr-2" />
                    <span>{activity.seasons.join(", ")}</span>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-4 w-4 text-teal-600 mt-0.5 mr-2" />
                    <span>Group size: {activity.groupSize}</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="border-t pt-4">
                {activity.bookable ? (
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">Book Activity</Button>
                ) : (
                  <Button className="w-full" variant="outline">
                    Learn More
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
            View All Activities
          </Button>
        </div>
      </div>
    </section>
  )
}

