import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import ProgressTracker from "./Components/ProgressTracker";

function App() {
  return(
    <div>
      <h1>CheisIt</h1>
      <p>Chase what is needed!</p>
      <TaskForm />
      <TaskList />
      <ProgressTracker />
      <button>ClearAll</button>
    </div>
  )
}
export default App;