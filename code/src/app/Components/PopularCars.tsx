"use client"

import Link from "next/link";
import ProductCard from "./Utils/ProductCard";
import { useEffect, useRef, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface Cars {
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
}
function PopularCars() {

    const [cars, SetCars] = useState<Cars[] | null>(null)

    const handleReq = async () => {

        const res = await fetch('/api/popular', {
            cache: 'no-store',
            method: 'GET',
            headers: {
                "x-secret-key": process.env.NEXT_PUBLIC_SECRET_KEY as string
            },
        })

        try {

            if (!res.ok) {
                throw new Error('Failed to fetch popular cars')
            }

            const fetched = await res.json()
            SetCars(fetched)
        } catch (error) {
            console.log('Error fetching populars data', error)
        }
    };

    useEffect(() => {
        handleReq()
    }, [])

    // if (!cars) {
    //     return <div>Loading...</div>;
    // }


    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const carouselRef = useRef<HTMLDivElement | null>(null);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!carouselRef.current) return; // Safeguard if ref is null
        e.preventDefault()
        setIsDragging(true);
        setStartX(e.pageX - carouselRef.current.offsetLeft);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging || !carouselRef.current) return; // Safeguard if ref is null

        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 0.2; // Adjust speed of scrolling
        carouselRef.current.scrollLeft = carouselRef.current.scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };



    return (
        <section className="w-full h-auto lg:h-auto my-8">
            <div className="flex justify-between">
                <h2 className="font-semibold cursor-pointer text-heading-200 leading-[21px] tracking-[-2%] text-second-300">Popular Car</h2>
                <Link href="/categories/popular"><p className="text-paragraph leading-[15.12px] text-prm-500 font-semibold">View All</p></Link>
            </div>
            <div
                ref={carouselRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                className="flex flex-col flex-wrap gap-8 overflow-scroll no-scrollbar mt-[20px] h-[286px] | lg:h-[388px]">
                {cars?.length ?
                    cars.map((car) => (
                        <ProductCard key={car._id} name={car.name}
                            type={car.type}
                            litres={car.fuelCapacity}
                            seats={car.seatingCapacity}
                            price={car.pricePerDay}
                            discountPrice={car.originalPrice || undefined}
                            src={car.images[0]}
                            id={car._id}
                        />
                    )) : Array.from({ length: 5 }).map((_, index) => (
                        <Skeleton key={index} className="w-[240px] h-[286px] | md:h-[388px] md:w-[304px] | lg:w-[304px] lg:h-[388px]" />
                    ))}
            </div>
        </section>
    );
};

export default PopularCars;
