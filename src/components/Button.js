import { useEffect, useState } from "react"

const Button = ({counter,updateCounterData}) =>{

  const [count, setCount] = useState(counter)
  const maxCount = process.env.REACT_APP_MAX_VALUE == undefined ? 1000 : process.env.REACT_APP_MAX_VALUE;

  useEffect(()=>{
    updateCounterData(count)
  },[count])

  function handleChange(event) {
    event.preventDefault()
    if(isNaN(parseInt(event.target.value))){
      setCount("");
    }else if(parseInt(event.target.value) == 0){
      setCount(1)
    }else{
      setCount(parseInt(event.target.value) >= maxCount ? maxCount : parseInt(event.target.value))
    }
  }

  function increment(){
    setCount(count == maxCount ? maxCount : count+1)
  }

  function decrement(){
    setCount(count == 1 ? 1 : count-1)
  }

  return(
    <div className='btnGroup'>
      <button className='btn btn-decrement' onClick={decrement}>-</button>
      <input className='btn input-count' value={count} onChange={handleChange}/>
      <button className='btn btn-increment' onClick={increment}>+</button>
    </div>
  )
}

export default Button