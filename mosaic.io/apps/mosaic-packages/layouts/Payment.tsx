
import { Label } from "../components/ui/label"
import { Input } from "../components/ui/input"
import { SelectValue, SelectTrigger, SelectContent, Select } from "../components/ui/select"
import { CardContent, Card, CardFooter } from "../components/ui/card"
import { Separator } from "../components/ui/separator"
import { Button } from "../components/ui/button"
import React from "react"

export function Payment() {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto p-4 md:p-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Payment</h2>
        <Card>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="card-number">Card Number</Label>
              <Input id="card-number" placeholder="0000 0000 0000 0000" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="expiration">Expiration</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Select >
                    <SelectTrigger>
                      <SelectValue placeholder="MM" />
                    </SelectTrigger>
                    <SelectContent />
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="YYYY" />
                    </SelectTrigger>
                    <SelectContent />
                  </Select>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" placeholder="123" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        <Card>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$99.00</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span className="text-green-500">-$10.00</span>
            </div>
            <Separator />
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>$89.00</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Pay $89.00</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
