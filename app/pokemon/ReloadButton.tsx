"use client";

export async function triggerRevalidate() {
    const isServer = typeof window === "undefined";
    if (isServer) {
        console.log("skipping revalidation")
        return;
    }

    const url = window.location.origin;
    const result = await fetch(`${url}/api/revalidation`, {
        method: "post",
    })

    return await result.json()
}

const ReloadButton = () => {
    const handle = async () => {
        await triggerRevalidate();
        window.location.reload()
    }
    return <><button onClick={handle}>Revalidate</button></>
}

export default ReloadButton;