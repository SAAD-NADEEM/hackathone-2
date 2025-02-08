"use client"

import PriceBox from "./PriceBox";
import Specifications from "./Specifications";
import ProductTitle from "./Title";
import { Skeleton } from "@/components/ui/skeleton";

interface Car {
    _id: string;
    _type: string;
    name: string;
    brand: string | null;
    type: string;
    fuelCapacity: string;
    transmission: string;
    seatingCapacity: string;
    pricePerDay: string;
    originalPrice: string | null;
    tags: string[];
    images: string[];
    info: string;
}


function ProductDescription(props: { car: Car | null }) {

    const car = props.car

    const name = car?.name
    const info = car?.info
    const specs = {
        type: car?.type,
        fuelCapacity: car?.fuelCapacity,
        seatingCapacity: car?.seatingCapacity,
        transmission: car?.transmission,
    }
    const price = {
        pricePerDay: car?.pricePerDay,
        originalPrice: car?.originalPrice
    }
    


    return (
        car ? (
            <div className="flex-1 gap-4 rounded-lg bg-bg-500 flex flex-col justify-between p-4 md:p-6 lg:p-6 lg:h-[508px]">
                <ProductTitle name={name || ''} />
                <div className="min-h-[200px] overflow-scroll no-scrollbar">
                    <p className="font-normal text-xs leading-6 tracking-[-2%] text-second-300 lg:text-xl lg:leading-10">
                        {info || "A compact hatchback ideal for city commuting with great fuel efficiency."}
                    </p>
                </div>
                <Specifications specs={specs} />
                <PriceBox price={price} id={car._id}/>
            </div>
        ) : <Skeleton className="min-h-[318px]  min-w-[327px] flex-1"/>
    );
};

export default ProductDescription;