// Difference Between Simple Routing and use Router in Next Navigation?
// Ans: 
//       In simple Routing we Link pages with the help of Link Tag and when we click button then the page shows but in case of use Router we only apply any condition and when condition is true then it automatically show About page, No need to click button.


'use client'
import { useRouter } from "next/navigation"
import { useState } from "react";
import Link from "next/link";
export default function Home() {
  const router=useRouter();
  const [num,setNum]=useState(0);

  if(num>=10){
    router.push('/about');
  }
  return (
   <>
   <input type="text" placeholder="Enter Number" onChange={(e:any)=>{setNum(e.target.value)}}></input>
  <Link href={'/about'}><button>Click Me</button></Link>
   </>
  )
}
