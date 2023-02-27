import * as React from 'react';
import { useState, ChangeEvent, useRef } from 'react';
import './style.css';
import { Itask } from './interface';
import TodoList from './components/todolist';

export default function App() {
  let [task, setTask] = useState<string>('');
  let [deadline, setdeadline] = useState<number>(0);
  let [todolist, setToDoList] = useState<Itask[]>([]);

  const Identity = useRef(null);

  const displaydate = new Date();

  const checked = false;

  // handler to set data
  const handledatadisplay = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'task') setTask(event.target.value);
    else setdeadline(Number(event.target.value));
  };

  //handler to push data
  const handledatapush = (): void => {
    if (task == '' && deadline == 0) {
      alert('please enter data');
    } else {
      todolist.map((datafromarray) => {
        if (datafromarray.ID === Identity.current) {
          setToDoList([...todolist]);
        }
      });
      const genID = Date.now();
      const newtask = {
        taskname: task,
        daystocomplete: deadline,
        ID: genID,
        isComplete: checked,
      };

      setToDoList([...todolist, newtask]);
      console.log(todolist);
      setTask('');
      setdeadline(0);

      Identity.current = null;
    }
  };

  // handler to delete data
  const handledelete = (tasknametodelete: number): void => {
    setToDoList(
      todolist.filter((task) => {
        return task.ID !== tasknametodelete;
      })
    );
  };

  // handle edit data
  const handleEdit = (taskidtoedit: number): void => {
    Identity.current = taskidtoedit;

    todolist.map((clickedForEdit) => {
      if (Identity.current === clickedForEdit.ID) {
        setTask(clickedForEdit.taskname);
        setdeadline(clickedForEdit.daystocomplete);

        if (Identity.current) {
        }
      } else {
        [...todolist];
      }
    });
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
          required
        />
        <label> BALL-PARK YOUR GOAL:</label>
        <input
          type="number"
          value={deadline}
          name="deadline"
          placeholder="deadline in days"
          onChange={handledatadisplay}
          required
        />

        <button onClick={handledatapush} id="addtaskbutton">
          {' '}
          {Identity.current ? 'save task' : 'add the task'}
        </button>
      </div>

      <div className="outputarea">
        <table id="task ">
          <thead id="tablehead">
            <tr>
              <th>task</th>
              <th>days to complete</th>
              <th> edit or delete</th>
            </tr>
          </thead>
          <tbody id="todo">
            {todolist.map((task: Itask, id) => {
              return (
                <TodoList
                  task={task}
                  key={id}
                  tasktodelete={handledelete}
                  tasktoedit={handleEdit}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
