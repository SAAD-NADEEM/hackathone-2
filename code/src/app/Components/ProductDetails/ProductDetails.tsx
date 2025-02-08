"use client"

import ProductCarousel from "./ProductCarousel";
import ProductDescription from "./ProductDescription/ProductDescription";
import PopularCars from "../PopularCars";
import { useEffect, useState } from "react";
import { Car } from "../Utils/type";

function ProductDetails(props: { productId: string; }) {

    const productId: string = props.productId
    const [car, SetCar] = useState<Car | null>(null)


    const handleReq = async () => {

        const res = await fetch(`/api/${productId}`,
            {
                cache: 'no-store',
                method: 'GET',
                headers: {
                    "x-secret-key": process.env.NEXT_PUBLIC_SECRET_KEY as string
                },
            }
        )

        try {

            if (!res.ok) {
                throw new Error('Failed to fetch popular cars')
            }

            const fetched = await res.json()
            SetCar(fetched)
        } catch (error) {
            console.log('Error fetching populars data', error)
        }
    };

    useEffect(() => {
        handleReq()
    }, [])



    return (
        <section className="flex flex-col w-full | xl:w-auto">
            <div className="flex flex-col gap-8 | md:flex-col | lg:flex-col | xl:flex-row">
                <ProductCarousel car={car} />
                <ProductDescription car={car} />
            </div>
            <div className="w-full">
                <PopularCars />
            </div>
        </section>
    );
};

export default ProductDetails;