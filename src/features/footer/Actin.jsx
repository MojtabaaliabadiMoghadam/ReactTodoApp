import { useDispatch } from "react-redux";
import { onhandleClearCompleted, onhandleMarkAllCompleted } from "../todos/todosSlice";

const Action = () => {
    const dispatch = useDispatch()
    const handleMarkAllCompleted =()=>{
        dispatch(onhandleMarkAllCompleted())
    }
    const handleClearCompleted =()=>{
        dispatch(onhandleClearCompleted())
    }
  return (
    <>
      <div className="actions">
        <h5>Actions</h5>
        <button className="button" onClick={handleMarkAllCompleted}>Mark All Completed</button>
        <button className="button" onClick={handleClearCompleted}>Clear Completed</button>
      </div>
      ;
    </>
  );
};

export default Action;
