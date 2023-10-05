import { useState } from "react"


function App() {
  
  const [color,setcolor] = useState("olive");


  return (
  
     <div className="w-full h-screen duration-200 " style={{backgroundColor : color}} >
      <div className="fixed flex flex-wrap justify-center
      bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl
        px-3 py-2 ">
          <button onClick={() => setcolor("red")} className="outline-none px-4 rounded-xl" style={{backgroundColor :"Red"}} >Red</button>
          <button onClick={() => setcolor("blue")}  className="outline-none px-4 rounded-xl" style={{backgroundColor :"blue"}} >Blue</button>
          <button onClick={() => setcolor("black")}  className="outline-none px-4 rounded-xl text-white " style={{backgroundColor :"black"}} >Black</button>
          <button onClick={() => setcolor("white")}  className="outline-none px-4 rounded-xl" style={{backgroundColor :"white"}} >White</button>
          <button onClick={() => setcolor("green")}  className="outline-none px-4 rounded-xl" style={{backgroundColor :"green"}} >Green</button>
          <button onClick={() => setcolor("pink")}  className="outline-none px-4 rounded-xl" style={{backgroundColor :"pink"}} >Pink</button>
          <button onClick={() => setcolor("yellow")}  className="outline-none px-4 rounded-xl" style={{backgroundColor :"yellow"}} >Yellow</button>
          <button onClick={() => setcolor("brown")}  className="outline-none px-4 rounded-xl" style={{backgroundColor :"brown"}} >Brown</button>
        </div>
      </div>
     </div>
    
  )
}

export default App
