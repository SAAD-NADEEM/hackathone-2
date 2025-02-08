"use client"

import Link from "next/link";
import ProductCard from "./Utils/ProductCard";
import { useEffect, useMemo, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { useSearchParams } from "next/navigation";
import { dataConvert } from "./Utils/libs";

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


function RecomendationCar({ className, cols, pageType, fetchType }: { className?: string, cols: string, pageType?: "home" | "category", fetchType: string }) {

    const [cars, SetCars] = useState<Cars[] | null>(null)

    const handleReq = async () => {

        const res = await fetch(`/api/${fetchType}`, {
            cache: 'no-store',
            method: 'GET',
            headers: {
                "x-secret-key": process.env.NEXT_PUBLIC_SECRET_KEY as string
            },
        })

        try {

            if (!res.ok) {
                throw new Error('Failed to fetch recommended cars')
            }

            const fetched = await res.json()
            SetCars(fetched)
            console.log("this isi the cars", cars)
        } catch (error) {
            console.log('Error fetching recommendeds data', error)
        }
    };

    useEffect(() => {
        handleReq()
    }, [fetchType])


    // removing "/day" from some cars data:
    const sanitize = (price: string) => {
        return price.replace("/day", "").trim()
    }

    // Getting the filtered array

    const searchParams = useSearchParams()
    const types = searchParams.getAll('type')
    const capacities = searchParams.getAll('capacity')
    const filteredCapacities = dataConvert(capacities)
    console.log(types, filteredCapacities)

    const filteredCars = useMemo(() => {
        if (!cars) return null; // If data is not yet fetched, return null

        return cars.filter((car) => {
            const matchesType = types.length === 0 || types.includes(car.type);
            const matchesCapacity = filteredCapacities.length === 0 || filteredCapacities.includes(car.seatingCapacity);
            return matchesType && matchesCapacity;
        });
    }, [cars, types, filteredCapacities]);

    return (
        <section className="w-full h-auto lg:h-auto my-8">
            <div className={`${className} flex justify-between`}>
                <h2 className="font-semibold cursor-pointer text-heading-200 leading-[21px] tracking-[-2%] text-second-300">Recomendation Car</h2>
            </div>
            {
                filteredCars ?
                    <div className={`mt-[20px] p-0 gap-7 grid grid-cols-1 w-full place-items-center | md:grid-cols-2 ${cols} ${pageType == "category" ? 'xl:px-8 md:px-0 place-items-center' : 'p-0'}`}>
                        {filteredCars.map((car) => (
                            <ProductCard variant="wide" pageType={pageType} key={car._id} name={car.name}
                                type={car.type}
                                litres={car.fuelCapacity}
                                seats={car.seatingCapacity}
                                price={sanitize(car.pricePerDay)}
                                discountPrice={car.originalPrice || undefined}
                                src={car.images[0]}
                                id={car._id}
                            />
                        ))}
                    </div>
                    : <div className={`grid grid-cols-1 md:grid-cols-2 ${cols} place-items-center gap-8 p-0 mt-[20px] w-full ${pageType == "category" ? 'md:px-8' : 'p-0'}`}>
                        {Array.from({ length: 8 }).map((_, index) => (
                            <Skeleton key={index} className={`w-full ${pageType == "category" ? "md:w-[317px]" : "md:w-[308px]"} h-[240px] lg:h-[388px] rounded-lg`} />
                        ))}
                    </div>
            }
            <footer className="mt-12 lg:mt-16 flex justify-end">
                <Link href={'/categories/recommended'} className="text-second-300 text-small font-medium cursor-pointer">
                    View All
                </Link>
            </footer>
        </section>
    );
};

export default RecomendationCar;
