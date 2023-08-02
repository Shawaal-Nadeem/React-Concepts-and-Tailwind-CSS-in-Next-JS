'use client'
import { useState } from "react"


export default function Home() {
  const [answer,setAnswer]=useState('Answer');
  const [state,setState]=useState('false');
  const [result,setResult]=useState('');
  function HandleDisablingAndCheckAnswering(){
    setState('true');
    if(answer.toLowerCase()==='nancy'){
setTimeout(()=>{alert(`Yes!!! ${answer} is Crush of Shawaal`)},1500)
setResult('Correct Answer');
    }
    else
    {
      setResult('Wrong Answer');
    }
  }

  return (
    <>
    <h2 className=" text-center font-extrabold text-3xl">Crush Guess Quizz</h2>
    <p className=" mt-10 ml-3 font-bold">What is the name of Shawaal's crush?</p>
    <textarea placeholder={answer} onChange={(e)=>{setAnswer(e.target.value)}} disabled={state==='true'} className={state==='true'?' opacity-50 pl-1 border border-black border-solid ml-3 mt-4':' pl-1 border border-black border-solid ml-3 mt-4'} ></textarea>
    <br/>
<button onClick={HandleDisablingAndCheckAnswering} disabled={state==='true' ||answer==='Answer'} className={state==='true' ||answer==='Answer'?' opacity-50 border border-black ml-3 mt-2 bg-black text-white w-16':' border border-black ml-3 mt-2 bg-black text-white w-16 rounded-md'}>Submit</button>
<a href=''><button className=" border border-blue-500 bg-blue-500 text-white ml-9 rounded">Reload</button></a>
    <br/>
    <br/>
    <b className={result==='Correct Answer'?' text-green-500 ml-3':' text-red-600 ml-3'}>{result}</b>
    </>
    )
}
