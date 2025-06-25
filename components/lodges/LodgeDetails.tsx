"use client"

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../navbar";
import Footer from "../footer";
import { PageHeader } from "../page-header";

export function LodgeDetails({ lodge }: { lodge: any }) {
  const [showFAQ, setShowFAQ] = useState<number|null>(null);
  return (
    <>
      <Navbar />
      <PageHeader
        title={lodge.headerTitle}
        description={lodge.headerDescription}
        backgroundImage={lodge.headerImage}
      />
      <div className="max-w-6xl mx-auto p-4 py-24">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{lodge.name}</h1>
            <p className="text-gray-500 mb-4">{lodge.address}</p>
            <div className="rounded-xl overflow-hidden mb-4">
              <Image src={lodge.image} alt={lodge.name} width={800} height={400} className="object-cover w-full h-80" />
            </div>
            <div className="flex gap-2 items-center mb-4">
              <span className="text-green-600 font-bold text-lg">{lodge.rating} ★</span>
              <span className="text-gray-500">Very Good</span>
              <span className="text-gray-400">({lodge.ratingCount} rating)</span>
            </div>
          </div>
          <div className="w-full md:w-96 bg-gray-50 rounded-xl p-6 flex flex-col gap-4 shadow">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">${lodge.price}.00</span>
              <span className="line-through text-gray-400">${lodge.oldPrice}</span>
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">{lodge.discount}% off</span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-sm">
                <span>Check-In</span>
                <span>Check-Out</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Oct 07, 2025</span>
                <span>Oct 12, 2025</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Guest</span>
                <span>{lodge.guests}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Discount Code</span>
                <span>First20</span>
              </div>
              <div className="border-t my-2" />
              <div className="flex justify-between text-sm">
                <span>5 Night</span>
                <span>$745</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Discount</span>
                <span>-${lodge.price}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Service fee</span>
                <span>$5</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total Payment</span>
                <span>${lodge.price * 5 - lodge.price + 5}</span>
              </div>
            </div>
            <button className="bg-emerald-600 text-white font-bold py-2 rounded-lg mt-2">Book Now</button>
          </div>
        </div>
        {/* All sections always visible except FAQ */}
        <div className="mt-8">
          {/* Amenities */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Amenities</h2>
            <div className="flex flex-wrap gap-6">
              {lodge.amenities.map((a: string, i: number) => (
                <div key={i} className="flex items-center gap-2 text-gray-700 text-lg">
                  <span>•</span> {a}
                </div>
              ))}
            </div>
          </div>
          {/* About */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">About {lodge.name}</h2>
            <p className="text-gray-700">{lodge.about}</p>
          </div>
          {/* Location */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Location</h2>
            <iframe src={lodge.locationMap} width="100%" height="350" className="rounded-xl border" loading="lazy"></iframe>
          </div>
          {/* Rating & Review */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Rating & Reviews</h2>
            <div className="flex gap-4 mb-4">
              <span className="text-2xl font-bold text-green-600">{lodge.rating} ★</span>
              <span className="text-gray-500">Very Good</span>
              <span className="text-gray-400">({lodge.ratingCount} rating)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {lodge.reviews.map((review: any, i: number) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow flex flex-col gap-4">
                  <p className="text-gray-700">{review.text}</p>
                  <div className="flex items-center gap-2">
                    <span className="font-bold">{review.name}</span>
                    <span className="text-yellow-500">{'★'.repeat(review.stars)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Rules and Policies */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Rules & Policies</h2>
            <div className="flex flex-wrap gap-8">
              {lodge.policies.map((policy: any, i: number) => (
                <div key={i} className="flex flex-col gap-2">
                  <span className="font-bold">{policy.label}</span>
                  <span className="text-gray-700">{policy.value}</span>
                </div>
              ))}
            </div>
          </div>
          {/* FAQ (accordion) */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">FAQ</h2>
            <div>
              {lodge.faqs.map((faq: any, i: number) => (
                <div key={i} className="mb-2 border-b">
                  <button
                    className="w-full text-left font-semibold py-3 flex justify-between items-center focus:outline-none"
                    onClick={() => setShowFAQ(i === showFAQ ? null : i)}
                  >
                    {faq.q}
                    <span className={`ml-2 transition-transform ${showFAQ === i ? 'rotate-90' : ''}`}>▶</span>
                  </button>
                  {showFAQ === i && (
                    <div className="text-gray-700 pb-3 pl-2">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 