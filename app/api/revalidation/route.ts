import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath, revalidateTag } from 'next/cache'

export const runtime = 'edge';

export async function GET(request: NextRequest) {
    revalidateTag("pokemon")
    revalidateTag("/pokemon/page")
    // revalidatePath('/[locale]/brand/[slug]');

    return NextResponse.json({ revalidated: true, now: Date.now() })
}