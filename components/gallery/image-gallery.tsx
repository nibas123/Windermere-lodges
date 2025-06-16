"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

export function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [category, setCategory] = useState<string>("all")

  const galleryCategories = [
    { id: "all", name: "All Photos" },
    { id: "lodges", name: "Our Lodges" },
    { id: "interiors", name: "Interiors" },
    { id: "surroundings", name: "Surroundings" },
    { id: "activities", name: "Activities" },
  ]

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?q=80&w=800&auto=format&fit=crop",
      alt: "Lodge exterior with lake view",
      category: "lodges",
      featured: true,
    },
    {
      src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
      alt: "Mountain view from lodge",
      category: "surroundings",
      featured: true,
    },
    {
      src: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=800&auto=format&fit=crop",
      alt: "Luxury bedroom with view",
      category: "interiors",
      featured: false,
    },
    {
      src: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=800&auto=format&fit=crop",
      alt: "Outdoor hot tub at dusk",
      category: "lodges",
      featured: true,
    },
    {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
      alt: "Modern lodge living room",
      category: "interiors",
      featured: false,
    },
    {
      src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=800&auto=format&fit=crop",
      alt: "Lake shoreline at sunset",
      category: "surroundings",
      featured: true,
    },
    {
      src: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?q=80&w=800&auto=format&fit=crop",
      alt: "Kayaking on the lake",
      category: "activities",
      featured: false,
    },
    {
      src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800&auto=format&fit=crop",
      alt: "Gourmet kitchen in lodge",
      category: "interiors",
      featured: false,
    },
    {
      src: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=800&auto=format&fit=crop",
      alt: "Forest trails near lodge",
      category: "surroundings",
      featured: false,
    },
    {
      src: "https://images.unsplash.com/photo-1520984032042-162d526883e0?q=80&w=800&auto=format&fit=crop",
      alt: "Mountain hiking",
      category: "activities",
      featured: false,
    },
    {
      src: "https://images.unsplash.com/photo-1551927336-09d50efd69cd?q=80&w=800&auto=format&fit=crop",
      alt: "Cozy fireplace",
      category: "interiors",
      featured: false,
    },
    {
      src: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?q=80&w=800&auto=format&fit=crop",
      alt: "Lodge at sunrise",
      category: "lodges",
      featured: false,
    },
  ]

  const filteredImages = category === "all" ? galleryImages : galleryImages.filter((img) => img.category === category)

  const featuredImages = galleryImages.filter((img) => img.featured)

  const nextImage = () => {
    if (selectedImage === null) return
    setSelectedImage((selectedImage + 1) % filteredImages.length)
  }

  const prevImage = () => {
    if (selectedImage === null) return
    setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length)
  }

  return (
    <div>
      <div className="flex justify-center mb-8">
        <Tabs defaultValue="all" onValueChange={setCategory}>
          <TabsList className="grid grid-cols-5">
            {galleryCategories.map((cat) => (
              <TabsTrigger key={cat.id} value={cat.id}>
                {cat.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {category === "all" && (
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Featured Images</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredImages.map((image, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-3xl p-0 overflow-hidden bg-transparent border-none">
                  <div className="relative">
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="w-full max-h-[80vh] object-contain"
                    />
                    <button
                      className="absolute top-2 right-2 bg-black/60 text-white rounded-full p-1 hover:bg-black/80 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filteredImages.map((image, index) => (
          <Card
            key={index}
            className="overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
            onClick={() => setSelectedImage(index)}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </Card>
        ))}
      </div>

      {selectedImage !== null && (
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl p-0 overflow-hidden bg-transparent border-none">
            <div className="relative">
              <img
                src={filteredImages[selectedImage].src || "/placeholder.svg"}
                alt={filteredImages[selectedImage].alt}
                className="w-full max-h-[80vh] object-contain"
              />
              <button
                className="absolute top-2 right-2 bg-black/60 text-white rounded-full p-1 hover:bg-black/80 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </button>
              <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/60 text-white rounded-full p-2 hover:bg-black/80 transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/60 text-white rounded-full p-2 hover:bg-black/80 transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </DialogContent>
        </Dialog>
      )}

      <div className="text-center mt-8">
        <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
          Load More
        </Button>
      </div>
    </div>
  )
}

