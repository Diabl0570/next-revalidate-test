import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath, revalidateTag } from 'next/cache'

export const runtime = 'edge';
export async function POST(request: NextRequest) {
    return revalidate();
}
export async function GET(request: NextRequest) {
    return revalidate();
}

function revalidate() {
    revalidateTag("pokemon");
    revalidatePath("/pokemon");
    return NextResponse.json({ revalidated: true, now: Date.now() });
}
