import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import ProgressTracker from "./Components/ProgressTracker";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem
    ("tasks", JSON.stringify(tasks))
  });

  const addTask = (task) => {
    setTasks([...tasks,task]);
  }

  return(
    <div>
      <h1>CheisIt</h1>
      <p>Chase what is needed!</p>
      <TaskForm addTask = {addTask}/>
      <TaskList />
      <ProgressTracker />
      <button>ClearAll</button>
    </div>
  )
}
export default App;