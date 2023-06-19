import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers';

export const runtime = 'edge';
export async function POST(request: NextRequest) {
    return getCookie();
}
export async function GET(request: NextRequest) {
    return getCookie();
}

function getCookie() {
    const cookieStore = cookies()
    const name = cookieStore.get('name')?.value
    console.log("name@edge", name)
    return NextResponse.json({ name });
}
