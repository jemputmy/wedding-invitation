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
            <div className="w-full max-w-2xl">
                <div className="my-8 text-2xl md:text-4xl italic underline text-gray-900 text-center">
                    Senarai Ucapan
                </div>
                <Carousel className="w-full">
                    <CarouselContent>
                        {rsvpList.map((item, index) => (
                            <CarouselItem key={index} className="w-full">
                                <div className="p-1">
                                    <Card className="w-full text-gray-900">
                                        <CardContent className="flex flex-col gap-4 p-4 md:p-6 min-h-[120px] md:min-h-[150px]">
                                            <span className="text-lg md:text-2xl font-bold break-words">{item.name}</span>
                                            <p className="text-sm md:text-base italic break-words">"{item.speech}"</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="flex justify-center gap-2 mt-4">
                        <CarouselPrevious className="bg-pink-500 text-white hover:bg-pink-600" />
                        <CarouselNext className="bg-pink-500 text-white hover:bg-pink-600" />
                    </div>
                </Carousel>
            </div>
    )
}

export default SpeechCarousel
