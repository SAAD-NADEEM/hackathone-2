import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: {category: string} }) {

    console.log('fetched in the dynamic route')

    const query = `*[_type == "car" && "${params.category}" in tags] {
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
        "images": images[].asset->url, 
      }`;
    

    try {
        const response = await client.fetch(query)

        // If no popular cars were found
        if(!response || response.length === 0) {
            
            return NextResponse.json(
                { message: `No ${params.category} cars found`},
                {status: 404}
            )
        }


        return NextResponse.json(response)
    } catch (error) {
        
        console.log(`Error fetching ${params.category} cars`,error)

        // Providing Detailed Error response
        return NextResponse.json(
            {message: `Failed to fetch ${params.category} cars`},
            {status: 500}
        )
    }

}