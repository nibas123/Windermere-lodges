"use client"

import React from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "London, UK",
    image: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    text: "Absolutely stunning location and impeccable service. The lodge exceeded all our expectations. We'll definitely be back!",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Manchester, UK",
    image: "https://i.pravatar.cc/150?img=2",
    rating: 5,
    text: "Perfect getaway spot. The amenities were top-notch and the views were breathtaking. Highly recommend!",
  },
  {
    id: 3,
    name: "Emma Williams",
    location: "Edinburgh, UK",
    image: "https://i.pravatar.cc/150?img=3",
    rating: 5,
    text: "Our family had an amazing time. The lodge was spacious, clean, and had everything we needed. Great location for exploring.",
  },
  {
    id: 4,
    name: "David Clark",
    location: "Bristol, UK",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop",
    rating: 5,
    text: "This was our third stay at Windermere Lodges, and it just keeps getting better. The attention to detail and quality of the accommodations is outstanding.",
  },
  {
    id: 5,
    name: "Olivia Parker",
    location: "York, UK",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1887&auto=format&fit=crop",
    rating: 5,
    text: "We brought our whole family and had an amazing time. The kids loved exploring the grounds, and we loved the peace and luxury of our lodge.",
  },
]

export const Testimonials = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Guest Testimonials</h2>
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full items-center flex flex-col">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <Avatar>
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow">
                      <div className="flex mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-600 italic flex-grow">"{testimonial.text}"</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}

