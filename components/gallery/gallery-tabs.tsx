"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ImageGallery } from "./image-gallery"
import { VideoGallery } from "./video-gallery"

export function GalleryTabs() {
  const [activeTab, setActiveTab] = useState("images")
  const [isClient, setIsClient] = useState(false)

  // Handle hydration mismatch with useEffect
  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <Tabs defaultValue="images" onValueChange={setActiveTab} className="w-full">
      <div className="flex justify-center mb-8">
        <TabsList className="grid w-[400px] grid-cols-2">
          <TabsTrigger value="images">Images</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="images" className="mt-0">
        <ImageGallery />
      </TabsContent>

      <TabsContent value="videos" className="mt-0">
        <VideoGallery />
      </TabsContent>
    </Tabs>
  )
}

