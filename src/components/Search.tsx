"use client"

import {useState} from 'react'
import { Button } from "@/components/ui/button"
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import { cn } from "@/lib/utils"
import {BlogList, InyaaBlogVo} from "@/api/service";
import {useRouter} from "next/navigation";

export default function Search() {
    const router = useRouter()
    const [open, setOpen] = useState(false)
    const [searchPost, setSearchPost] = useState<InyaaBlogVo[]>([])
    const inputChange = async (title: string) => {
        if (title) {
            const res = await fetch('https://admin.inyaw.com/api/blog/web/list?title=' + title)
            const post: BlogList = await res.json()
            setSearchPost(post.data)
        }
    }

    return (
        <>
            <Button
                variant="outline"
                className={cn(
                    "relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64 hover:bg-cyan-200/0"
                )}
                onClick={() => setOpen(true)}
            >
                <span className="hidden lg:inline-flex hover:text-cyan-200">Search documentation...</span>
                <span className="inline-flex lg:hidden hover:text-cyan-200">Search...</span>
                <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </Button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..." onValueChange={inputChange}/>
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Links">
                        {(searchPost && searchPost.length > 0) && searchPost.map((item, index) => {
                            return (
                                <CommandItem
                                    key={index}
                                    onSelect={() => {
                                        setOpen(false)
                                        router.push('/article/' + item.id)
                                    }}
                                >
                                    {item.title}
                                </CommandItem>
                            )
                        })}
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    )
}
