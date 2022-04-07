import { useEffect, useState } from 'react';
import './App.css';
import { getCounter } from './network/api/counter';

function App() {

  const [counter, setCounter] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getCounterData()
  }, [])

  const getCounterData = async () => {
    try {
        setLoading(true)
        const res = await getCounter()
        console.log('res', res)
        if(res != null){
          setCounter(res.tushar)
        }
    } catch (err) {
        console.log('error', err)
    } finally {
        setLoading(false)
    }
  }

  function handleChange(event) {
    setCounter(event.target.value)
  }

  function increment(){
    setCounter(counter+1)
  }

  function decrement(){
    setCounter(counter == 1 ? 1 : counter-1)
  }

  return (
    <>
      <div className='btnGroup'>
        <button className='btn btn-decrement' onClick={decrement}>-</button>
        <input className='btn input-count' value={counter} onChange={handleChange}/>
        <button className='btn btn-increment' onClick={increment}>+</button>
      </div>
      <div className='counterValue'>Counter value: {counter}</div>
    </>
  );
}

export default App;
