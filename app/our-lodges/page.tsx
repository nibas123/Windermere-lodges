import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { LodgeList } from "@/components/lodges/lodge-list"
import { LodgeFilters } from "@/components/lodges/lodge-filters"
import { ChatbotButton } from "@/components/chatbot/chatbot-button"

export default function OurLodgesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHeader
        title="Our Lodges"
        description="Discover your perfect Lake District retreat"
        backgroundImage="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1920&auto=format&fit=crop"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <LodgeFilters />
            </div>
            <div className="lg:col-span-3">
              <LodgeList />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ChatbotButton />
    </main>
  )
}

