import "./App.css";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTaskHandler = () => {
    // make a new array and put the new task into it
    // and take all the previous tasks in the array into one big array
    // in short, added a new task and at the end of it appended all the previous tasks
    setTasks([task, ...tasks]);

    console.log(tasks);
  };

  return (
    <div>
      <h2 style={{ color: "white" }}>TODO LIST APP</h2>
      <input
        type="text"
        style={{ outline: "none" }}
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTaskHandler}>Add Task</button>

      {/* loop through faketasks, for every fake tasks, show us each task  */}

      {tasks.map((task) => (
        <h2>{task}</h2>
      ))}
    </div>
  );
};

export default App;
