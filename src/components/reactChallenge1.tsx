'use client';

import { MouseEventHandler, useState } from 'react';

interface Circle {
  x: number;
  y: number;
}



export const Circle = ({x,y}: Circle) => {
  return (
    <div style={{ top: `${y}px`, left: `${x}px` }} className={`absolute rounded-2xl bg-blue-600 w-2 h-2 `}></div>
  )
}


const ReactChallenge1 = () => {
  const [circles, setCircles] = useState<Circle[]>([]);
  const [redoCircles, setRedoCircles] = useState<Circle[]>([]);
  const handleOnClick: MouseEventHandler<HTMLDivElement> = (e) => {

    const circle = {
      x: e.clientX,
      y: e.clientY,
    }
    setCircles([...circles, circle])
  }

  const handleUndo = ()=>{
    if (circles.length > 0){
      const circleToUndo = circles[circles.length-1]
      const newCircles = circles.slice(0, circles.length-1)
      setCircles(newCircles)
      setRedoCircles([...redoCircles,circleToUndo])
    }
  }

  const handleRedo= ()=>{
    if (redoCircles.length > 0) {
      const circle = redoCircles[redoCircles.length-1]
      setRedoCircles(redoCircles.slice(0, redoCircles.length-1))
      const newCircles = [...circles, circle]
      setCircles(newCircles)
    }
  }

  return <div className='w-full h-screen bg-slate-900 text-white flex flex-col'>
    <h1>ReactChallenge1</h1>
    <section>
      <button disabled={circles.length===0} className='bg-gray-600 rounded px-2 py-1 mr-2 cursor disabled:bg-gray-800 border-gray-600 ' onClick={handleUndo}>undo</button>
      <button disabled={redoCircles.length===0} className='bg-gray-600 border-gray-600 rounded px-2 py-1 cursor disabled:bg-gray-800' onClick={handleRedo}>redo</button>
    </section>
    
    <div className='w-full flex-grow bg-slate-900 ' onClick={handleOnClick}>
      {/* the key is not good, should use some unique value */}
      {circles.map(({x,y}) =><Circle key={`${x},${y}`} x={x} y={y}/>)}
    </div>
    </div>;
};

export default ReactChallenge1;
