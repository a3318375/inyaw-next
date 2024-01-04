import Search from "@/components/Search";
import Theme from "@/components/Theme";
import Headroom from 'react-headroom';
import MainNav from "@/components/MainNav";
import MobileNav from "@/components/MobileNav";

export default function MainHeader() {
    return (
        <Headroom className="fixed z-999 w-full">
            <header className="sticky top-0 z-50 w-full border-b bg-white bg-opacity-60">
                <div className="container flex h-14 items-center">
                    <MainNav />
                    <MobileNav />
                    <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                        <div className="w-full flex-1 md:w-auto md:flex-none">
                            <Search />
                        </div>
                        <nav className="flex items-center">
                            <Theme />
                        </nav>
                    </div>
                </div>
            </header>
        </Headroom>
    );
}
