import { useState } from "react";

const NewTask = ({ onAddTask }) => {
  const [enteredTask, setenteredTask] = useState("");

  function handleEnteredTask(event) {
    setenteredTask(event.target.value);
  }

  function handleAddTask() {
    if (enteredTask.trim() === "") {
      return;
    }
    setenteredTask("");
    onAddTask(enteredTask);
  }

  return (
    <div className="flex items-center gap-4">
      <input
        value={enteredTask}
        onChange={handleEnteredTask}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        onClick={handleAddTask}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
