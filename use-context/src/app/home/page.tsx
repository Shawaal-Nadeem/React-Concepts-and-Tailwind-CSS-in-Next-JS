'use client'
import {useContext} from 'react'
import { context } from '@/context/AppContext';

export default function Home() {
  const myContext=useContext(context);
  const val=myContext.val;
  const setVal=myContext.setVal;
  setVal(2);    //if we wanna set value at this page
  console.log(val);
  return (
 <div>
Hy value is : {val}
 </div>
  )
}
