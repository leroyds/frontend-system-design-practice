import { useState } from "react";
import useCommentTree from "../hooks/use-comment-tree";
import "./styles.css"

const NestedComments = ({
  data, 
  onSubmit = () => {},
  onEdit = () => {},
  onDelete = () => {}
}) => {
  const [comment, setComment] = useState("");
  const {comments: commentsData} = useCommentTree(data)
  return (
    <div>
      <textarea
        value={comment}
        rows={3} 
        cols={50} 
        placeholder="Add a new comment..."
      />
    </div>
  );
}
 
export default NestedComments;