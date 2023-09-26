import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODO_LIST } from "../constants";
import todoService, { Todo } from "../services/todoService";

const useTodoList = () => {
  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODO_LIST,
    queryFn: todoService.getAll,
    staleTime: 10 * 1000, // 10s
  });
};
export default useTodoList;
