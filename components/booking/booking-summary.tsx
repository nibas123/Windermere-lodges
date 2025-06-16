"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle } from "lucide-react"

interface BookingSummaryProps {
  bookingDetails: any
  currentStep: number
}

export function BookingSummary({ bookingDetails, currentStep }: BookingSummaryProps) {
  const [promoCode, setPromoCode] = useState(bookingDetails.promoCode || "")
  const [promoError, setPromoError] = useState("")
  const [promoSuccess, setPromoSuccess] = useState("")
  const [discountApplied, setDiscountApplied] = useState(bookingDetails.discountApplied || false)

  useEffect(() => {
    // Update from parent component if changed
    setPromoCode(bookingDetails.promoCode || "")
    setDiscountApplied(bookingDetails.discountApplied || false)
  }, [bookingDetails.promoCode, bookingDetails.discountApplied])

  const applyPromoCode = () => {
    // Reset previous states
    setPromoError("")
    setPromoSuccess("")

    if (!promoCode.trim()) {
      setPromoError("Please enter a promo code")
      return
    }

    // Simulate promo code validation
    if (promoCode.toUpperCase() === "SUMMER20") {
      setPromoSuccess("Promo code applied! You've received a 20% discount.")
      setDiscountApplied(true)
    } else {
      setPromoError("Invalid promo code")
    }
  }

  const calculateSubtotal = () => {
    const lodgePrice = bookingDetails.lodge ? bookingDetails.lodge.price * (bookingDetails.nights || 1) : 0
    const extrasTotal = bookingDetails.extras?.reduce((sum: number, item: any) => sum + item.price, 0) || 0
    return lodgePrice + extrasTotal
  }

  const calculateDiscount = () => {
    return discountApplied ? calculateSubtotal() * 0.2 : 0
  }

  const calculateTaxes = () => {
    return (calculateSubtotal() - calculateDiscount()) * 0.2
  }

  const calculateTotal = () => {
    return calculateSubtotal() - calculateDiscount() + calculateTaxes()
  }

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle>Booking Summary</CardTitle>
        {currentStep < 5 && <CardDescription>Review your booking details</CardDescription>}
      </CardHeader>
      <CardContent className="space-y-4">
        {bookingDetails.lodge ? (
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">{bookingDetails.lodge.name}</h3>
              {bookingDetails.dates && bookingDetails.dates.from && bookingDetails.dates.to && (
                <p className="text-sm text-gray-500">
                  {new Date(bookingDetails.dates.from).toLocaleDateString()} -{" "}
                  {new Date(bookingDetails.dates.to).toLocaleDateString()}({bookingDetails.nights}{" "}
                  {bookingDetails.nights === 1 ? "night" : "nights"})
                </p>
              )}
              <p className="text-sm text-gray-500">
                {bookingDetails.guests.adults} {bookingDetails.guests.adults === 1 ? "adult" : "adults"}
                {bookingDetails.guests.children > 0 &&
                  `, ${bookingDetails.guests.children} ${bookingDetails.guests.children === 1 ? "child" : "children"}`}
              </p>
            </div>

            <Separator />

            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Accommodation</span>
                <span>
                  £{bookingDetails.lodge.price} x {bookingDetails.nights || 1}
                </span>
              </div>

              {bookingDetails.extras && bookingDetails.extras.length > 0 && (
                <>
                  <div className="flex justify-between font-medium">
                    <span>Extras</span>
                    <span>£{bookingDetails.extras.reduce((sum: number, item: any) => sum + item.price, 0)}</span>
                  </div>
                  <div className="pl-4 text-sm text-gray-500 space-y-1">
                    {bookingDetails.extras.map((extra: any) => (
                      <div key={extra.id} className="flex justify-between">
                        <span>{extra.name}</span>
                        <span>£{extra.price}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              <Separator />

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>£{Math.round(calculateSubtotal())}</span>
              </div>

              {discountApplied && (
                <div className="flex justify-between text-green-600">
                  <span>Discount (20%)</span>
                  <span>-£{Math.round(calculateDiscount())}</span>
                </div>
              )}

              <div className="flex justify-between text-sm text-gray-500">
                <span>Taxes & Fees (20%)</span>
                <span>£{Math.round(calculateTaxes())}</span>
              </div>

              <Separator />

              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>£{Math.round(calculateTotal())}</span>
              </div>
            </div>

            {currentStep < 3 && (
              <div className="pt-2">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    size={10}
                  />
                  <Button variant="outline" className="shrink-0" onClick={applyPromoCode}>
                    Apply
                  </Button>
                </div>

                {promoError && <div className="mt-2 text-sm text-red-600">{promoError}</div>}

                {promoSuccess && (
                  <Alert className="mt-2 bg-green-50 border-green-200">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-600 text-xs">{promoSuccess}</AlertDescription>
                  </Alert>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="text-gray-500 italic">Please select a lodge and dates to see your booking summary.</div>
        )}
      </CardContent>
    </Card>
  )
}

