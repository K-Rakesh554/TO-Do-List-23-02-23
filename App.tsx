import * as React from 'react';
import { useState, ChangeEvent } from 'react';
import './style.css';
import { Itask } from './interface';
import TodoList from './components/todolist';
export default function App() {
  let [task, setTask] = useState<string>('');
  let [deadline, setdeadline] = useState<number>(0);
  let [todolist, setToDoList] = useState<Itask[]>([]);

  const displaydate = new Date();
  // handler to set data
  const handledatadisplay = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'task') setTask(event.target.value);
    else setdeadline(Number(event.target.value));
  };
  //handler to push data
  const handledatapush = (): void => {
    const newtask = { taskname: task, daystocomplete: deadline };
    setToDoList([...todolist, newtask]);
    console.log(todolist);
    setTask('');
    setdeadline(0);
  };

  // handler to delete data
  const handledelete = (tasknametodelete: string): void => {
    setToDoList(
      todolist.filter((task) => {
        return task.taskname !== tasknametodelete;
      })
    );
  };

  return (
    <div>
      <div className="navbar">
        <h1> TO-DO LIST APP</h1>
        <h3>Date:{displaydate.toLocaleDateString()}</h3>
      </div>
      <div className="inputarea">
        <label>SET GOAL:</label>
        <input
          type="text"
          value={task}
          name="task"
          placeholder="input task...."
          onChange={handledatadisplay}
        />
        <label> BALL-PARK YOUR GOAL:</label>
        <input
          type="number"
          value={deadline}
          name="deadline"
          placeholder="deadline in days"
          onChange={handledatadisplay}
        />
        <button onClick={handledatapush} id="addtaskbutton">
          add task
        </button>
      </div>

      <div className="outputarea">
        <table id="task">
          <thead id="tablehead">
            <tr>
              <th>task</th>
              <th>days to complete</th>
              <th> edit or delete</th>
            </tr>
          </thead>
          {todolist.map((task: Itask, key = number) => {
            return (
              <TodoList task={task} key={key} tasktodelete={handledelete} />
            );
          })}
        </table>
      </div>
    </div>
  );
}
