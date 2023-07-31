'use client'
import { useState } from "react";
import { Suspense } from "react";
export default function Home() {
const [state,setState]=useState('false');




const before=(
  <button onClick={()=>setState('true')} >Click Me</button>
)

const after=(
  <div className="w-full h-full flex items-center justify-center bg-yellow-300">
  <div>
   <p className="font-bold">Fruits List</p>
   <ul>
    
    <Suspense fallback={<h2>Loading....</h2>}>
    <li>Apple</li>
    <li>Apple</li>
    <li>Apple</li>
    <li>Apple</li>
    <li>Apple</li>
    <li>Apple</li>
    <li>Apple</li>
    <li>Apple</li>
    <li>Apple</li>
    <li>Apple</li>
    <li>Apple</li>
    <li>Apple</li>
    <li>Apple</li>
    <li>Apple</li>
    <li>Apple</li>
    <li>Apple</li>
    <li>Apple</li>
    <li>Apple</li>
    <li>Apple</li>
    </Suspense>

   </ul>
    </div>
</div>
 
)
  
  return (
    <>
{state==='false'?before:after}
</>
  )
}

