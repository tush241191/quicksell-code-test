import { useEffect, useState } from "react"

const Button = ({counter,updateCounterData}) =>{

  const [count, setCount] = useState(counter)

  useEffect(()=>{
    updateCounterData(count)
  },[count])

  function handleChange(event) {
    setCount(event.target.value)
  }

  function increment(){
    setCount(count+1)
  }

  function decrement(){
    setCount(count == 1 ? 1 : count-1)
  }

  return(
    <div className='btnGroup'>
      <button className='btn btn-decrement' onClick={decrement}>-</button>
      <input className='btn input-count' value={counter} onChange={handleChange}/>
      <button className='btn btn-increment' onClick={increment}>+</button>
    </div>
  )
}

export default Button