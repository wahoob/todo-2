import useToDoContext from "@/hooks/useToDoConext";
import { Delete } from "@/utils/icons.util";

const Task = ({ id, text, completed }) => {
  const { removeTask, updateTask } = useToDoContext();

  const handleUpdate = () => {
    updateTask({ id });
  };

  const handleDelete = () => {
    removeTask({ id });
  };

  return (
    <div
      className={`bg-secondary-div-background rounded-lg border ${
        completed ? "border-transparent" : "border-secondary-border"
      } shadow-div p-4 flex items-start gap-3`}
    >
      {/* check button */}
      <label
        htmlFor={`completed-${id}`}
        className="relative cursor-pointer pt-0.5"
      >
        <input
          type="checkbox"
          name={`confirm-${id}`}
          id={`completed-${id}`}
          className={`peer appearance-none border-2 rounded-full size-[17.45px] cursor-pointer ${
            completed
              ? "bg-quaternary-background border-quaternary-background"
              : "bg-transparent border-tertiary"
          }`}
          value={completed}
          onClick={handleUpdate}
        />
        <div
          className={`absolute h-[4.69px] w-[7.31px] border-b border-l border-secondary -rotate-45 top-[8px] left-[4.8px] ${
            completed ? "visible" : "invisible"
          } z-10`}
        />
      </label>

      {/* text */}
      <div className="flex-1">
        <p
          className={`text-secondary text-sm ${
            completed && "line-through text-secondary-muted"
          }`}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>

      {/* delete */}
      <div className="shrink-0 cursor-pointer pt-0.5" onClick={handleDelete}>
        <Delete />
      </div>
    </div>
  );
};

export default Task;
