import { useState } from "react";
import useToDoContext from "./hooks/useToDoConext";
import { Plus, Rocket } from "./utils/icons.util";
import Task from "./components/Task";

const App = () => {
  const { list, completedTasks, addTask } = useToDoContext();

  const [input, setInput] = useState("");

  const handleChange = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input) {
      addTask({ text: input });
    }
    setInput("");
  };

  return (
    <div className="min-h-screen flex justify-center bg-secondary-background">
      <div className="w-full h-[12.5rem] absolute top-0 left-0 bg-secondary-dark-border -z-0" />

      <div className="mt-[4.5rem] px-4 pb-4 w-full max-w-[46rem] mx-auto z-10">
        {/* logo */}
        <div className="flex justify-center items-center gap-3">
          <Rocket />
          <h1 className="text-[40px] font-black text-tertiary">
            to<span className="text-quaternary-background">do</span>
          </h1>
        </div>

        {/* new task */}
        <form
          name="new-task"
          className="mt-[3.3rem] mb-[4rem] flex max-sm:flex-col gap-2"
          onSubmit={handleSubmit}
        >
          {/* input */}
          <input
            id="task-input"
            name="task-input"
            className="rounded-lg p-4 placeholder:text-secondary-muted text-secondary bg-secondary-div-background border border-secondary-dark-border w-full"
            placeholder='Write your note and press "Enter" ...'
            value={input}
            onChange={handleChange}
          />
          {/* add button */}
          <button
            className="p-4 rounded-lg bg-tertiary-background text-sm font-bold text-secondary flex justify-center items-center gap-2"
            type="submit"
          >
            Add
            <Plus />
          </button>
        </form>

        {/* tasks */}
        <div className="flex flex-col gap-6">
          {/* header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <p className="text-sm font-bold text-tertiary">Tasks</p>
              <div className="rounded-full py-0.5 px-2 text-xs font-bold bg-secondary-border text-secondary-text">
                {list.length}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <p className="text-sm font-bold text-quaternary">Done</p>
              <div className="rounded-full py-0.5 px-2 text-xs font-bold bg-secondary-border text-secondary-text">
                {completedTasks} of {list.length}
              </div>
            </div>
          </div>

          {/* tasks elements */}
          <div className="flex flex-col gap-3 max-h-[26rem] overflow-y-auto custom-scrollbar">
            {list.map((task) => (
              <Task key={task.id} {...task} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
