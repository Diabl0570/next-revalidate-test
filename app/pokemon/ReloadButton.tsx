"use client";

import { triggerRevalidate } from "./func";

const ReloadButton = () => {
    const handle = async () => {
        await triggerRevalidate();
        window.location.reload()
    }
    return <><button onClick={handle}>Revalidate</button></>
}

export default ReloadButton;