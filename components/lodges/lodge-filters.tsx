"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Search, SlidersHorizontal } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function LodgeFilters() {
  const [priceRange, setPriceRange] = useState([100, 400])
  const [bedroomsMin, setBedroomsMin] = useState(0)
  const [guestsMin, setGuestsMin] = useState(0)
  const [searchTerm, setSearchTerm] = useState("")

  // Filter options
  const amenities = [
    { id: "hot-tub", label: "Hot Tub" },
    { id: "pet-friendly", label: "Pet Friendly" },
    { id: "waterfront", label: "Waterfront" },
    { id: "fireplace", label: "Fireplace" },
    { id: "sauna", label: "Sauna" },
    { id: "pool", label: "Swimming Pool" },
    { id: "wifi", label: "Free WiFi" },
    { id: "bbq", label: "BBQ Area" },
  ]

  const locations = [
    { id: "lakeside", label: "Lakeside" },
    { id: "woodland", label: "Woodland" },
    { id: "mountain", label: "Mountain View" },
    { id: "riverside", label: "Riverside" },
    { id: "village", label: "Village" },
  ]

  const handleReset = () => {
    setPriceRange([100, 400])
    setBedroomsMin(0)
    setGuestsMin(0)
    setSearchTerm("")
  }

  const FiltersContent = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-2">Search</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search lodges..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">Price Range</h3>
        <Slider
          defaultValue={priceRange}
          min={50}
          max={500}
          step={10}
          value={priceRange}
          onValueChange={setPriceRange}
          className="my-6"
        />
        <div className="flex justify-between text-sm text-gray-500">
          <span>£{priceRange[0]} per night</span>
          <span>£{priceRange[1]} per night</span>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">Bedrooms</h3>
        <div className="flex space-x-4">
          {[0, 1, 2, 3, 4].map((num) => (
            <Button
              key={num}
              variant={bedroomsMin === num ? "default" : "outline"}
              className={bedroomsMin === num ? "bg-emerald-600 hover:bg-emerald-700" : ""}
              onClick={() => setBedroomsMin(num)}
            >
              {num === 0 ? "Any" : num === 4 ? "4+" : num}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">Guests</h3>
        <div className="flex space-x-4">
          {[0, 2, 4, 6, 8].map((num) => (
            <Button
              key={num}
              variant={guestsMin === num ? "default" : "outline"}
              className={guestsMin === num ? "bg-emerald-600 hover:bg-emerald-700" : ""}
              onClick={() => setGuestsMin(num)}
            >
              {num === 0 ? "Any" : num === 8 ? "8+" : num}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">Amenities</h3>
        <div className="grid grid-cols-2 gap-2">
          {amenities.map((amenity) => (
            <div key={amenity.id} className="flex items-center space-x-2">
              <Checkbox id={amenity.id} />
              <Label htmlFor={amenity.id} className="text-sm font-normal cursor-pointer">
                {amenity.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">Location</h3>
        <div className="grid grid-cols-2 gap-2">
          {locations.map((location) => (
            <div key={location.id} className="flex items-center space-x-2">
              <Checkbox id={location.id} />
              <Label htmlFor={location.id} className="text-sm font-normal cursor-pointer">
                {location.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 flex space-x-4">
        <Button variant="outline" onClick={handleReset} className="flex-1">
          Reset
        </Button>
        <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700">Apply Filters</Button>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop Filters */}
      <div className="hidden lg:block bg-white rounded-lg border border-gray-200 p-6 sticky top-24">
        <h2 className="text-xl font-bold mb-6">Filters</h2>
        <FiltersContent />
      </div>

      {/* Mobile Filters */}
      <div className="lg:hidden mb-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full flex items-center justify-center">
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
              <SheetDescription>Refine your lodge search</SheetDescription>
            </SheetHeader>
            <div className="py-4">
              <FiltersContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}

