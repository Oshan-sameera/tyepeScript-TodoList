import React, {FC, useState, ChangeEvent} from 'react';

import './App.css';
import ToDoTask from './components/ToDoTask';
import { ITask } from './interface';


const App : FC=()=> {

const [task, setTask]= useState<string>("");
const [deadLine, setDeadLine]= useState<number>(0);
const [toDoList, setToDoList]= useState<ITask[]>([]);

const handleChange=(event: ChangeEvent<HTMLInputElement> ): void=>{
  //console.log(event.target.value)
  if(event.target.name==="task"){
    setTask(event.target.value);
  }else{
   setDeadLine(Number(event.target.value));
  }
};

const addTask=(): void=>{

  const newTask= { taskName: task, deadLine:deadLine};

setToDoList([...toDoList, newTask])
setTask("");
setDeadLine(0);
console.log(toDoList)
};


const complteTask=(taskNameToDelete: string): void=>{
setToDoList(toDoList.filter((task)=>{
  return task.taskName !=taskNameToDelete
}))
}

  return (
    <div className="App">
  
  <div className='header'>
    <div className='inputContainer'>
<input type="text" placeholder='Task.....' name="task" value={task} onChange={handleChange}/>
<input type="number" name="deadLine" placeholder='Deadline' value={deadLine} onChange={handleChange}/>
</div>
<button onClick={addTask}>Add Task</button>
  </div>
  <div className='todoList'>
{
  toDoList.map((task : ITask, key:number)=>{

    return<ToDoTask key={key} task={task} complteTask={complteTask}/>
  })
}
  </div>
    </div>
  );
}

export default App;
