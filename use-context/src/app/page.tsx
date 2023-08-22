'use client'
import {useState} from 'react'
// import { useAppContext } from '@/context/AppContext';k=
import { useContext } from 'react';
import { context } from '@/context/AppContext';
import Link from 'next/link';
export default function Main() {
const {val, setVal} = useContext(context)

 
  return (
<div>
<p>
{val}
</p>
<button onClick={() => setVal(prev => prev+1)}>Add</button>
<br/>
<Link href={'/home'}><button>Home Page</button></Link>
</div>
  )
}

