"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const amenityImages = [
  {
    src: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=1600&auto=format&fit=crop",
    alt: "Luxury kitchen with modern appliances",
    category: "Indoor",
  },
  {
    src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1600&auto=format&fit=crop",
    alt: "Cozy fireplace in living area",
    category: "Indoor",
  },
  {
    src: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1600&auto=format&fit=crop",
    alt: "Master bedroom with lake view",
    category: "Indoor",
  },
  {
    src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1600&auto=format&fit=crop",
    alt: "Luxury bathroom with freestanding tub",
    category: "Indoor",
  },
  {
    src: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?q=80&w=1600&auto=format&fit=crop",
    alt: "Private hot tub with forest view",
    category: "Outdoor",
  },
  {
    src: "https://images.unsplash.com/photo-1595514535215-9a3ef7e59b4e?q=80&w=1600&auto=format&fit=crop",
    alt: "Outdoor dining area on wooden deck",
    category: "Outdoor",
  },
  {
    src: "https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=1600&auto=format&fit=crop",
    alt: "Fire pit with seating area",
    category: "Outdoor",
  },
  {
    src: "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?q=80&w=1600&auto=format&fit=crop",
    alt: "BBQ grill on patio",
    category: "Outdoor",
  },
  {
    src: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1600&auto=format&fit=crop",
    alt: "Welcome hamper with local produce",
    category: "Services",
  },
  {
    src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1600&auto=format&fit=crop",
    alt: "In-lodge dining with private chef",
    category: "Services",
  },
]

export function AmenitiesGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    setSelectedImage((prev) => (prev === null ? null : prev === 0 ? amenityImages.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setSelectedImage((prev) => (prev === null ? null : prev === amenityImages.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Amenities Gallery</h2>
          <p className="text-gray-600">
            Browse through our gallery to see the premium amenities and features that make our lodges the perfect choice
            for your Lake District getaway.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenityImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-w-4 aspect-h-3 relative h-64">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <span className="inline-block px-3 py-1 bg-emerald-600 text-white text-xs rounded-full mb-2">
                    {image.category}
                  </span>
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
            <div className="relative bg-black rounded-lg overflow-hidden">
              {selectedImage !== null && (
                <div className="relative h-[80vh]">
                  <Image
                    src={amenityImages[selectedImage].src || "/placeholder.svg"}
                    alt={amenityImages[selectedImage].alt}
                    fill
                    className="object-contain"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4">
                    <p className="text-white text-lg">{amenityImages[selectedImage].alt}</p>
                    <p className="text-gray-300 text-sm">{amenityImages[selectedImage].category}</p>
                  </div>
                </div>
              )}

              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 text-white hover:bg-black hover:bg-opacity-50"
                onClick={closeLightbox}
              >
                <X className="h-6 w-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white hover:bg-black hover:bg-opacity-50"
                onClick={goToPrevious}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:bg-black hover:bg-opacity-50"
                onClick={goToNext}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

