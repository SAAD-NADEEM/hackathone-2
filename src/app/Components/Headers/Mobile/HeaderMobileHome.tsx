import Filter from "@/app/Components/Icons/Filter";
import { Search } from "lucide-react";
import Image from "next/image";

function HeaderMobileHome() {

    return (
        <header className="bg-bg-500 h-[172px] lg:hidden">
            <div className="ctn-width-home py-8 m-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl leading-7 font-bold text-prm-500">MORENT</h1>
                    <div>
                        <Image src={'/profile.png'} alt="profile image" width={28} height={28} />
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="px-6 py-3 border-primary rounded-lg flex-1 flex gap-2">
                        <Search className="text-second-400"/>
                        <input type="text" placeholder="Search something here" 
                        className="w-full text-second-400 font-medium text-sm tracking-tight text-justify focus:outline-0" />
                    </div>
                    <div className="p-3 ml-4 border-primary rounded-lg">
                        <Filter />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderMobileHome;