import React, { FC, useState, ChangeEvent } from 'react';
import { Itask } from '../interface';
import './style2.css';
interface Props {
  task: Itask;
  tasktodelete(taskname: string): void;
}
export default function TodoList({ task, tasktodelete }: Props) {
  return (
    <div>
     
      <tbody id="todo">
        <tr>
          <input type="checkbox" />

          <td>{task.taskname}</td>
          <td>{task.daystocomplete} days left</td>
          <td>{task.id}</td>
          <td>
            <button>edit task</button>
          </td>
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
