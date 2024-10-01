import React, { useState } from 'react'

const Banner = () => {
    const [count,setCount] = useState(0)
  return (
    <div>
        <h1>Count is{count} </h1>
        <button onClick={()=>{setCount(count+1)}}>Update count  </button>
    </div>
  )
}

export default Banner