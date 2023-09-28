import { create } from "zustand";
import { Task } from "./TasksProvider";

interface TasksStore {
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (id: number) => void;
}

const useTasksStore = create<TasksStore>((set) => ({
  tasks: [],
  addTask: (task) => set((store) => ({ tasks: [task, ...store.tasks] })),
  deleteTask: (id) =>
    set((store) => ({ tasks: store.tasks.filter((t) => t.id !== id) })),
}));

export default useTasksStore;
