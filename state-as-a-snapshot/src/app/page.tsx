'use client'
import {useState} from 'react'

// // Example 1 Same State Calling
// export default function Home() {
//   const [num,setNum]=useState(0);

//   return (
//    <>
// <h2>{num}</h2>
// <button onClick={()=>{
//   setNum(num+5);
//   setNum(num+2);
//   setNum(num+1);   // In case of same State Execute all above callings but only this line call works because (render component when component tag is closed or end) when we update value in state so component re-render it but in this case we update value but again we update value without rendering so line 10 and 11 (number=0) and this after last line component render and value is updated from 0 to 1.  
//   }}>Click Me</button> 
//    </>
//   )
// }


// // Example 2  Alert
// export default function Home() {
//   const [num,setNum]=useState(0);

//   return (
//    <>
// <h2>{num}</h2>
// <button onClick={()=>{
//   setNum(num+5);
//   alert (num);
//  }}>Click Me</button> 
//    </>
//   )
// }

// // Example 3  Alert -> setTimeout
// export default function Home() {
//   const [num,setNum]=useState(0);

//   return (
//    <>
// <h2>{num}</h2>
// <button onClick={()=>{
//   setNum(num+5);

//   setTimeout(()=>{
//     alert (num);
//   },3000)
  
//  }}>Click Me</button> 
//    </>
//   )
// }


// Example 4 Form
export default function Home() {
  const [name,setName]=useState('Shawaal');
  const [message,setMessage]=useState('Hi');

function showMessage(e:any)
{
  e.preventDefault();
  setTimeout(
    ()=>{alert(`You said ${message} to ${name}`)}
    ,2000)
}

  return (
   <form>
<label>To: {' '}
<select value={name} onChange={(e)=>{setName(e.target.value)}}>
  <option>Alice</option>
  <option>Bob</option>
  <option>Shawaal</option>
  <option>Nancy</option>
</select>
</label>
<textarea placeholder={message} onChange={(e)=>{setMessage(e.target.value)}}>{message}</textarea>
<input type='submit' value={'Submit'} onClick={showMessage}></input>
   </form>
  )
}