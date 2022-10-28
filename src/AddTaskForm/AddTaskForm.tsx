import React from 'react';

interface inputCreate {
  onChange:React.ChangeEventHandler;
  onClick:React.MouseEventHandler;
}

const AddTaskForm:React.FC<inputCreate> = (props) => {
  return (
    <form className="form">
      <input type="text" placeholder="Add new task" id="input" onChange={props.onChange}/>
      <button type="button" className="addBtn" onClick={props.onClick}></button>
    </form>
  );
};

export default AddTaskForm;