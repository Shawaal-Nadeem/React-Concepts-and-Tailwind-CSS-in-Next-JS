'use client'
import { useReducer } from "react"


// export default function Home() {

//   function logics(state:any,action:any)
//   {
// if(action.type==='increase')
// {
//   return {
//     counter:state.counter+1,
//   }
// } 
// else if(action.type==='decrease')
// {
//   if(state.counter>0){
//     return{
//       counter:state.counter-1,
//     }
//   }
//   else{
//     return{
//       counter:state.counter,
//     }
//   }
// }
// else if(action.type==='reset'){
//   return{
//     counter:0,
//   }
// }
//   }
//   const [state,dispatch]=useReducer(logics,{counter:0})
//   return (
//     <>
//     <div className=" flex justify-around mt-5">
//    <button onClick={()=>{dispatch({type:'increase'})}} className=" bg-green-600 text-white w-44 h-10 rounded-md">Increment</button>
//    <button onClick={()=>{dispatch({type:'reset'})}} className=" bg-slate-400 text-white w-24">Reset</button>
//    <button onClick={()=>{dispatch({type:'decrease'})}} className=" bg-red-600 text-white w-44 h-10 rounded-md">Decrement</button>
//    </div>
//    <br/>
//    <br/>
//    <h1 className=" text-center font-extrabold text-4xl">{state.counter}</h1>
//    </>
//   )
// }


// Ahsaan Code

const reducer = (state:any, action:any) => {
  if (action.type == 'increment')
      return { age: state.age + 1, height: state.height + 2 }
  else if (action.type == 'decrement') {
      if (state.age > 0)
          return { age: state.age - 1, height: state.height - 2 }
      else return { age: state.age = 0, height: state.height }
  }
  else if (action.type == 'reset')
      return { age: state.age = 0, height: state.height = 0 }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, {age:0,height:0})

  return (
      <div className="main">
          <div className="buttons">
              <button onClick={() => { dispatch({ type: 'increment' }) }}>Increment</button>
              <button onClick={() => { dispatch({ type: 'decrement' }) }}>Decrement</button>
              <button onClick={() => { dispatch({ type: 'reset' }) }}>Reset</button>
          </div>
          <h1>Hello! You are {state.age}</h1>
          <h2>Your Height is {state.height} cm</h2>
      </div>
  )
}
export default Counter