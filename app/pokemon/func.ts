'use server'

export async function triggerRevalidate() {
    const url = process.env.VERCEL_URL || "http://localhost:3000";
    const result = await fetch(`${url}/api/revalidation`, {
        cache: "no-cache"
    })

    return await result.json()
}