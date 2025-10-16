import TaskForm from "./Components/TaskForm"
import TaskList from "./Components/TaskList"
import ProgressTracker from "./Components/ProgressTracker"

export default function App() {
  return (
    <div>
      <h1>CheisIt</h1>
      <p>Chase What Is Needed.</p>
      <TaskForm />
      <TaskList />
      <ProgressTracker />
      <button>Clear All</button>
    </div>
  )
}