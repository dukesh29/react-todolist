import React, {MouseEventHandler, useState} from 'react';

interface TaskInfo {
  message:string;
  key:string
  onDelete:React.MouseEventHandler;
}

const Task:React.FC<TaskInfo> = (props) => {
  return (
    <div className="task-div">
        <p>{props.message}</p>
        <button className="deleteBtn" onClick={props.onDelete}></button>
    </div>
  );
};

export default Task;