"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { DateRangePicker } from "./date-picker"
import { GuestSelector } from "./guest-selector"
import type { DateRange } from "react-day-picker"
import { CalendarDays, Users, MapPin, Star } from "lucide-react"

interface LodgeSelectionProps {
  onContinue: (data: any) => void
  bookingDetails: any
}

export function LodgeSelection({ onContinue, bookingDetails }: LodgeSelectionProps) {
  const searchParams = useSearchParams()
  const preselectedLodgeId = searchParams.get("lodge")

  const [selectedLodge, setSelectedLodge] = useState<string | null>(preselectedLodgeId)
  const [dateRange, setDateRange] = useState<DateRange | undefined>(bookingDetails.dates || undefined)
  const [guests, setGuests] = useState(bookingDetails.guests || { adults: 2, children: 0 })
  const [error, setError] = useState("")

  const lodges = [
    {
      id: "1",
      name: "Lakeside Retreat",
      description: "A stunning lodge with panoramic lake views, perfect for couples seeking a romantic getaway.",
      image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=800&auto=format&fit=crop",
      price: 199,
      maxGuests: 2,
      rating: 4.9,
      location: "Waterfront location, 5-minute walk to Bowness",
      amenities: ["Lake view", "Hot tub", "King size bed", "Smart TV", "WiFi"],
    },
    {
      id: "2",
      name: "Woodland Haven",
      description:
        "Nestled among ancient trees, this spacious lodge offers privacy and tranquility for the whole family.",
      image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=800&auto=format&fit=crop",
      price: 249,
      maxGuests: 4,
      rating: 4.8,
      location: "Woodland setting, 10-minute drive to Ambleside",
      amenities: ["Forest view", "Outdoor deck", "BBQ", "2 bedrooms", "WiFi"],
    },
    {
      id: "3",
      name: "Mountain View Lodge",
      description:
        "Elevated position with breathtaking mountain vistas and luxury amenities for an unforgettable stay.",
      image: "https://images.unsplash.com/photo-1520984032042-162d526883e0?q=80&w=800&auto=format&fit=crop",
      price: 279,
      maxGuests: 6,
      rating: 4.9,
      location: "Hillside location, 15-minute drive to Windermere",
      amenities: ["Mountain view", "Sauna", "Game room", "3 bedrooms", "WiFi"],
    },
  ]

  useEffect(() => {
    if (preselectedLodgeId) {
      setSelectedLodge(preselectedLodgeId)
    }
  }, [preselectedLodgeId])

  const handleContinue = () => {
    if (!selectedLodge) {
      setError("Please select a lodge.")
      return
    }

    if (!dateRange || !dateRange.from || !dateRange.to) {
      setError("Please select check-in and check-out dates.")
      return
    }

    const lodge = lodges.find((l) => l.id === selectedLodge)
    const totalGuests = guests.adults + guests.children

    if (lodge && totalGuests > lodge.maxGuests) {
      setError(`This lodge can accommodate a maximum of ${lodge.maxGuests} guests.`)
      return
    }

    // Calculate total nights
    const nights = Math.round((dateRange.to.getTime() - dateRange.from.getTime()) / (1000 * 60 * 60 * 24))

    onContinue({
      lodge: lodge,
      dates: dateRange,
      guests: guests,
      price: lodge ? lodge.price * nights : 0,
      nights: nights,
    })
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Choose Your Lodge</CardTitle>
          <CardDescription>Select from our handpicked collection of luxury lodges</CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup defaultValue={selectedLodge || undefined} onValueChange={setSelectedLodge} className="space-y-4">
            {lodges.map((lodge) => (
              <div
                key={lodge.id}
                className={`border rounded-lg p-4 ${selectedLodge === lodge.id ? "border-teal-600 bg-teal-50" : "border-gray-200"}`}
              >
                <RadioGroupItem value={lodge.id} id={`lodge-${lodge.id}`} className="sr-only" />
                <Label
                  htmlFor={`lodge-${lodge.id}`}
                  className="flex flex-col cursor-pointer w-full md:flex-row md:items-start"
                >
                  <div className="md:w-1/3 h-48 rounded-md overflow-hidden">
                    <img
                      src={lodge.image || "/placeholder.svg"}
                      alt={lodge.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 md:pl-4 pt-4 md:pt-0">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-semibold">{lodge.name}</h3>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span>{lodge.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>{lodge.location}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{lodge.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {lodge.amenities.map((amenity, i) => (
                        <span key={i} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                          {amenity}
                        </span>
                      ))}
                    </div>
                    <div className="text-lg font-bold text-teal-600">
                      £{lodge.price} <span className="text-sm font-normal text-gray-500">/ night</span>
                    </div>
                  </div>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Select Dates</CardTitle>
          <CardDescription>Choose your check-in and check-out dates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex items-center">
                <CalendarDays className="mr-2 h-5 w-5 text-teal-600" />
                <Label>Stay Dates</Label>
              </div>
              <DateRangePicker onChange={setDateRange} />
            </div>

            <div className="space-y-2">
              <div className="flex items-center">
                <Users className="mr-2 h-5 w-5 text-teal-600" />
                <Label>Number of Guests</Label>
              </div>
              <GuestSelector onChange={setGuests} />
            </div>
          </div>
        </CardContent>
      </Card>

      {error && <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-600">{error}</div>}

      <div className="flex justify-end">
        <Button onClick={handleContinue} className="bg-teal-600 hover:bg-teal-700">
          Continue to Guest Information
        </Button>
      </div>
    </div>
  )
}

