import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath, revalidateTag } from 'next/cache'
import { getRandomPokemonItem } from '@/services/pokemonService';

export const runtime = 'edge';
export async function POST(request: NextRequest) {
    const data = getRandomPokemonItem();
    return NextResponse.json({ data });
}
export async function GET(request: NextRequest) {
    return revalidate();
}

function revalidate() {
    revalidateTag("pokemon");
    revalidatePath("/pokemon");
    return NextResponse.json({ revalidated: true, now: Date.now() });
}
