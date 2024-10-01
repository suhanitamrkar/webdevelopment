import React, { useState } from 'react'

const Banner = () => {
    // const [count,setCount] = useState(0)
    // const [text,setText] = useState('Hii')
    // function handleChange(e){
    //     setText(e.target.value)
    const [like,setLike] = useState(true)
    function handleChange(e){
        setLike(e.target.checked)
    }
  return (
    <div>
        <label>
            <input
            type='checkbox'
            checked={like}
            onChange={handleChange} />
            I like this
        </label>
        <p>You {like ? 'like' : 'did not like'} </p>
        {/* <input value={text} onChange={handleChange}/>
        <p>You types: {text} </p>
        <button onClick={()=>setText('hello')}> Reset</button>
        <h1>Count is{count} </h1>
        <button onClick={()=>{setCount(count+1)}}>Update count  </button> */}
    </div>
  )
}

export default Banner