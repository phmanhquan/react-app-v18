import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodoList = () => {
  const fetchTodoList = () =>
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.data);

  return useQuery<Todo[], Error>({
    queryKey: ["todoList"],
    queryFn: fetchTodoList,
    staleTime: 10 * 1000, // 10s
  });
};
export default useTodoList;
