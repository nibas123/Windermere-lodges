import { Check } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function AmenitiesDetails() {
  const amenityCategories = [
    {
      id: "indoor",
      name: "Indoor Amenities",
      description: "Luxury features inside your lodge for maximum comfort",
      amenities: [
        { name: "Fully Equipped Kitchen", description: "Modern appliances and cookware" },
        { name: "Fireplace", description: "Wood-burning or gas fireplace" },
        { name: "Smart TV", description: "With streaming services" },
        { name: "High-Speed WiFi", description: "Complimentary throughout" },
        { name: "Luxury Bedding", description: "Egyptian cotton linens" },
        { name: "Ensuite Bathrooms", description: "With premium toiletries" },
        { name: "Washer & Dryer", description: "In-lodge laundry facilities" },
        { name: "Coffee Machine", description: "With complimentary pods" },
      ],
    },
    {
      id: "outdoor",
      name: "Outdoor Features",
      description: "Enjoy the natural beauty of the Lake District",
      amenities: [
        { name: "Private Hot Tub", description: "With lake or forest views" },
        { name: "Deck/Patio", description: "With outdoor furniture" },
        { name: "BBQ Grill", description: "Gas or charcoal options" },
        { name: "Fire Pit", description: "For evening gatherings" },
        { name: "Private Parking", description: "Designated spaces" },
        { name: "Garden Area", description: "Landscaped outdoor space" },
        { name: "Outdoor Dining", description: "Al fresco seating area" },
        { name: "Bike Storage", description: "Secure storage for your equipment" },
      ],
    },
    {
      id: "services",
      name: "Services & Extras",
      description: "Additional services to enhance your stay",
      amenities: [
        { name: "Welcome Hamper", description: "Local produce and treats" },
        { name: "Concierge Service", description: "Available 24/7" },
        { name: "Housekeeping", description: "Daily or mid-stay options" },
        { name: "Private Chef", description: "Bookable in-lodge dining" },
        { name: "Grocery Delivery", description: "Pre-arrival shopping service" },
        { name: "Equipment Rental", description: "Bikes, kayaks, and more" },
        { name: "Childcare", description: "Vetted babysitting services" },
        { name: "Spa Treatments", description: "In-lodge massage and treatments" },
      ],
    },
    {
      id: "accessibility",
      name: "Accessibility",
      description: "Features to ensure all guests enjoy their stay",
      amenities: [
        { name: "Step-Free Access", description: "To main living areas" },
        { name: "Wider Doorways", description: "For wheelchair access" },
        { name: "Accessible Bathroom", description: "With grab rails and shower seat" },
        { name: "Adjustable Height Bed", description: "For comfort and accessibility" },
        { name: "Visual Alarms", description: "For hearing impaired guests" },
        { name: "Accessible Parking", description: "Close to lodge entrance" },
        { name: "Ramp Access", description: "To outdoor areas" },
        { name: "Accessible Kitchen", description: "With lower countertops" },
      ],
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Exceptional Amenities</h2>
          <p className="text-gray-600">
            Our lodges are equipped with premium amenities to ensure your stay is comfortable, convenient, and truly
            memorable. From cozy fireplaces to private hot tubs, we've thought of everything to enhance your Lake
            District experience.
          </p>
        </div>

        <Tabs defaultValue="indoor" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            {amenityCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-sm md:text-base">
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {amenityCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="mb-8 text-center">
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.amenities.map((amenity, index) => (
                  <Card key={index} className="border-gray-200">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="bg-emerald-100 p-2 rounded-full mr-4">
                          <Check className="h-5 w-5 text-emerald-600" />
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">{amenity.name}</h4>
                          <p className="text-sm text-gray-600">{amenity.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

