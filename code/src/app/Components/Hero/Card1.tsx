import Image from "next/image";
import Link from "next/link";
import Button from "../Utils/Button";

function Card1() {

    return (
        <div className="relative h-[232px] min-w-[327px] p-4 mx-auto | md:block | lg:mx-0 lg:w-[640px] lg:h-[360px] lg:p-6">
            <article className="relative z-20">
                <h1 className="text-heading | font-semibold text-bg-500 tracking-[-2%] | lg:tracking-[-3%]">The Best Platform
                    <br className="hidden lg:block" /> for Car Rental
                </h1>
                <p className="text-paragragh | font-medium text-bg-500 leading-[19.2px] pt-3 pb-4 | md:leading-[19.2px] | lg:leading-6">Ease of doing a car rental safely and
                    <br className="hidden lg:block" /> reliably. Of course at a low price.
                </p>
                <Link href={"#"}>
                    <Button state='primary' className="hero text-paragragh">Rental Car</Button>
                </Link>
            </article>
            <Image src={"/ad1.png"}
                alt="car image"
                width={327}
                height={232}
                className="absolute h-full w-full inset-0 z-0 hidden | md:block | lg:block"
            />
            <Image src={"/adsmall.png"}
                alt="car image"
                width={327}
                height={232}
                className="absolute h-full w-full inset-0 z-0 block | md:hidden | lg:hidden"
            />
        </div>

    );
};

export default Card1;
