"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import gsap from "gsap"

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const images = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",
    "/family-lodge.jpg" // Replace with your actual image path
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (heroRef.current && textRef.current) {
      // Animate hero section
      gsap.fromTo(heroRef.current, { opacity: 0.7 }, { opacity: 1, duration: 1.5 })

      // Animate text elements
      gsap.fromTo(
        textRef.current.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" },
      )
    }
  }, [currentSlide])

  return (
    <div ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slider */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{
          backgroundImage: `url('${images[currentSlide]}')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>

      {/* Only show content on the first slide */}
      {currentSlide === 0 && (
        <div className="container mx-auto px-4 relative z-10 text-center" ref={textRef}>
          <h1 className="text-4xl text-left md:text-6xl font-bold text-white mb-6">
            Experience Luxury in the <br />Heart of the Lake District
          </h1>
          <p className="text-xl md:text-2xl text-left items-start text-white mb-8">
            Discover our exclusive collection of premium lodges <br />with breathtaking views and exceptional amenities
          </p>
          <div className="flex flex-col sm:flex-row justify-start items-start gap-4">
            <Link href="/our-lodges">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg">
                Explore Our Lodges
              </Button>
            </Link>
            <Link href="/booking">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-emerald-600 hover:bg-white hover:text-emerald-800 px-8 py-6 text-lg"
              >
                Book Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      )}

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

