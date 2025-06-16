import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, MapPin } from "lucide-react"

interface ItineraryPreviewProps {
  itinerary: any
}

export function ItineraryPreview({ itinerary }: ItineraryPreviewProps) {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-GB", {
      weekday: "short",
      day: "numeric",
      month: "short",
    }).format(date)
  }

  const getActivityTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      sightseeing: "bg-purple-100 border-purple-300",
      hiking: "bg-green-100 border-green-300",
      water: "bg-blue-100 border-blue-300",
      dining: "bg-orange-100 border-orange-300",
      coffee: "bg-yellow-100 border-yellow-300",
      cycling: "bg-indigo-100 border-indigo-300",
      photography: "bg-pink-100 border-pink-300",
      camping: "bg-emerald-100 border-emerald-300",
    }

    return colors[type] || "bg-gray-100 border-gray-300"
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Itinerary</CardTitle>
      </CardHeader>
      <CardContent>
        {itinerary.days && itinerary.days.length > 0 ? (
          <div className="space-y-6">
            {itinerary.days.map((day: any, index: number) => (
              <div key={index}>
                <h3 className="font-medium text-lg border-b pb-2 mb-3">
                  Day {index + 1}: {formatDate(day.date)}
                </h3>

                {day.activities.length > 0 ? (
                  <div className="space-y-3">
                    {day.activities.map((activity: any) => (
                      <div key={activity.id} className={`p-2 border rounded-md ${getActivityTypeColor(activity.type)}`}>
                        <h4 className="font-medium text-sm">{activity.title}</h4>
                        <div className="flex items-center text-xs text-gray-600 mt-1">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{activity.time}</span>

                          {activity.location && (
                            <div className="flex items-center ml-2">
                              <MapPin className="h-3 w-3 mr-1" />
                              <span>{activity.location}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500 italic">No activities planned yet</p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            <p>Select your dates to start planning your itinerary</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

