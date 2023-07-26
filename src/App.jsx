import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./index.css";

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <h1>App</h1>
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
