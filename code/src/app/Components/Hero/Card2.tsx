import Image from "next/image";
import Link from "next/link";
import Button from "../Utils/Button";


function Card2() {

    return (
        <div className="relative h-[232px] min-w-[327px] p-4 mx-auto hidden | md:block | lg:mx-0 lg:w-[640px] lg:h-[360px] lg:block lg:p-6">
            <article className="relative z-20">
                <h1 className="text-heading | font-semibold text-bg-500 tracking-[-2%] | md:tracking-[-3%] | lg:tracking-[-3%]">Easy way to rent a
                    <br className="hidden lg:block" /> car at a low price
                </h1>
                <p className="text-paragragh | font-medium text-bg-500 leading-[19.2px] pt-3 pb-4 | md:leading-[19.2px] | lg:leading-6 ">Providing cheap car rental services
                    <br className="hidden lg:block" /> and safe and comfortable facilities.
                </p>
                <Link href={"#"}>
                    <Button state="secondary" className="hero text-paragragh">Rental Car</Button>
                </Link>
            </article>
            <Image src={"/ad2.png"}
                alt="car image"
                width={327}
                height={232}
                className="absolute h-full w-full inset-0 z-0"
            />
        </div>
    );
};

export default Card2;

