"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ImageGallery } from "./image-gallery"

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
    <Tabs defaultValue="lodge1" onValueChange={setActiveTab} className="w-full">
      <div className="flex justify-center mb-8">
        <TabsList className="grid w-auto grid-cols-3">
          <TabsTrigger value="lodge1">Glenridding Lodge</TabsTrigger>
          <TabsTrigger value="lodge2">Water's Reach</TabsTrigger>
          <TabsTrigger value="lodge3">Serenity</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="lodge1" className="mt-0">
        <ImageGallery lodgeKey="lodge1" />
      </TabsContent>
      <TabsContent value="lodge2" className="mt-0">
        <ImageGallery lodgeKey="lodge2" />
      </TabsContent>
      <TabsContent value="lodge3" className="mt-0">
        <ImageGallery lodgeKey="lodge3" />
      </TabsContent>
    </Tabs>
  )
}

