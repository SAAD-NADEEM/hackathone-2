import Like from "@/app/Components/Icons/Like";
import Notifications from "@/app/Components/Icons/Notifications";
import Settings from "@/app/Components/Icons/Settings";
import Filter from "@/app/Components/Icons/Filter";
import { Search } from "lucide-react";
import Image from "next/image";


function HeaderDesktop() {

    return (
        <header className="bg-bg-500 hidden lg:flex ctn-width-base mx-auto py-[40px] pl-[60px] pr-[32px] justify-between">
            <div className="flex w-full">
                <h1 className="text-prm-500 text-[32px] leading-[44px] tracking-[-3%] font-bold mr-16">MORENT</h1>
                <div className="flex border-primary rounded-full px-[20px] py-[10px] gap-[20px] basis-[492px]">
                    <Search className="h-6 w-6 text-second-400" />
                    <input type="text" placeholder="Search something hear"
                        className="w-full text-second-400 text-sm tracking-[-2%] text-justify font-medium leading-5 focus:outline-0" />
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
                <div className="h-11 w-11">
                    <Image src={'/profile.png'} alt="profile image" width={44} height={44} className="w-full h-full" />
                </div>
            </div>
        </header>
    );
};

export default HeaderDesktop;