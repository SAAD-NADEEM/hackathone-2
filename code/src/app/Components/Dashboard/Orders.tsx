"use client"

import Image from "next/image";
import Link from "next/link";
import { Car, OrderFormData } from "../Utils/type";
import { useEffect, useState } from "react";
import { createSlug } from "../Utils/libs";



function Order({ orders }: { orders: OrderFormData }) {

    const [car, SetCar] = useState<Car | null>(null)
    const id = car?._id
    console.log('check for carsid',orders.carId)


    const handleReq = async () => {

        const res = await fetch(`/api/${orders.carId}`,
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
                throw new Error('Failed to fetch orders')
            }

            const fetched = await res.json()
            SetCar(fetched)
        } catch (error) {
            console.log('Error fetching orders data', error)
        }
    };

    useEffect(() => {
        handleReq()
    }, [])

    return (
        <div className="grid grid-cols-1 gap-4">
            <div
                key={orders.carId}
                className="flex justify-between items-center bg-[--background-400] p-4 rounded-lg shadow-md border border-[--border-500]"
            >
                {/* Left Side: Image & Car Name */}
                <div className="flex items-center gap-4">
                    <div className="w-20 h-14 relative">
                        {car?.images[0] ? (
                            <Image
                                src={car?.images[0]}
                                alt={car?.name || "Car Image"}
                                fill={true} // Replaces deprecated layout="fill"
                                className="rounded-md object-cover"
                            />
                        ) : (
                            <div className="w-full h-full bg-gray-300 rounded-md flex items-center justify-center">
                                <p className="text-sm text-gray-600">No Image</p>
                            </div>
                        )}

                    </div>
                    <div>
                        <h2 className="text-[--secondary-300] font-semibold text-lg">
                            {car?.name}
                        </h2>
                        <Link
                            href={{
                                pathname: `/${createSlug(car?.name || "")}`,
                                query: { id }
                            }}
                            className="text-[--information-500] font-medium hover:underline"
                        >
                            View Details
                        </Link>
                    </div>
                </div>

                {/* Right Side: Pickup & Dropoff Dates */}
                <div className="text-right">
                    <p className="text-[--secondary-400] text-sm mb-2">
                        Pickup:{" "}
                        <span className="text-[--secondary-300]">{orders.pickupDate}</span>
                    </p>
                    <p className="text-[--secondary-400] text-sm">
                        Dropoff:{" "}
                        <span className="text-[--secondary-300]">{orders.dropoffDate}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Order;
