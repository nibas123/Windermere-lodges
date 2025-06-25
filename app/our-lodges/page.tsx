import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { LodgeList } from "@/components/lodges/lodge-list"
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
        <div className="container justify-evenly mx-auto px-4">
            <LodgeList />
        </div>
      </section>

      <Footer />
      <ChatbotButton />
    </main>
  )
}

