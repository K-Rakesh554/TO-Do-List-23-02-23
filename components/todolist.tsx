import React, { FC, useState, ChangeEvent, useRef } from 'react';
import { Itask } from '../interface';
import './style2.css';
interface Props {
  task: Itask;
  tasktodelete(taskID: number): void;
  tasktoedit(taskID: number): void;
}

export default function TodoList({ task, tasktodelete, tasktoedit }: Props) {
  const buttonedit = (): void => {
    tasktoedit(task.ID);
  };
  const buttondelete = (): void => {
    tasktodelete(task.ID);
  };

  return (
    <tr>
      <td> {task.taskname}</td>
      <td>{task.daystocomplete} days left</td>

      <td>
        <button onClick={buttonedit}>edit task</button>

        <button onClick={buttondelete}>delete task</button>
      </td>
    </tr>
  );
}
