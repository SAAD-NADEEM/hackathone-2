import Image from "next/image";
import Favourite from "../Icons/Favourite";
import Gas from "../Icons/Gas";
import Manual from "../Icons/Manual";
import People from "../Icons/People";
import Button from "./Button";
import Link from "next/link";
import { createSlug } from "./libs";


interface ProductCardProps {
    variant?: "default" | "wide";
    pageType?: "home" | "category";
    name: string;
    type: string;
    litres: string;
    seats: string;
    price: number | string;
    discountPrice?: number | string;
    src: string;
    id:string | undefined
}


function Features({ children, label }: { children: React.ReactNode; label: string }) {
    return (
        <div className="flex gap-1">
            {children}
            <p className="text-small text-second-300 font-medium leading-[14px] tracking-[-2%]| | lg:leading-6">{label}</p>
        </div>
    )
}

function ProductCard({ variant = "default", pageType = "home", name, type, litres, seats, price, discountPrice, src, id }: ProductCardProps) {

    const wide = variant === "wide"
    const page = pageType === "category"

    const dimensions = {
        default: {
            width: "w-[240px] md:w-[304px] lg:w-[304px]",
            height: "h-[286px] md:h-[388px] lg:h-[388px]",
        },
        wide: {
            home: {
                width: "w-full md:w-[327px] lg:w-[304px]",
                height: "h-[240px] md:h-[240px] lg:h-[388px]",
            },
            category: {
                width: "w-full md:w-[317px] lg:w-[317px]",
                height: "h-[240px] md:h-[240px] lg:h-[388px]",
            },
        },
    };
    const { width, height } = wide
        ? dimensions.wide[page ? "category" : "home"]
        : dimensions.default;

    

    return (
        <div className={`flex-1 p-4 bg-bg-500 flex flex-col justify-between rounded-lg | | lg:p-6 ${width} ${height}`}>
            {/* This is the top section of the product card */}
            <header className="flex justify-between">
                <div>
                    <h3 className="text-body leading-5 font-semibold tracking-[-2%] text-second-500 | md:leading-5 md:font-semibold | lg:leading-6 lg:font-bold lg:tracking-[-3%]">{name}</h3>
                    <p className="text-small font-medium tracking-[-2%] text-second-300 leading-5 | md:font-bold | lg:font-bold">{type}</p>
                </div>
                <div className="h-6 w-6">
                    <Favourite />
                </div>
            </header>
            {/* This is the middle section of the product card */}
            <section className={`flex justify-between ${wide ? "flex-row items-center | lg:flex-col lg:items-stretch" : "flex-col"}`}>
                <div className={`lg:w-full lg:h-[156px] my-4 rounded-lg overflow-hidden ${wide ? "w-[180px] h-[100px]" : "w-full h-[100px]"}`}>
                <Image src={src} alt="Koenigsegg image" width={156} height={156} className="w-full h-full" />
                </div>
                <div className={`flex justify-between
                                ${wide ? "flex-col h-[74px] pr-2 | lg:h-auto lg:flex-row" : "flex-row"}`}>
                    <Features label={`${litres}`}>
                        <div>
                            <Gas className="h-icon-24 w-icon-24" />
                        </div>
                    </Features>
                    <Features label="Manual">
                        <div>
                            <Manual className="h-icon-24 w-icon-24" />
                        </div>
                    </Features>
                    <Features label={`${seats}`}>
                        <div>
                            <People className="h-icon-24 w-icon-24" />
                        </div>
                    </Features>
                </div>
            </section>
            {/* This is the  bottom section of the prodcut card*/}
            <section className="flex justify-between items-center">
                <div>
                    <p className="font-bold text-body text-second-500 tracking-[-1%] leading-5 | md:leading-6 | lg:leading-6">{price}/
                        <span className="font-medium text-small text-second-300 tracking-[-1%]">day</span>
                    </p>
                    {discountPrice && (
                        <p className="line-through font-medium text-small text-second-300 tracking-[-1%] leading-[15.12px] | lg:font-medium lg:leading-5">
                            {discountPrice}
                        </p>)}
                </div>
                <Link href={{pathname:`/${createSlug(name)}`,
                            query: {id}
                }}>
                    <Button state="primary" className="text-paragragh h-9 w-[100px] rounded | md:h-11 md:w-[116px] | lg:h-11 lg:w-[116px]">Rental Now</Button>
                </Link>
            </section>

        </div>
    );
};

export default ProductCard;