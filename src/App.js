import { useEffect, useState } from 'react';
import './App.css';
import { getCounter } from './network/api/counter';

function App() {

  const {counter, setCounter} = useState(1)
  const {loading, setLoading} = useState(false)

  useEffect(() => {
    getCounterData()
  }, [])

  const getCounterData = async () => {
    try {
        //setLoading(true)
        const res = await getCounter()
        console.log('res', res)
        if(res != null){
          setCounter(res.tushar)
        }
    } catch (err) {
        console.log('error', err)
    } finally {
        //setLoading(false)
    }
}

  return (
    <div className="btnGroup">
      <button className="btn btn-decrement">-</button>
      <input className="btn input-count" value="10"/>
      <button className="btn btn-increment">+</button>
    </div>
  );
}

export default App;
