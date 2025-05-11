'use client'

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { fetchRsvp } from "./speech-carousel.server"

type RsvpData = {
    name: string
    speech: string
    isAttend: boolean
    total_person: number
}

export function SpeechCarousel() {
    const [rsvpList, setRsvpList] = useState<RsvpData[]>([])

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetchRsvp()
                setRsvpList(res)
            } catch (err) {
                console.error('Failed to load RSVP data', err)
            }
        }
        fetchData()
    }, [])

    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-white to-gray-100 px-4">
            <div className="w-xl">
                <div className="my-8 text-3xl md:text-5xl italic underline text-gray-900 text-center">
                    Senarai Ucapan
                </div>
                <Carousel>
                    <CarouselContent>
                        {rsvpList.map((item, index) => (
                            <CarouselItem key={index} className="w-full">
                                <div className="p-1">
                                    <Card className="text-gray-900">
                                        <CardContent className="flex flex-col gap-4 p-6 min-h-[150px]">
                                            <span className="text-xl md:text-4xl font-bold">{item.name}</span>
                                            <p className="text-base italic">"{item.speech}"</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="bg-pink-500 text-white hover:bg-pink-600" />
                    <CarouselNext className="bg-pink-500 text-white hover:bg-pink-600" />
                </Carousel>
            </div>
        </div>

    )
}

export default SpeechCarousel
