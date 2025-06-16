"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Star } from "lucide-react"
import gsap from "gsap"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

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
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sliderRef.current) return

    const testimonialCards = sliderRef.current.querySelectorAll(".testimonial-card")
    const totalWidth = Array.from(testimonialCards).reduce((width, card) => width + card.clientWidth + 24, 0)

    // Clone testimonials for infinite scroll effect
    const clonedCards = Array.from(testimonialCards).map((card) => card.cloneNode(true))
    clonedCards.forEach((card) => {
      sliderRef.current?.appendChild(card)
    })

    // Animate the slider
    gsap.to(sliderRef.current, {
      x: -totalWidth,
      duration: 30,
      ease: "linear",
      repeat: -1,
      repeatDelay: 0,
    })

    // Pause animation on hover
    sliderRef.current.addEventListener("mouseenter", () => {
      gsap.to(sliderRef.current, { timeScale: 0, duration: 0.5 })
    })

    sliderRef.current.addEventListener("mouseleave", () => {
      gsap.to(sliderRef.current, { timeScale: 1, duration: 0.5 })
    })

    return () => {
      if (sliderRef.current) {
        sliderRef.current.removeEventListener("mouseenter", () => {})
        sliderRef.current.removeEventListener("mouseleave", () => {})
      }
    }
  }, [])

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Guest Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardHeader className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-600">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

