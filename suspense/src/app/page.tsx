'use client'
import { useEffect, useState } from 'react';
import {Suspense} from 'react'

function App(){
  
const [state,setState]=useState([{}])

useEffect(()=>{
  async function getApi(){
  const api=await fetch('http://universities.hipolabs.com/search?country=Pakistan')
  const json=await api.json()
  console.log(json)  
  setState(json);
  }
  
  getApi()
},[]) 

return (
  <div>
    <ul>
      <b>
      {state.length === 1?(<h2>Loading....</h2>):null}
        {state.map((temp:any, ind) => {
        return (
        <li key={ind}>{temp.name}</li>
        )
        

      })}
      </b>

    </ul>
  </div>
);
}


export default App;