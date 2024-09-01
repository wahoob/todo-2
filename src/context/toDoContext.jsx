import { v4 as uuidv4 } from "uuid";
import { createContext, useMemo } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import { highlighteLinks } from "@/utils/functions.util";

export const ToDoContext = createContext({});

export const ToDoProvider = ({ children }) => {
  const [list, setList] = useLocalStorage("LIST", []);

  const addTask = ({ text }) => {
    const newTask = {
      id: uuidv4(),
      text: highlighteLinks(text),
      completed: false,
    };

    setList((prev) => {
      return [...prev, newTask];
    });
  };

  const removeTask = ({ id }) => {
    setList((prev) => {
      return prev.filter((t) => t.id !== id);
    });
  };

  const updateTask = ({ id }) => {
    setList((prev) => {
      return prev.map((t) => {
        if (t.id === id) {
          return { ...t, completed: !t.completed };
        }
        return t;
      });
    });
  };

  const completedTasks = useMemo(() => {
    return list.filter((t) => t.completed).length;
  }, [list]);

  return (
    <ToDoContext.Provider
      value={{
        list,
        completedTasks,
        addTask,
        removeTask,
        updateTask,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};
