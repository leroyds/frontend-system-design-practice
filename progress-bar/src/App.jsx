import { useState } from 'react'
import './App.css'
import ProgressBar from './components/progress'
import useStartProgressHook from './hooks/use-start-progress-hook';
import { useEffect, useRef } from 'react';

function App() {
  const [loadingPercent, setLoadingPercent] = useState(0);

  const intervalId = useRef(null);

  useEffect(()=>{
    startInterval(40);
    dummyApiCall()
    .then(()=>{
      startInterval(100);
    })
  }, [])

  function dummyApiCall() {
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve();
      },1000)
    })
  }

  function startInterval(maxLimit) {
    clearInterval(intervalId.current);
    intervalId.current = setInterval(()=>{
      setLoadingPercent((prevLoadingPercent)=>{
        if(prevLoadingPercent === maxLimit) {
          clearInterval(intervalId.current);
          intervalId.current = null;
          return prevLoadingPercent;
        } else {
          return prevLoadingPercent + 1;
        }
      })
    },100)
  }

  return (
    <div className='app'>
      <div>Progress Bar</div>
      <ProgressBar value={loadingPercent}/>
    </div>
  )
}

export default App
