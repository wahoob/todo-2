import { useContext } from "react";
import { ToDoContext } from "@/context/toDoContext";

export default function useToDoContext() {
  return useContext(ToDoContext);
}
