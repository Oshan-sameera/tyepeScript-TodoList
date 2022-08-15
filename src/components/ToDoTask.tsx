import React from 'react'
import { ITask } from '../interface'

interface Props{
    //task?: ITask; // we could as an option 
      task: ITask;
      complteTask(taskNameToDelete: string ): void;
}

const ToDoTask = ({task, complteTask}: Props) => {
  return (
    <div className='task'>
        <div className="content">
            <span>
                {task.taskName}

            </span>
            <span>
                    {task.deadLine}
            </span>
        </div>
        <button onClick={()=>{
            complteTask(task.taskName);
        }}>X</button>
    </div>
  )
}

export default ToDoTask