import { useRef, useEffect } from "react";

const useStartProgressHook = (initialProgressState, maxLimit=100, setProgressStateLimit) => {

  const intervalId = useRef(null);
  useEffect(()=>{
    intervalId.current = setInterval(()=>{
      setProgressStateLimit((prevLoadingPercent)=>{
        if(prevLoadingPercent === maxLimit) {
          clearInterval(intervalId.current);
          intervalId.current = null;
          return prevLoadingPercent;
        } else {
          return prevLoadingPercent + 1;
        }
      })
    },100)
  }, [])

  return null;
}
 
export default useStartProgressHook;