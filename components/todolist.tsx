import React, { FC } from 'react';
import { Itask } from '../interface';
import './style2.css';
interface Props {
  task: Itask;
  tasktodelete(taskname: string): void;
}
export default function TodoList({ task, tasktodelete }: Props) {
  return (
    <div className="todo">
    
        <tbody>
          <tr>
            <td>{task.taskname}</td>
            <td>{task.daystocomplete} days left</td>
            <td>
              {' '}
              <button
                onClick={() => {
                  tasktodelete(task.taskname);
                }}
              >
                {' '}
                delete task
              </button>
            </td>
          </tr>
        </tbody>
      
    </div>
  );
}
