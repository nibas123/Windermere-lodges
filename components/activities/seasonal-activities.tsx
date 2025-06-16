import { Card, CardContent } from "@/components/ui/card"
import { Sun, Cloud, Leaf, Snowflake } from "lucide-react"

export function SeasonalActivities() {
  const seasons = [
    {
      name: "Spring",
      icon: Cloud,
      color: "bg-green-100 text-green-600",
      description:
        "Experience the Lake District coming to life with blooming daffodils, newborn lambs, and refreshing walks.",
      activities: [
        "Bluebells and wildflower walks",
        "Spring wildlife spotting",
        "Photography tours",
        "Garden visits",
        "Waterfall trails (best after spring showers)",
      ],
    },
    {
      name: "Summer",
      icon: Sun,
      color: "bg-yellow-100 text-yellow-600",
      description: "Make the most of long summer days with water activities, mountain hikes, and outdoor dining.",
      activities: [
        "Wild swimming",
        "Boat trips and water sports",
        "Fell walking and hiking",
        "Outdoor concerts and events",
        "Al fresco dining experiences",
      ],
    },
    {
      name: "Autumn",
      icon: Leaf,
      color: "bg-orange-100 text-orange-600",
      description: "Witness the spectacular colors of autumn as the fells and woodlands transform in golden hues.",
      activities: [
        "Autumn color photography",
        "Mushroom foraging tours",
        "Cozy pub walks",
        "Stargazing (darker evenings)",
        "Harvest festivals and events",
      ],
    },
    {
      name: "Winter",
      icon: Snowflake,
      color: "bg-blue-100 text-blue-600",
      description: "Experience the magical winter landscape, cozy fireside dining, and crisp winter walks.",
      activities: [
        "Winter walking with snow-capped mountains",
        "Christmas markets and events",
        "Fireside dining experiences",
        "Indoor spa days",
        "Winter wildlife spotting",
      ],
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Activities For Every Season</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The Lake District offers unique experiences throughout the year. Discover the best activities for your stay,
            whatever the season.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {seasons.map((season, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className={`p-6 ${season.color} flex items-center`}>
                <season.icon className="h-8 w-8 mr-3" />
                <h3 className="text-xl font-bold">{season.name}</h3>
              </div>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4">{season.description}</p>
                <ul className="space-y-2">
                  {season.activities.map((activity, i) => (
                    <li key={i} className="flex items-start">
                      <span className={`h-1.5 w-1.5 rounded-full ${season.color.split(" ")[1]} mt-2 mr-2`}></span>
                      <span className="text-sm">{activity}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

