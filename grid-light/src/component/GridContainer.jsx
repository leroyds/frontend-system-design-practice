import { useState } from "react";
import Grid from "./Grid";

const GridContainer = () => {
  const initialArray = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
  ]
  const [array, setArray] = useState(initialArray);
  const [arrayClicked, setArrayClicked] = useState([]) 

  function getCopyArray(prevArray){
    return [
      ...prevArray.map(row => row)
    ]
  }

  function unclickGrid(poppedArray) {
    const [rowIndex, colIndex] = poppedArray;
    setArray((prevArray)=>{
      const copyArr = getCopyArray(prevArray);
      copyArr[rowIndex][colIndex] = 1;
      return copyArr;
    })
  }

  function setArrayTracker(rowIndex, colIndex){
    setArrayClicked((prevArrayClicked)=>{
      const copyArr = getCopyArray(prevArrayClicked);
      copyArr.push([rowIndex, colIndex]);
      if(copyArr.length >= 8){
        setInterval(()=>{
          const poppedArray = copyArr.pop();
          unclickGrid(poppedArray);
        }, 300)
      }
      return copyArr;
    })
  }

  function onClickHandler(rowIndex, colIndex, grid) {
    if(grid===1){
      setArray(prevArray=>{
        const copy = getCopyArray(prevArray)
        copy[rowIndex][colIndex] = 2
        return copy;
      })
      setArrayTracker(rowIndex, colIndex);
    }
  }
  return (
    <div className="grid-container">
      {
        array.map((row, index) => (
          <div key={`row-${index}`} className="row">
            <Grid
              row={row}
              rowIndex={index}
              onClickHandler={onClickHandler}
            />
          </div>
        ))
      }
    </div>
  );
}
 
export default GridContainer;