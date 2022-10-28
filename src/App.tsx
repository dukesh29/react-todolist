import React, {useState} from 'react';
import './App.css';
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import Task from "./Task/Task";

function App() {

  const [tasks, setTasks] = useState([
    {message: 'Clean the house', id: 'h1'},
    {message: 'Wash the hands', id: 'h2'},
    {message: 'Make some food', id: 'h3'},
  ]);

  const [message, setMessage] = useState('');

  const taskElems = tasks.map((task, index) =>
  <Task key={task.id}
        message={task.message}
        onDelete={() => deletePerson(index)}/>
);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMessage = event.target.value;
    setMessage(newMessage);
  };

  const handleClick = () => {
    const id = ('h' + Math.floor(Math.random() * 1000000)).toString();
    const peopleCopy = [...tasks, {message, id}];
    setTasks(peopleCopy);
    console.log(peopleCopy);
  };

  const deletePerson = (index: number) => {
    const peopleCopy = [...tasks];
    peopleCopy.splice(index, 1);
    setTasks(peopleCopy);
    console.log(peopleCopy);
  };

  return (
    <div className="App">
      <AddTaskForm onChange={handleChange} onClick={handleClick}/>
      <div className="task-block">
        {taskElems}
      </div>
    </div>
  );
}

export default App;
