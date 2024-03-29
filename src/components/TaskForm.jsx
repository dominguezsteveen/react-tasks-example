import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask(title, description);

    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl text-white font-bold mb-3">Crea tu tarea</h1>
        <input
          type="text"
          className="bg-slate-300 p-3 w-full mb-2 rounded-sm"
          placeholder="Escribe tu tarea"
          onInput={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2 rounded-sm"
          placeholder="Description"
          name="description"
          id="description"
          cols="30"
          rows="2"
          onInput={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button
          type="submit"
          className="bg-indigo-500 px-3 py-1 text-white rounded-md"
        >
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
