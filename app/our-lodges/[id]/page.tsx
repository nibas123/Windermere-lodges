import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { lodges } from "@/components/lodges/lodge-list"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Star, Users, BedDouble, Bath, Maximize } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DateRangePicker } from "@/components/booking/date-picker"
import { GuestSelector } from "@/components/booking/guest-selector"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Placeholder component for the main image gallery
const LodgeImageGallery = ({ lodge }: { lodge: typeof lodges[0] }) => (
    <div className="relative h-[500px] w-full">
        <Image src={lodge.image} alt={lodge.name} layout="fill" objectFit="cover" />
    </div>
);

// Placeholder for the booking panel
const LodgeBookingPanel = ({ lodge }: { lodge: typeof lodges[0] }) => (
    <Card className="sticky top-24 p-6">
        <CardContent className="p-0">
            <h3 className="text-2xl font-bold mb-4">
                £{lodge.price}{" "}
                <span className="text-base font-normal text-gray-500">/ night</span>
            </h3>
            <div className="space-y-4">
                <DateRangePicker />
                <GuestSelector />
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Book Now</Button>
            </div>
        </CardContent>
    </Card>
);


export default function LodgeDetailPage({ params }: { params: { id: string } }) {
    const lodge = lodges.find(l => l.id === parseInt(params.id))

    if (!lodge) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            
            <LodgeImageGallery lodge={lodge} />

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        
                        <div className="lg:col-span-2">
                            <h1 className="text-4xl font-bold">{lodge.name}</h1>
                            <div className="flex items-center my-4">
                                <Star className="h-5 w-5 text-yellow-500 mr-1 fill-yellow-500" />
                                <span className="text-md font-medium">{lodge.rating}</span>
                                <span className="text-sm text-gray-500 ml-2">({lodge.reviews} reviews)</span>
                            </div>
                            <p className="text-gray-600 text-lg mb-6">{lodge.description}</p>
                            
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-b py-4 my-6">
                                <div className="flex items-center"><Users className="h-5 w-5 mr-2 text-emerald-600" /><span>{lodge.guests} Guests</span></div>
                                <div className="flex items-center"><BedDouble className="h-5 w-5 mr-2 text-emerald-600" /><span>{lodge.bedrooms} Bedrooms</span></div>
                                <div className="flex items-center"><Bath className="h-5 w-5 mr-2 text-emerald-600" /><span>{lodge.bathrooms} Bathrooms</span></div>
                                <div className="flex items-center"><Maximize className="h-5 w-5 mr-2 text-emerald-600" /><span>{lodge.size} sq ft</span></div>
                            </div>

                            <h2 className="text-2xl font-bold mb-4">Amenities</h2>
                            <div className="flex flex-wrap gap-2">
                                {lodge.tags.map((tag) => (
                                    <Badge key={tag} variant="outline" className="bg-gray-100 text-gray-700">{tag}</Badge>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-1">
                            <LodgeBookingPanel lodge={lodge} />
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
} 