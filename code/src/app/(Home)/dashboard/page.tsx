"use client"

import Order from "@/app/Components/Dashboard/Orders";
import { OrderFormData } from "@/app/Components/Utils/type";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

function page() {

    const [ordersData, setOrdersData] = useState([])

    const getOrders = async () => {
        const query = `*[_type == "orders" && userId == "user_2siVDVDac4a05tUmA9ZqHiLvCZV"].orders`

        try {
            const response = await client.fetch(query)
            setOrdersData(response[0] || [])
            console.log('Orders data:', response[0][0].carId)
        } catch {
            console.log('Error fetching orders data')
        }
    }

    useEffect(() => {
        getOrders()
    },[])

    return (
        <section className="ctn-width-home flex-1 mx-auto | lg:my-8">
            {
                ordersData.map((order: OrderFormData) => (
                    <Order orders={order} />
                ))
            }
        </section>
    );
};

export default page;