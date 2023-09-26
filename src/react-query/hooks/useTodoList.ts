import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODO_LIST } from "../constants";
import APIClient from "../services/apiClient";

const apiClient = new APIClient<Todo>("/todos");

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodoList = () => {
  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODO_LIST,
    queryFn: apiClient.getAll,
    staleTime: 10 * 1000, // 10s
  });
};
export default useTodoList;
