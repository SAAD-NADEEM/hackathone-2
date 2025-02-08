import { createClient } from "@sanity/client";
import { currentUser } from '@clerk/nextjs/server'
import { NextRequest, NextResponse } from 'next/server'
import { OrderFormData } from "@/app/Components/Utils/type";


const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2021-08-31',  
});


export async function POST(req: NextRequest) {

    // Verification headers
    if (req.headers.get("x-secret-key") !== process.env.SECRET_KEY) {
        return NextResponse.json({message: 'Unauthorized'}, {status: 401});
    }

    const user = await currentUser();
    const currentUserId = user?.id;
    const orderData: OrderFormData = await req.json();

    try {

        const newOrder = {
            _key: `${Date.now()}-${Math.random()}`,
            carId: orderData.carId,
            pickupDate: orderData.pickupDate,
            dropoffDate: orderData.dropoffDate
          };
          
          // Check if the user already has an order document
          const existingOrder = await sanityClient.fetch(
            `*[_type == "orders" && userId == $userId][0]`,
            { userId: currentUserId }
          );
          
          if (existingOrder) {
            // Update the existing document by appending the new order
            const sentData = await sanityClient
              .patch(existingOrder._id)
              .setIfMissing({ orders: [] })
              .append("orders", [newOrder])
              .commit();
            return NextResponse.json(sentData, { status: 200 });
            
          } else {
            // Create a new order document if it doesn't exist
            const sentData = await sanityClient.create({
              _type: "orders",
              userId: currentUserId,
              orders: [newOrder]
            });
            return NextResponse.json(sentData, { status: 200 });

          }
          


    } catch (sanityError) {
        return NextResponse.json({message: 'Failed to create order', sanityError}, {status: 500});
    }
}