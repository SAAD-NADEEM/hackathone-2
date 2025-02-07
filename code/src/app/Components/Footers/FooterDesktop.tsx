import { Separator } from "@/components/ui/separator";
import Link from "next/link";

function FooterDesktop() {

    return (
        <footer className="bg-bg-500 h-[480px] ctn-width-base m-auto p-[60px] pt-[80px] flex-col hidden lg:flex ">

            {/* ---- Top Footer ---- */}
            <section className="flex-1 flex justify-between">
                <div>
                    <h1 className="font-bold text-[32px] leading-[44px] mb-4 tracking-[-3%] text-prm-500 ">MORENT</h1>
                    <p className="font-medium tracking-[-2%] text-footer">Our vision is to provide convenience <br /> and help increase your sales business.</p>
                </div>
                <div className="grid grid-cols-3 gap-[60px]">
                    <div className="links">
                        <h3>About</h3>
                        <Link href={'#'}>How it works</Link>
                        <Link href={'#'}>Featured</Link>
                        <Link href={'#'}>PartnershiLink</Link>
                        <Link href={'#'}>Bussiness Relation</Link>
                    </div>
                    <div className="links">
                        <h3>Community</h3>
                        <Link href={'#'}>Events</Link>
                        <Link href={'#'}>Blog</Link>
                        <Link href={'#'}>Podcast</Link>
                        <Link href={'#'}>Invite a friend</Link>
                    </div>
                    <div className="links">
                        <h3>Socials</h3>
                        <Link href={'#'}>Discord</Link>
                        <Link href={'#'}>Instagram</Link>
                        <Link href={'#'}>Twitter</Link>
                        <Link href={'#'}>Facebook</Link>
                    </div>
                </div>
            </section>


            <Separator className="my-9" />
            {/* ---- Bottom Footer ---- */}
            <section className="flex gap-[60px]">
                <p className="flex-1 font-semibold leading-6 tracking-[-2%] text-second-500">©2022 MORENT. All rights reserved</p>
                <p className="font-semibold leading-6 tracking-[-2%] text-second-500">Privacy & Policy</p>
                <p className="font-semibold leading-6 tracking-[-2%] text-second-500">Terms & Condition</p>
            </section>
        </footer>
    );
};

export default FooterDesktop;