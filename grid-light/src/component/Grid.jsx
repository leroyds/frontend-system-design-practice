const Grid = ({row=[], rowIndex, onClickHandler=()=>{}}) => {

  function getGridClassName(grid){
    if(grid === 1){
      return `border`
    }
    if(grid === 2){
      return `border clicked`
    }
  }

  return (
    <>
      {
        row.map((grid, colIndex) => (
          <div
            key={`grid-${rowIndex}-${colIndex}`}
            className={`grid ${getGridClassName(grid)}`}
            onClick={() => onClickHandler(rowIndex, colIndex, grid)}
          >
          </div>
        ))
      }
    </>
  );
}
 
export default Grid;