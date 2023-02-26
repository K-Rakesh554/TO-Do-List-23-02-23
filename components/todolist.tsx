import React, { FC, useState, ChangeEvent, useRef } from 'react';
import { Itask } from '../interface';
import './style2.css';
interface Props {
  task: Itask;
  tasktodelete(taskID: number): void;
  tasktoedit(taskID: number): void;
}
export default function TodoList({ task, tasktodelete, tasktoedit }: Props) {
  return (
    <tr>
      <td>
        {' '}
        <input type="checkbox" />
      </td>
      <td>{task.taskname}</td>
      <td>{task.daystocomplete} days left</td>

      <td>
        <button
          onClick={() => {
            tasktoedit(task.ID);
          }}
        >
          edit task
        </button>

        <button
          onClick={() => {
            tasktodelete(task.ID);
          }}
        >
          delete task
        </button>
      </td>
    </tr>
  );
}
