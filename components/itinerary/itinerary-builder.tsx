"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  PlusCircle,
  Trash2,
  Clock,
  MapPin,
  Utensils,
  Coffee,
  Bike,
  MountainIcon as Hiking,
  Waves,
  Camera,
  Tent,
  Landmark,
} from "lucide-react"
import { DateRangePicker } from "@/components/booking/date-picker"
import type { DateRange } from "react-day-picker"

interface ItineraryBuilderProps {
  itinerary: any
  setItinerary: (itinerary: any) => void
}

export function ItineraryBuilder({ itinerary, setItinerary }: ItineraryBuilderProps) {
  const [dateRange, setDateRange] = useState<DateRange | undefined>()
  const [activeTab, setActiveTab] = useState("preferences")
  const [newActivity, setNewActivity] = useState({
    title: "",
    type: "sightseeing",
    time: "",
    location: "",
    notes: "",
  })

  const handlePreferenceChange = (key: string, value: string) => {
    setItinerary({
      ...itinerary,
      preferences: {
        ...itinerary.preferences,
        [key]: value,
      },
    })
  }

  const handleDateChange = (range: DateRange | undefined) => {
    setDateRange(range)

    if (range && range.from && range.to) {
      // Create day entries for each day in the range
      const days = []
      const currentDate = new Date(range.from)
      const endDate = new Date(range.to)

      while (currentDate <= endDate) {
        days.push({
          date: new Date(currentDate),
          activities: [],
        })
        currentDate.setDate(currentDate.getDate() + 1)
      }

      setItinerary({
        ...itinerary,
        days,
      })
    }
  }

  const addActivity = (dayIndex: number) => {
    if (!newActivity.title || !newActivity.time) return

    const updatedDays = [...itinerary.days]
    updatedDays[dayIndex].activities.push({
      ...newActivity,
      id: Date.now().toString(),
    })

    setItinerary({
      ...itinerary,
      days: updatedDays,
    })

    // Reset form
    setNewActivity({
      title: "",
      type: "sightseeing",
      time: "",
      location: "",
      notes: "",
    })
  }

  const removeActivity = (dayIndex: number, activityId: string) => {
    const updatedDays = [...itinerary.days]
    updatedDays[dayIndex].activities = updatedDays[dayIndex].activities.filter(
      (activity: any) => activity.id !== activityId,
    )

    setItinerary({
      ...itinerary,
      days: updatedDays,
    })
  }

  const getActivityIcon = (type: string) => {
    const icons: Record<string, any> = {
      sightseeing: Landmark,
      hiking: Hiking,
      water: Waves,
      dining: Utensils,
      coffee: Coffee,
      cycling: Bike,
      photography: Camera,
      camping: Tent,
    }

    const Icon = icons[type] || Landmark
    return <Icon className="h-4 w-4" />
  }

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
    }).format(date)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Create Your Perfect Lake District Itinerary</CardTitle>
          <CardDescription>Plan your activities and experiences for a memorable stay</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="preferences" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
              <TabsTrigger value="activities" disabled={!itinerary.days || itinerary.days.length === 0}>
                Plan Activities
              </TabsTrigger>
            </TabsList>

            <TabsContent value="preferences" className="space-y-6 pt-4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Select Your Stay Dates</h3>
                  <DateRangePicker onChange={handleDateChange} />
                </div>

                <div className="space-y-3 pt-2">
                  <h3 className="text-lg font-medium">Trip Preferences</h3>
                  <p className="text-sm text-gray-500">
                    Tell us about your preferences to help us suggest the perfect activities
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Trip Type</h4>
                      <RadioGroup
                        defaultValue={itinerary.preferences.type}
                        onValueChange={(value) => handlePreferenceChange("type", value)}
                        className="grid grid-cols-2 gap-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="active" id="active" />
                          <Label htmlFor="active">Active & Adventurous</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="relaxed" id="relaxed" />
                          <Label htmlFor="relaxed">Relaxed & Leisurely</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="family" id="family" />
                          <Label htmlFor="family">Family Friendly</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="romantic" id="romantic" />
                          <Label htmlFor="romantic">Romantic Getaway</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2">Dining Preferences</h4>
                      <RadioGroup
                        defaultValue={itinerary.preferences.dining}
                        onValueChange={(value) => handlePreferenceChange("dining", value)}
                        className="grid grid-cols-2 gap-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="local" id="local" />
                          <Label htmlFor="local">Local Cuisine</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="fine" id="fine" />
                          <Label htmlFor="fine">Fine Dining</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="casual" id="casual" />
                          <Label htmlFor="casual">Casual Dining</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="self" id="self" />
                          <Label htmlFor="self">Self Catering</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2">Activity Pace</h4>
                      <RadioGroup
                        defaultValue={itinerary.preferences.pace}
                        onValueChange={(value) => handlePreferenceChange("pace", value)}
                        className="grid grid-cols-3 gap-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="leisurely" id="leisurely" />
                          <Label htmlFor="leisurely">Leisurely</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="moderate" id="moderate" />
                          <Label htmlFor="moderate">Moderate</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="packed" id="packed" />
                          <Label htmlFor="packed">Action Packed</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </div>
              </div>

              {dateRange && dateRange.from && dateRange.to && (
                <div className="pt-4">
                  <Button onClick={() => setActiveTab("activities")} className="bg-teal-600 hover:bg-teal-700">
                    Continue to Plan Activities
                  </Button>
                </div>
              )}
            </TabsContent>

            <TabsContent value="activities" className="space-y-6 pt-4">
              {itinerary.days &&
                itinerary.days.map((day: any, dayIndex: number) => (
                  <Card key={dayIndex}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">
                        Day {dayIndex + 1}: {formatDate(day.date)}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {day.activities.length > 0 ? (
                        <div className="space-y-3">
                          {day.activities.map((activity: any) => (
                            <div key={activity.id} className="flex items-start justify-between p-3 border rounded-md">
                              <div className="flex items-start">
                                <div className="bg-teal-100 p-2 rounded-md mr-3">{getActivityIcon(activity.type)}</div>
                                <div>
                                  <h4 className="font-medium">{activity.title}</h4>
                                  <div className="flex items-center text-sm text-gray-500 mt-1">
                                    <Clock className="h-3 w-3 mr-1" />
                                    <span className="mr-3">{activity.time}</span>
                                    {activity.location && (
                                      <>
                                        <MapPin className="h-3 w-3 mr-1" />
                                        <span>{activity.location}</span>
                                      </>
                                    )}
                                  </div>
                                  {activity.notes && <p className="text-sm text-gray-600 mt-1">{activity.notes}</p>}
                                </div>
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeActivity(dayIndex, activity.id)}
                                className="text-gray-500 hover:text-red-600"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-6 text-gray-500">
                          <p>No activities planned for this day yet.</p>
                        </div>
                      )}

                      <div className="border-t pt-4">
                        <h4 className="font-medium mb-3">Add New Activity</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor={`title-${dayIndex}`}>Activity Title</Label>
                            <Input
                              id={`title-${dayIndex}`}
                              value={newActivity.title}
                              onChange={(e) => setNewActivity({ ...newActivity, title: e.target.value })}
                              placeholder="e.g., Hike Scafell Pike"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor={`type-${dayIndex}`}>Activity Type</Label>
                            <Select
                              value={newActivity.type}
                              onValueChange={(value) => setNewActivity({ ...newActivity, type: value })}
                            >
                              <SelectTrigger id={`type-${dayIndex}`}>
                                <SelectValue placeholder="Select type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="sightseeing">Sightseeing</SelectItem>
                                <SelectItem value="hiking">Hiking</SelectItem>
                                <SelectItem value="water">Water Activity</SelectItem>
                                <SelectItem value="dining">Dining</SelectItem>
                                <SelectItem value="coffee">Coffee/Tea Break</SelectItem>
                                <SelectItem value="cycling">Cycling</SelectItem>
                                <SelectItem value="photography">Photography</SelectItem>
                                <SelectItem value="camping">Camping</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor={`time-${dayIndex}`}>Time</Label>
                            <Input
                              id={`time-${dayIndex}`}
                              value={newActivity.time}
                              onChange={(e) => setNewActivity({ ...newActivity, time: e.target.value })}
                              placeholder="e.g., 9:00 AM - 12:00 PM"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor={`location-${dayIndex}`}>Location</Label>
                            <Input
                              id={`location-${dayIndex}`}
                              value={newActivity.location}
                              onChange={(e) => setNewActivity({ ...newActivity, location: e.target.value })}
                              placeholder="e.g., Wasdale"
                            />
                          </div>

                          <div className="space-y-2 md:col-span-2">
                            <Label htmlFor={`notes-${dayIndex}`}>Notes</Label>
                            <Textarea
                              id={`notes-${dayIndex}`}
                              value={newActivity.notes}
                              onChange={(e) => setNewActivity({ ...newActivity, notes: e.target.value })}
                              placeholder="Any additional details or notes"
                              className="h-20"
                            />
                          </div>
                        </div>

                        <Button onClick={() => addActivity(dayIndex)} className="mt-4 bg-teal-600 hover:bg-teal-700">
                          <PlusCircle className="mr-2 h-4 w-4" />
                          Add to Itinerary
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

