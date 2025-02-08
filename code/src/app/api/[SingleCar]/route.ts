import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: {SingleCar: string} }) {

    // Verification headers
    if (request.headers.get("x-secret-key") !== process.env.SECRET_KEY) {
        return NextResponse.json({message: 'Unauthorized'}, {status: 401});
    }

    console.log("this is id the" ,params.SingleCar)

    const query = `*[_type == "car" && _id == '${params.SingleCar}'] {
                _id,
                _type,
                name,
                brand,
                type,
                fuelCapacity,
                transmission,
                seatingCapacity,
                pricePerDay,
                originalPrice,
                tags,
                info,
                "images": images[].asset->url, 
            }[0]`;
    

    try {
        const response = await client.fetch(query)

        // If no popular cars were found
        if(!response || response.length === 0) {
            
            return NextResponse.json(
                { message: 'No car found'},
                {status: 404}
            )
        }


        return NextResponse.json(response)
    } catch (error) {
        
        console.log('Error fetching car',error)

        // Providing Detailed Error response
        return NextResponse.json(
            {message: 'Failed to fetch car'},
            {status: 500}
        )
    }

}