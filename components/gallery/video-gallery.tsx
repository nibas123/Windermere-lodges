"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { X, Play } from "lucide-react"

export function VideoGallery() {
  const [isPlaying, setIsPlaying] = useState<number | null>(null)

  const videoCategories = [
    { id: "all", name: "All Videos" },
    { id: "tours", name: "Lodge Tours" },
    { id: "experiences", name: "Experiences" },
    { id: "testimonials", name: "Guest Stories" },
    { id: "area", name: "Lake District" },
  ]

  const videos = [
    {
      id: 1,
      thumbnail: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=800&auto=format&fit=crop",
      title: "Virtual Tour: Lakeside Retreat",
      description: "Take a walkthrough of our premier lakeside accommodation",
      duration: "3:42",
      category: "tours",
    },
    {
      id: 2,
      thumbnail: "https://images.unsplash.com/photo-1543039625-14cbd3802e7d?q=80&w=800&auto=format&fit=crop",
      title: "Experience: Lake Windermere Cruise",
      description: "Discover the beauty of England's largest lake",
      duration: "2:15",
      category: "experiences",
    },
    {
      id: 3,
      thumbnail: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=800&auto=format&fit=crop",
      title: "Guest Story: The Johnson Family",
      description: "Hear about the Johnson family's memorable stay",
      duration: "4:08",
      category: "testimonials",
    },
    {
      id: 4,
      thumbnail: "https://images.unsplash.com/photo-1603114595741-db0684d3aafc?q=80&w=800&auto=format&fit=crop",
      title: "Kayaking Adventures at Windermere",
      description: "Explore hidden coves and shores by kayak",
      duration: "3:27",
      category: "experiences",
    },
    {
      id: 5,
      thumbnail: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop",
      title: "Virtual Tour: Woodland Haven",
      description: "Step inside our family-friendly woodland lodge",
      duration: "4:51",
      category: "tours",
    },
    {
      id: 6,
      thumbnail: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=800&auto=format&fit=crop",
      title: "Scafell Pike: A Hiker's Guide",
      description: "Everything you need to know about climbing England's highest peak",
      duration: "5:32",
      category: "area",
    },
  ]

  return (
    <div>
      <div className="flex justify-center mb-8">
        <Tabs defaultValue="all">
          <TabsList className="grid grid-cols-5">
            {videoCategories.map((cat) => (
              <TabsTrigger key={cat.id} value={cat.id}>
                {cat.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <Dialog key={video.id}>
            <DialogTrigger asChild>
              <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 h-full">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <div className="bg-white bg-opacity-80 rounded-full p-3 transform hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-teal-600 fill-teal-600" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{video.title}</h3>
                  <p className="text-gray-600 text-sm">{video.description}</p>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
              <div className="relative bg-black">
                <div className="aspect-video w-full flex items-center justify-center">
                  {/* This would be a real video player in production */}
                  <div className="text-white">
                    <Play className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-xl font-semibold">{video.title}</p>
                    <p className="opacity-80">Video would play here in production</p>
                  </div>
                </div>
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
  )
}

