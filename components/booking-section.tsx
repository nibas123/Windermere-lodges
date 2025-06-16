"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DateRangePicker } from "@/components/booking/date-picker"
import { GuestSelector } from "@/components/booking/guest-selector"
import { LodgeSelector } from "@/components/booking/lodge-selector"
import type { DateRange } from "react-day-picker"
import type { Lodge } from "@/types/lodge"

interface SearchParams {
  dates: DateRange | undefined
  guests: {
    adults: number
    children: number
  }
  lodge: Lodge | undefined
}

export const BookingSection = () => {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    dates: undefined,
    guests: { adults: 2, children: 0 },
    lodge: undefined
  })

  const handleSearch = () => {
    // Implement search functionality
    console.log("Search params:", searchParams)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Find Your Perfect Lodge</h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <DateRangePicker
              onChange={(dates) => setSearchParams({ ...searchParams, dates })}
            />
            
            <GuestSelector
              onChange={(guests) => setSearchParams({ ...searchParams, guests })}
            />
            
            <LodgeSelector
              onChange={(lodge) => setSearchParams({ ...searchParams, lodge })}
            />
            
            <Button 
              onClick={handleSearch}
              className="h-full bg-emerald-600 hover:bg-emerald-700"
            >
              Search Availability
            </Button>
          </div>
          
          <div className="mt-8 text-center">
            <Link href="/our-lodges">
              <Button variant="link" className="text-emerald-600 hover:text-emerald-700">
                View all our luxury lodges →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

