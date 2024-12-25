"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation"
export default function About()
{
    const router = useRouter();
    return (
        <div className="container">
            <h1>About us</h1>
            <button onClick={() => router.push("/")} className="bg-blue-500 text-white p-2 rounded-md" >Go home</button>
            <Button variant="destructive" onClick={() => router.push("/product/1")}  >Go to Product</Button>
        </div>
    );
}