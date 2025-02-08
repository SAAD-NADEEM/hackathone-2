import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request :NextRequest) {

    // Verification headers
    if (request.headers.get("x-secret-key") !== process.env.SECRET_KEY) {
        return NextResponse.json({message: 'Unauthorized'}, {status: 401});
    }

    const query = `*[_type == "car" && "recommended" in tags] [0..3] {
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
                { message: 'No recommended cars found'},
                {status: 404}
            )
        }


        return NextResponse.json(response)
    } catch (error) {
        
        console.log('Error fetching recommended cars',error)

        // Providing Detailed Error response
        return NextResponse.json(
            {message: 'Failed to fetch recommended cars'},
            {status: 500}
        )
    }

}