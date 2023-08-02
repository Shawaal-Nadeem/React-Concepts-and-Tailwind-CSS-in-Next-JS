

export default function Home() {
  const fruits:string[]=['Apple','Bannana','Mango']
  return (
    <>
    <button>Click Me</button>
  <div className="w-full h-screen flex items-center justify-center flex-row bg-yellow-300">
    <div>
     <p className="font-bold">Hello World!</p>
     <ul>
      {fruits.map((key)=>(
      <li></li>)
      )}
     </ul>
      </div>
    
  </div>
</>
  )
}
