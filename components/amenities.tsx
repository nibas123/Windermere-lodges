'use client';

import { Wifi, Tv, Coffee, Utensils, Car, Waves, DumbbellIcon, Gamepad } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from "next/link"
import { Button } from "@/components/ui/button"

const amenities = [
  {
    icon: Wifi,
    title: 'High-Speed WiFi',
    description: 'Stay connected with complimentary high-speed internet access',
  },
  {
    icon: Tv,
    title: 'Smart Entertainment',
    description: 'Smart TVs with streaming services in every lodge',
  },
  {
    icon: Coffee,
    title: 'Coffee Station',
    description: 'Premium coffee makers with complimentary coffee and tea',
  },
  {
    icon: Utensils,
    title: 'Fully Equipped Kitchen',
    description: 'Modern appliances and all necessary cooking utensils',
  },
  {
    icon: Car,
    title: 'Private Parking',
    description: 'Secure parking space for each lodge',
  },
  {
    icon: Waves,
    title: 'Hot Tub',
    description: 'Private hot tub with stunning views',
  },
  {
    icon: DumbbellIcon,
    title: 'Fitness Center',
    description: 'State-of-the-art fitness equipment',
  },
  {
    icon: Gamepad,
    title: 'Game Room',
    description: 'Family entertainment with various games',
  },
];

export const Amenities = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Lodge Amenities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <Card key={index}>
                <CardHeader>
                  <Icon className="h-8 w-8 text-emerald-600 mb-2" />
                  <CardTitle>{amenity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{amenity.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* <div className="text-center mt-12">
          <Link href="/amenities">
            <Button className="bg-emerald-600 hover:bg-emerald-700">View All Amenities</Button>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

