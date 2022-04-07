import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button';
import Label from './components/Label';
import Loader from './components/Loader';
import { getCounter, updateCounter } from './network/api/counter';

function App() {

  const [counter, setCounter] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getCounterData()
  }, [])

  const getCounterData = async () => {
    try {
        const res = await getCounter()
        if(res != null){
          setCounter(res.tushar != null ? res.tushar : 1)
        }
    } catch (err) {
        console.log('error', err)
    }
  }

  const updateCounterData = async (count) => {
    try {
      setLoading(true)
      const res = await updateCounter(count)
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
      <Loader isLoading={loading}/>
      <Button counter={counter} updateCounterData={updateCounterData}/>
      <Label count={counter}/>
    </>
  );
}

export default App;
