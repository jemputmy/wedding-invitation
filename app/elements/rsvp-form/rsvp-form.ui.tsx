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
      <Card>
        <CardHeader>
          <CardTitle className="text-5xl text-gray-900 text-center italic underline">RSVP</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleForm} className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-base font-mono text-gray-900 mb-2">Nama Anda</Label>
              <Input id="name" name="name" placeholder="e.g. Amirul Irfan" required />
            </div>

            <div>
              <Label htmlFor="speech" className="text-base font-mono text-gray-900 mb-2">Ucapan</Label>
              <Textarea
                id="speech"
                name="speech"
                placeholder="Ucapan..."
              rows={4}
               className="min-h-[120px]"
              />
            </div>


            <div className="flex items-center space-x-2 my-6">
              <Checkbox id="isAttend" name="isAttend"  checked={isAttend}
                onCheckedChange={handleIsAttend}/>
              <Label htmlFor="isAttend" className="text-base font-mono text-gray-900">Saya Hadir</Label>
            </div>

            {
              isAttend ? <div>
                <Label htmlFor="total_person" className="text-base font-mono text-gray-900 mb-2">Bilangan rombongan (temasuk anda)</Label>
                <Select name="total_person" required>
                  <SelectTrigger id="total_person">
                    <SelectValue  placeholder="Sila pilih bilangan rombongan" />
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


            <Button type="submit" className="w-full bg-pink-500 text-white hover:bg-pink-600 my-5">
              {loading ? "Sedang Menghatntar..." : "Hantar RSVP"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="font-mono text-center text-sm text-muted-foreground">
          Terima Kasih Atas Respon Anda!
        </CardFooter>
      </Card>
  )
}
