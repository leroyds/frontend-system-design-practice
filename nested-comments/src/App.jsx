import './App.css';
import NestedComments from './components/nested-comments';
import nestedCommentsData from './data/comment.json';

function App() {

  return (
    <div>
      Nested Comments
      <NestedComments data={nestedCommentsData}/>
    </div>
  )
}

export default App
