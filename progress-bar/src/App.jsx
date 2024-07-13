import { useState } from 'react'
import './App.css'
import ProgressBar from './components/progress'
import useStartProgressHook from './hooks/use-start-progress-hook';
import { useEffect } from 'react';

function App() {
  const [loadingPercent, setLoadingPercent] = useState(0);
  useStartProgressHook(loadingPercent, 40, setLoadingPercent);

  useEffect(() => {
    dummyApiCall()
  }, [])


  function dummyApiCall() {
    setTimeout(() => {
      useStartProgressHook(loadingPercent, 100, setLoadingPercent);
    }, 10000)
  }

  return (
    <div className='app'>
      <div>Progress Bar</div>
      <ProgressBar value={loadingPercent}/>
    </div>
  )
}

export default App
