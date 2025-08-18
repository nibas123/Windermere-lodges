"use client";

import Image from "next/image";
import {
  Card,
} from "@/components/ui/card";

const activities = [
  {
    title: "Lake Cruises",
    image:
      "https://images.unsplash.com/photo-1516132006923-6cf348e5dee2?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Hiking Trails",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Kayaking",
    image:
      "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Treking",
    image: "activities/4.png",
  },
];

export const Activities = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore the Lake District
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover a wide range of activities and attractions in the stunning
            Lake District National Park
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <Card
              key={index}
              className="overflow-hidden border-0 shadow-lg group relative cursor-pointer"
            >
              <div className="relative h-96">
                <Image
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105 group-hover:blur-[2px]"
                />
                <div className="absolute inset-0 flex flex-col items-end bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="w-full text-white text-2xl font-bold p-6 text-center">
                    {activity.title}
                  </span>
                  <span className="w-full text-white p-6 text-center">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione et pariatur laudantium exercitationem, magni ea enim
                    fuga excepturi error assumenda itaque est odio nobis iusto
                    natus ut repellat. Animi, vel?
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg">
              <div className="relative h-48">
                <Image src={activity.image || "/placeholder.svg"} alt={activity.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{activity.title}</CardTitle>
                <CardDescription>{activity.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-emerald-600" />
                    <span>{activity.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1 text-emerald-600" />
                    <span>{activity.season}</span>
                  </div>
                </div>
                <div className="flex gap-2 mt-2">
                  <Badge variant="secondary">{activity.duration}</Badge>
                  <Badge 
                    variant="outline"
                    className={
                      activity.difficulty === 'Easy' 
                        ? 'border-green-500 text-green-500'
                        : activity.difficulty === 'Moderate'
                        ? 'border-yellow-500 text-yellow-500'
                        : 'border-red-500 text-red-500'
                    }
                  >
                    {activity.difficulty}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div> */}

        {/* <div className="text-center mt-12">
          <Link href="/activities">
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              View All Activities <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div> */}
      </div>
    </section>
  );
};
