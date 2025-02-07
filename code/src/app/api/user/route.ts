import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@sanity/client";
import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'


const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2021-08-31',  
});

export async function POST(req: NextRequest) {
  try {

    const SIGN_IN_SECRETE = process.env.SIGN_IN_SECRETE

    if (!SIGN_IN_SECRETE) {
        throw new Error('Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env.local')
    }

    const wh = new Webhook(SIGN_IN_SECRETE)

    
    // Get headers
    const headerPayload = await headers()
    const svix_id = headerPayload.get('svix-id')
    const svix_timestamp = headerPayload.get('svix-timestamp')
    const svix_signature = headerPayload.get('svix-signature')

    // If there are no headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
        return new Response('Error: Missing Svix headers', {
        status: 400,
        })
    }
    // Get body
    const payload = await req.json()
    const body = JSON.stringify(payload)

    let evt: WebhookEvent

    // Verify payload with headers
    try {
        evt = wh.verify(body, {
        'svix-id': svix_id,
        'svix-timestamp': svix_timestamp,
        'svix-signature': svix_signature,
        }) as WebhookEvent
    } catch (err) {
        console.error('Error: Could not verify webhook:', err)
        return new Response('Error: Verification error', {
        status: 400,
        })
    }

    const eventType = evt.type

    if(eventType === 'user.created') {
        const { id: userId, email_addresses, first_name: name } = evt.data
        const email = email_addresses[0].email_address

        const query = `*[_type == "user" && email == $email][0]`
        const existingUser = await sanityClient.fetch(query, { email });

        if(existingUser) {
          return NextResponse.json({ message: "User exist", user: existingUser }, { status: 200 });
        }

        const sentData = await sanityClient.create({
            _type: "user",
            userId,
            email,
            name,
        });

        return NextResponse.json({ message: "User created", user: sentData }, { status: 200 });
    }
    

  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}


