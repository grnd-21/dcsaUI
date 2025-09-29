"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

// Simple useMediaQuery hook using window.matchMedia
import { useEffect, useState } from "react"

export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(() => {
        if (typeof window !== "undefined") {
            return window.matchMedia(query).matches
        }
        return false
    })

    useEffect(() => {
        if (typeof window === "undefined") return

        const mediaQueryList = window.matchMedia(query)
        const listener = (event: MediaQueryListEvent) => setMatches(event.matches)

        mediaQueryList.addEventListener("change", listener)
        setMatches(mediaQueryList.matches)

        return () => mediaQueryList.removeEventListener("change", listener)
    }, [query])

    return matches
}
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ContactUsDialog() {
    const isDesktop = useMediaQuery("(min-width: 768px)")
    const [open, setOpen] = React.useState(false)

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <form>
                    <DialogTrigger asChild>
                        <Button
                            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                        >
                            Contact Support
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Contact Us</DialogTitle>
                            <DialogDescription>
                                Fill out the form below and our team will get back to you
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="name-1">Name</Label>
                                <Input id="name-1" name="name" placeholder="eg. Pedro Duarte" />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="email-1">Email</Label>
                                <Input id="email-1" name="email" placeholder="eg. pduarte@gmail.com" />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="message-1">Message</Label>
                                <textarea
                                    id="message-1"
                                    name="message"
                                    placeholder="Your message"
                                    className="min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-base text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-vertical"
                                />
                            </div>
                        </div>
                        <div className="flex justify-end gap-2 mt-4">
                            <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <Button type="submit">Send</Button>
                        </div>
                    </DialogContent>
                </form>
            </Dialog>
        )
    }

    // Mobile: use Drawer
    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <form>
                <DrawerTrigger asChild>
                    <Button
                        className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                    >
                        Contact Support
                    </Button>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader className="text-left">
                        <DrawerTitle>Contact Us</DrawerTitle>
                        <DrawerDescription>
                            Fill out the form below and our team will get back to you
                        </DrawerDescription>
                    </DrawerHeader>
                    <div className="grid gap-4 px-4">
                        <div className="grid gap-3">
                            <Label htmlFor="name-1">Name</Label>
                            <Input id="name-1" name="name" placeholder="eg. Pedro Duarte" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="email-1">Email</Label>
                            <Input id="email-1" name="email" placeholder="eg. pduarte@gmail.com" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="message-1">Message</Label>
                            <textarea
                                id="message-1"
                                name="message"
                                placeholder="Your message"
                                className="min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-base text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-vertical"
                            />
                        </div>
                    </div>
                    <DrawerFooter className="pt-2">
                        <DrawerClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                        <Button type="submit">Send</Button>
                    </DrawerFooter>
                </DrawerContent>
            </form>
        </Drawer>
    )
}
