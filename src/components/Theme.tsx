"use client"

import {Button} from "@/components/ui/button"
import {SunIcon, MoonIcon} from "@radix-ui/react-icons"

export default function Theme() {
    const setTheme = () => {
        if (localStorage.theme === 'dark') {
            document.documentElement.classList.remove(localStorage.theme)
            localStorage.theme = 'light'
            document.documentElement.classList.add('light')
        } else {
            document.documentElement.classList.remove(localStorage.theme)
            localStorage.theme = 'dark'
            document.documentElement.classList.add('dark')
        }
    }
    return (
        <Button variant="ghost" className="w-9 px-0" onClick={setTheme}>
            <SunIcon
                className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
            <MoonIcon
                className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:text-muted dark:rotate-0 dark:scale-100"/>
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
