"use client"

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../navbar";
import Footer from "../footer";
import { PageHeader } from "../page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Icons } from "../ui/icons";
import { type LucideIcon as Icon } from "lucide-react";
import { useRouter } from "next/navigation";

const amenityIconMap: Record<string, string> = {
  'Lake Access': '/icons/water.png',
  'Wifi': '/icons/wifi.png',
  'Shared Pool': '/icons/swim.png',
  'Washing Machine': '/icons/w_machine.png',
  'Hair Dryer': '/icons/dryer.png',
  'Kitchen': '/icons/cook.png',
  'TV': '/icons/tv.png',
};

const policyIconMap: Record<string, keyof typeof Icons> = {
  'Check-in & Check-out': 'calendarClock',
  'Cancellation Policy': 'ban',
  'Property Maintenance & Damage Policy': 'wrench',
};

const amenitiesToDisplay = [
  'Lake Access',
  'Wifi',
  'Shared Pool',
  'Washing Machine',
  'Hair Dryer',
  'Kitchen',
  'TV',
  '+11 More',
];

export function LodgeDetails({ lodge }: { lodge: any }) {
  const router = useRouter();
  const [showFAQ, setShowFAQ] = useState<number | null>(null);
  const [checkInDate, setCheckInDate] = useState<Date | undefined>(
    new Date("2025-10-07T00:00:00")
  );
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined>(
    new Date("2025-10-12T00:00:00")
  );

  return (
    <>
      <Navbar />
      <PageHeader
        title={lodge.headerTitle}
        description={lodge.headerDescription}
        backgroundImage={lodge.headerImage}
      />
      <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 mt-18">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="h-10 w-10 bg-white" onClick={() => router.push('/our-lodges')}>
              <Icons.chevronLeft className="h-6 w-6" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-800">
                {lodge.name}
              </h1>
              <p className="text-sm text-gray-600">{lodge.address}</p>
            </div>
          </div>
          <div className="mt-4 sm:mt-0 flex-shrink-0">
            <div className="flex items-center gap-2 rounded-lg bg-green-100 p-2 text-green-800">
              <div className="flex items-center gap-1">
                <span className="font-bold text-lg">{lodge.rating}</span>
                <span className="text-lg">★</span>
              </div>
              <div className="text-xs">
                <p className="font-semibold">Very Good</p>
                <p>{lodge.ratingCount} rating</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <div className="rounded-xl overflow-hidden mb-4">
              <Image
                src={lodge.image}
                alt={lodge.name}
                width={800}
                height={400}
                className="object-cover w-full h-96"
              />
            </div>
          </div>
          <div className="w-full md:w-96">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold">${lodge.price}.00</span>
                  <span className="text-sm text-gray-500">/per night</span>
                  <span className="line-through text-gray-400 ml-auto">${lodge.oldPrice}</span>
                  <Badge variant="destructive" className="bg-green-600 text-white">60% off</Badge>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-sm text-gray-500">Check-In</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !checkInDate && "text-muted-foreground"
                          )}
                        >
                          {checkInDate ? format(checkInDate, "LLL dd, yyyy") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={checkInDate}
                          onSelect={setCheckInDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm text-gray-500">Check-Out</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !checkOutDate && "text-muted-foreground"
                          )}
                        >
                          {checkOutDate ? format(checkOutDate, "LLL dd, yyyy") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={checkOutDate}
                          onSelect={setCheckOutDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div className="flex flex-col gap-1 mb-4">
                  <label className="text-sm text-gray-500">Guest</label>
                  <Select defaultValue="2-adults-1-children">
                    <SelectTrigger>
                      <SelectValue placeholder="Select guests" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-adult">1 Adult</SelectItem>
                      <SelectItem value="2-adults">2 Adults</SelectItem>
                      <SelectItem value="2-adults-1-children">2 Adults, 1 Children</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* <div className="flex flex-col gap-1 mb-4">
                  <label className="text-sm text-gray-500">Discount Code</label>
                  <Select defaultValue="first20">
                    <SelectTrigger>
                      <SelectValue placeholder="Select code" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="first20">First20</SelectItem>
                      <SelectItem value="summer24">Summer24</SelectItem>
                    </SelectContent>
                  </Select>
                </div> */}


                <div className="border-t my-4" />

                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-sm">
                    <span>5 Night</span>
                    <span>$745</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Discount</span>
                    <span className="text-green-600">-${lodge.price}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Service fee</span>
                    <span>$5</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg mt-2">
                    <span>Total Payment</span>
                    <span>${lodge.price * 5 - lodge.price + 5}</span>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 text-base">Book Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* All sections always visible except FAQ */}
        <div className="mt-8">
          {/* Amenities */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Amenities</h2>
            <div className="flex space-x-6 overflow-x-auto pb-4">
              {amenitiesToDisplay.map((amenity: string, i: number) => {
                const iconKey = Object.keys(amenityIconMap).find(key => amenity.toLowerCase().includes(key.toLowerCase()));
                const iconSrc = iconKey ? amenityIconMap[iconKey] : null;

                if (amenity.startsWith('+')) {
                  return (
                    <div key={i} className="flex items-center space-x-2 flex-shrink-0">
                       <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                         <span className="text-sm font-semibold">{amenity.split(' ')[0]}</span>
                       </div>
                       <span className="text-gray-700">{amenity.split(' ').slice(1).join(' ')}</span>
                    </div>
                  )
                }
                
                return (
                  <div key={i} className="flex items-center space-x-2 flex-shrink-0">
                    {iconSrc && (
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                        <Image src={iconSrc} alt={amenity} width={24} height={24} />
                      </div>
                    )}
                    <span className="text-gray-700">{amenity}</span>
                  </div>
                );
              })}
            </div>
          </div>
          {/* About */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">About {lodge.name}</h2>
            <p className="text-gray-700">{lodge.about}</p>
          </div>
          {/* Location */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Location</h2>
            <iframe src={lodge.locationMap} width="100%" height="350" className="rounded-xl border" loading="lazy"></iframe>
          </div>
          {/* Rating & Review */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Rating & Reviews</h2>
            <div className="flex gap-4 mb-4">
              <span className="text-2xl font-bold text-green-600">{lodge.rating} ★</span>
              <span className="text-gray-500">Very Good</span>
              <span className="text-gray-400">({lodge.ratingCount} rating)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {lodge.reviews.map((review: any, i: number) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow flex flex-col gap-4">
                  <p className="text-gray-700">{review.text}</p>
                  <div className="flex items-center gap-2">
                    <span className="font-bold">{review.name}</span>
                    <span className="text-yellow-500">{'★'.repeat(review.stars)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Rules and Policies */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Rules & Policies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lodge.policies.map((policy: any, i: number) => {
                const IconComponent = Icons[policyIconMap[policy.label]] as Icon;
                return (
                  <div key={i} className="flex items-start gap-4">
                    {IconComponent && <IconComponent className="h-8 w-8 text-emerald-600 mt-1" />}
                    <div>
                      <h3 className="font-bold text-sm">{policy.label}</h3>
                      <p className="text-gray-800 font-light">{policy.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* FAQ (accordion) */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">FAQ</h2>
            <div>
              {lodge.faqs.map((faq: any, i: number) => (
                <div key={i} className="mb-2 border-b">
                  <button
                    className="w-full text-left font-semibold py-3 flex justify-between items-center focus:outline-none"
                    onClick={() => setShowFAQ(i === showFAQ ? null : i)}
                  >
                    {faq.q}
                    <span className={`ml-2 transition-transform ${showFAQ === i ? 'rotate-90' : ''}`}>▶</span>
                  </button>
                  {showFAQ === i && (
                    <div className="text-gray-700 pb-3 pl-2">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 