"use client";

import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { useEffect, useState } from "react";

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


function ProductCarousel(props: { car: Car | null }) {


    const thumbnails = props.car?.images || [];
    const [mainImage, setMainImage] = useState<string | null>(null);

    useEffect(() => {
        if (thumbnails.length > 0) {
            setMainImage(thumbnails[0])
        }
    }, [thumbnails])

    return (
        <div className="flex-1">
            {
                mainImage ?
                    <div className="w-full h-[232px] rounded-lg overflow-hidden | lg:h-[360px]">
                        <Image src={mainImage} alt="product picture one"
                            height={360} width={492} className="h-full w-full" />
                    </div> : <Skeleton className="w-full h-[232px] rounded-lg | lg:h-[360px]" />

            }
            {
                mainImage ?
                    <div className="flex justify-between mt-6 gap-[20px] | | lg:mt-6 lg:gap-6">
                        {thumbnails && thumbnails.map((thumbnail, index) => (
                            <Image key={index} src={thumbnail} alt="view picture 1" width={96} height={64} className={`flex-1 h-16 lg:h-[124px] rounded-lg cursor-pointer ${thumbnail === mainImage ? 'border-2 border-prm-500 p-[2px]' : ''}`}
                                onClick={() => setMainImage(thumbnail)}
                            />
                        ))} </div> : <div className="flex gap-[20px] mt-6">
                        <Skeleton className="flex-1 h-16 lg:h-[124px] rounded-lg cursor-pointer"/>
                        <Skeleton className="flex-1 h-16 lg:h-[124px] rounded-lg cursor-pointer"/>
                        <Skeleton className="flex-1 h-16 lg:h-[124px] rounded-lg cursor-pointer"/>
                    </div>


            }
        </div>
    );
};

export default ProductCarousel;