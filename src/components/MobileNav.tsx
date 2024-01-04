"use client"

import * as React from "react"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ViewVerticalIcon, FontStyleIcon } from "@radix-ui/react-icons"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

export default function MobileNav() {
    const [open, setOpen] = React.useState(false)

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                >
                    <ViewVerticalIcon className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
                <MobileLink
                    href="/"
                    className="flex items-center"
                    onOpenChange={setOpen}
                >
                    <FontStyleIcon className="mr-2 h-4 w-4" />
                    <span className="font-bold">bildyoyo</span>
                </MobileLink>
                <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                    <div className="flex flex-col space-y-3">
                        {mainNav?.map(
                            (item) =>
                                item.href && (
                                    <MobileLink
                                        key={item.href}
                                        href={item.href}
                                        onOpenChange={setOpen}
                                    >
                                        {item.title}
                                    </MobileLink>
                                )
                        )}
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}

interface MobileLinkProps extends LinkProps {
    onOpenChange?: (open: boolean) => void
    children: React.ReactNode
    className?: string
}

function MobileLink({
                        href,
                        onOpenChange,
                        className,
                        children,
                        ...props
                    }: MobileLinkProps) {
    const router = useRouter()
    return (
        <Link
            href={href}
            onClick={() => {
                router.push(href.toString())
                onOpenChange?.(false)
            }}
            className={cn(className)}
            {...props}
        >
            {children}
        </Link>
    )
}
const mainNav = [
    {
        title: "Documentation",
        href: "/docs",
    },
    {
        title: "Components",
        href: "/docs/components/accordion",
    },
    {
        title: "Themes",
        href: "/themes",
    },
    {
        title: "Examples",
        href: "/examples",
    },
    {
        title: "Figma",
        href: "/docs/figma",
    },
    {
        title: "GitHub",
        href: "https://github.com/shadcn/ui",
        external: true,
    },
    {
        title: "Twitter",
        href: "https://twitter.com/shadcn",
        external: true,
    },
]