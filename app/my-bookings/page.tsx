import { auth } from "@/auth";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import { getUserBookings } from "../queries/order";

export default async function MyBookings() {
  const session = await auth();
  const result = await getUserBookings(session && session.user?.email);
  const nights = 3;
  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        title="My Bookings"
        description="Manage your profile and personal settings"
        backgroundImage="https://images.unsplash.com/photo-1506260408121-e353d10b87c7?q=80&w=1920&auto=format&fit=crop"
      />
      <section className="py-20 bg-gray-50 px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {result && result?.length > 0 ? (
            result.map((r, i: number) => (
              <Card key={i} className="overflow-hidden shadow-lg rounded-xl border border-gray-200 bg-white flex flex-col">
                <div className="relative h-56 w-full">
                  <Image
                    src={r.property.images[0] || "/placeholder.svg"}
                    alt={r.property.name}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute top-4 left-4 flex items-center bg-white bg-opacity-90 px-3 py-1 rounded-full shadow">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" fill="currentColor" />
                    <span className="text-sm font-semibold">4.1</span>
                  </div>
                  <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    £{r.property.price}/night
                  </div>
                </div>
                <CardHeader className="py-4 px-6 border-b border-gray-100">
                  <CardTitle className="text-xl font-bold text-gray-800 mb-1">{r.property.nickname}</CardTitle>
                  <CardDescription className="text-gray-500 text-sm">{r.property.name}</CardDescription>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs border border-gray-300 bg-gray-100 text-gray-700 px-2 py-1 rounded-full">ID: {r.id}</span>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${r.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{r.status}</span>
                  </div>
                </CardHeader>
                <CardContent className="px-6 py-4 flex-1 flex flex-col gap-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Check In</span>
                    <span className="font-medium">{r?.arrivalDate}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Check Out</span>
                    <span className="font-medium">{r?.departureDate}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Nights</span>
                    <span className="font-medium">{nights}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Cleaning Fee</span>
                    <span className="font-medium">${r?.property.cleaning_fee}</span>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between font-bold text-md lg:text-lg">
                    <span>Total</span>
                    <span>$ {r.property.price * nights + 100}</span>
                  </div>
                </CardContent>
                <CardFooter className="px-6 pb-4">
                  <Button variant="destructive" className="w-full font-semibold">Cancel Booking</Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="col-span-3 text-center text-gray-400 py-16">No bookings found.</div>
          )}
        </div>
      </section>
    </main>
  );
}

/**
 

 */
