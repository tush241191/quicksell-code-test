import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button';
import { getCounter, updateCounter } from './network/api/counter';

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

  const updateCounterData = async (count) => {
    console.log("updateCounterData: ",count)
    try {
      setLoading(true)
      const res = await updateCounter(count)
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

  return (
    <>
      <Button counter={counter} updateCounterData={updateCounterData}/>
      <div className='counterValue'>Counter value: {counter}</div>
    </>
  );
}

export default App;
