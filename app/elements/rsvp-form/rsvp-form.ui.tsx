'use client'

import { useState } from "react"
import { createRsvp } from './rsvp-form.server'

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/components/ui/card"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function RSVPForm() {
  const [loading, setLoading] = useState(false)

  const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    try {
      setLoading(true)
      await createRsvp(formData)
      alert('RSVP saved successfully.')
    } catch (err) {
      console.error(err)
      alert('RSVP failed')
    } finally {
      setLoading(false)
    }
  }

  const [isAttend, setAttend] = useState(false)

  const handleIsAttend = (checked: boolean) => {
    setAttend(checked)
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-white to-gray-100 py-8 px-4">
      <Card className="w-full max-w-md text-gray-900">
        <CardHeader>
          <CardTitle className="text-gray-900">Wedding RSVP</CardTitle>
          <CardDescription className="text-gray-700">Let us know if you’ll be attending 💌</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleForm} className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-gray-900 mb-2">Your Name</Label>
              <Input id="name" name="name" placeholder="e.g. Amirul Irfan" required />
            </div>

            <div>
              <Label htmlFor="speech" className="text-gray-900 mb-2">Speech</Label>
              <Textarea
                id="speech"
                name="speech"
                placeholder="Optional"
                rows={4}
              />
            </div>


            <div className="flex items-center space-x-2">
              <Checkbox id="isAttend" name="isAttend"  checked={isAttend}
                onCheckedChange={handleIsAttend}/>
              <Label htmlFor="isAttend" className="text-gray-900">Will you be attending?</Label>
            </div>

            {
              isAttend ? <div>
                <Label htmlFor="total_person" className="text-gray-900 mb-2">Number of Guests (including you)</Label>
                <Select name="total_person" required>
                  <SelectTrigger id="total_person">
                    <SelectValue placeholder="Select number of guests" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-black">
                    {Array.from({ length: 10 }, (_, i) => (
                      <SelectItem className="text-gray-900" key={i + 1} value={(i + 1).toString()}>
                        {i + 1}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div> : null
            }


            <Button type="submit" className="w-full bg-pink-500 text-white hover:bg-pink-600">
              {loading ? "Submitting..." : "Submit RSVP"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-center text-sm text-muted-foreground">
          Thank you for your response!
        </CardFooter>
      </Card>
    </div>
  )
}
