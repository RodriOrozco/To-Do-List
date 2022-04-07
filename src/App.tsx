import React, { useState, useRef } from "react";
import {
  H1,
  H2,
  Conteiner,
  Card,
  Search,
  Form,
  Tasks,
  Buttons,
  Papelera,
  Hacer,
} from "./App.styles";

type FormElement = React.FormEvent<HTMLFormElement>;
interface ITask {
  name: string;
  done: boolean;
}

function App(): JSX.Element {
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([]);
  const taskInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormElement) => {
    if (newTask.length) {
      e.preventDefault();
      addTask(newTask);
      setNewTask("");
      taskInput.current?.focus();
    } else {
      e.preventDefault();
      alert("Debes agregar una tarea!");
      setNewTask("");
      taskInput.current?.focus();
    }
  };

  const addTask = (name: string): void => {
    const newTasks: ITask[] = [...tasks, { name, done: false }];
    setTasks(newTasks);
  };

  const toggleDoneTask = (i: number): void => {
    const newTasks: ITask[] = [...tasks];
    newTasks[i].done = !newTasks[i].done;
    setTasks(newTasks);
  };

  const removeTask = (i: number): void => {
    const newTasks: ITask[] = [...tasks];
    newTasks.splice(i, 1);
    setTasks(newTasks);
  };

  return (
    <Conteiner>
      <Card>
        <H1>To Do List</H1>
        <Search>
          <Form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder=" Agregar tarea..."
              onChange={(e) => setNewTask(e.target.value)}
              value={newTask}
              autoFocus
              ref={taskInput}
            />
            <button>Insertar</button>
          </Form>
        </Search>
        {tasks?.map((task: ITask, i: number) => (
          <Tasks key={i}>
            <H2
              className="H2"
              style={{ textDecoration: task.done ? "line-through" : "" }}
            >
              {task.name}
            </H2>
            <Buttons>
              <Hacer
                onClick={() => toggleDoneTask(i)}
                style={{
                  backgroundColor: task.done
                    ? "green"
                    : "rgba(157, 28, 255, 0.968)",
                }}
              >
                {task.done ? "✓" : "✗"}
              </Hacer>
              <Papelera onClick={() => removeTask(i)}>🗑</Papelera>
            </Buttons>
          </Tasks>
        ))}
      </Card>
    </Conteiner>
  );
}

export default App;
