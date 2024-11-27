"use client"
import { useState } from "react";

export const Counter = () => {
    console.log("Counter Component");
    const [count, setCount] = useState(0); 
    return (        
    <button onClick={() => setCount(count + 1)} >Clicked: {count} times. </button>
    // <button onClick={() => setCount(0)} >Reset Counter!</button>
    );
};