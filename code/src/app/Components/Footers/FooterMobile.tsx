import { Separator } from "@/components/ui/separator";
import Link from "next/link";

function FooterMobile() {
    return (
        <footer className="bg-bg-500 p-4 flex flex-col lg:hidden"> {/* Mobile-specific styles & hidden on large screens */}
            <div className="flex justify-center mb-4">
                <h1 className="font-bold text-[24px] leading-[32px] tracking-[-3%] text-prm-500">MORENT</h1>
            </div>

            <div className="mb-6 text-center">
                <p className="font-medium tracking-[-2%] text-footer text-sm">
                    Our vision is to provide convenience <br /> and help increase your sales business.
                </p>
            </div>

            <Separator className="mb-6" />

            {/* About, Community, Socials - Mobile-friendly layout */}
            <div className="grid grid-cols-3 gap-4">
                <div className="mb-6">
                    <h3 className="font-semibold text-lg text-prm-500 mb-2">About</h3>
                    <div className="flex flex-col gap-2">
                        <Link href={'#'} className="text-footer text-sm">How it works</Link>
                        <Link href={'#'} className="text-footer text-sm">Featured</Link>
                        <Link href={'#'} className="text-footer text-sm">Partnership</Link>
                        <Link href={'#'} className="text-footer text-sm">Business Relation</Link>
                    </div>
                </div>

                <div className="mb-6">
                    <h3 className="font-semibold text-lg text-prm-500 mb-2">Community</h3>
                    <div className="flex flex-col gap-2">
                        <Link href={'#'} className="text-footer text-sm">Events</Link>
                        <Link href={'#'} className="text-footer text-sm">Blog</Link>
                        <Link href={'#'} className="text-footer text-sm">Podcast</Link>
                        <Link href={'#'} className="text-footer text-sm">Invite a friend</Link>
                    </div>
                </div>

                <div className="mb-6">
                    <h3 className="font-semibold text-lg text-prm-500 mb-2">Socials</h3>
                    <div className="flex flex-col gap-2">
                        <Link href={'#'} className="text-footer text-sm">Discord</Link>
                        <Link href={'#'} className="text-footer text-sm">Instagram</Link>
                        <Link href={'#'} className="text-footer text-sm">Twitter</Link>
                        <Link href={'#'} className="text-footer text-sm">Facebook</Link>
                    </div>
                </div>
            </div>

            <Separator className="mb-6" />

            <div className="text-center">
                <p className="font-semibold leading-6 tracking-[-2%] text-second-500 text-sm mb-2">
                    ©2022 MORENT. All rights reserved
                </p>
                <div className="flex justify-center gap-4">
                    <Link href={'#'} className="font-semibold leading-6 tracking-[-2%] text-second-500 text-sm">Privacy & Policy</Link>
                    <Link href={'#'} className="font-semibold leading-6 tracking-[-2%] text-second-500 text-sm">Terms & Condition</Link>
                </div>
            </div>
        </footer>
    );
}

export default FooterMobile;