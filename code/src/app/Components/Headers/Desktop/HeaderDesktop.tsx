import Like from "@/app/Components/Icons/Like";
import Notifications from "@/app/Components/Icons/Notifications";
import Settings from "@/app/Components/Icons/Settings";
import Filter from "@/app/Components/Icons/Filter";
import { Search } from "lucide-react";
import Image from "next/image";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";



function HeaderDesktop() {


    return (
        <header className="bg-bg-500 hidden lg:flex ctn-width-base mx-auto py-[40px] pl-[60px] pr-[32px] justify-between">
            <div className="flex w-full">
                <Link href='/' replace >
                    <h1 className="text-prm-500 text-[32px] cursor-pointer leading-[44px] tracking-[-3%] font-bold mr-16">MORENT</h1>
                </Link>
                <div className="flex border-primary rounded-full px-[20px] py-[10px] gap-[20px] basis-[492px]">
                    <Search className="h-6 w-6 text-second-400" />
                    <input type="text" placeholder="Search something hear"
                        className="w-full text-second-400 text-sm tracking-[-2%] text-justify font-medium leading-5 focus:outline-0 bg-transparent" />
                    <Filter />
                </div>
            </div>
            <div className="flex gap-[20px] h-auto">
                <div>
                    <Like className="h-11 w-11" />
                </div>
                <div>
                    <Notifications className="h-11 w-11" />
                </div>
                <div>
                    <Settings className="h-11 w-11" />
                </div>
                <div className="h-11 w-11 flex justify-center">
                    <SignedIn>
                        <UserButton appearance={{
                            elements: {
                                rootBox: "cursor-pointer", // Add cursor pointer
                                userButtonAvatarBox: "h-10 w-10", // Avatar size
                                userButtonTrigger: "focus:outline-none", // Remove focus outline
                                userButtonPopoverCard: "mt-2 shadow-lg rounded-lg", // Popover card styling
                                userButtonPopoverActionButton: "hover:bg-gray-100", // Hover effect for buttons
                                userButtonPopoverFooter: "hidden", // Hide the footer
                            },
                        }}
                            userProfileUrl="/dashboard" />
                    </ SignedIn>
                    <SignedOut>
                        <SignInButton>
                            <Image src={'/profile.png'}
                                alt="profile image"
                                width={44} height={44}
                                className="w-full h-full border-2 border-second-400 rounded-full cursor-pointer hover:border-prm-500 transition" />
                        </SignInButton>
                    </SignedOut>
                </div>
            </div>
        </header>
    );
};

export default HeaderDesktop;