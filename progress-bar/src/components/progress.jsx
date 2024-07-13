const ProgressBar = ({value=0}) => {
  return (
    <div className="progress">
      <span style={{color: value > 49 ? 'white' : 'black'}}>{value.toFixed()}%</span>
      <div className="bar" style={{width: `${value}%`}}></div>
    </div>
  );
}
 
export default ProgressBar;