import Recommendations from "@/app/pokemon/Recommendations";
import ReloadButton from "@/app/pokemon/ReloadButton";
import { cookies } from "next/headers";
import { Suspense } from "react";

export const runtime = 'edge';

const Layout = ({ children }: {
    children: React.ReactNode
}) => {
    const name = cookies().get('name')?.value || 'unknown';

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Layout</h1>
            {children}
            <div className="">
                <p>
                    <br />
                    <Suspense fallback={"loading..."}>
                        <ReloadButton />
                    </Suspense>
                </p>
                <Suspense fallback={"loading..."}>
                    {/** @ts-ignore */}
                    <Recommendations name={name} />
                </Suspense>
            </div>
        </main>
    )

};

export default Layout;