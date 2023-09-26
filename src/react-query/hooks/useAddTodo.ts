import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_TODO_LIST } from "../constants";
import todoService, { Todo } from "../services/todoService";

interface AddTodoContext {
  previousTodoList: Todo[];
}

const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient();

  return useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: todoService.post,
    onMutate: (newTodo: Todo) => {
      const previousTodoList =
        queryClient.getQueryData<Todo[]>(CACHE_KEY_TODO_LIST) || [];

      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODO_LIST, (todoList = []) => [
        newTodo,
        ...todoList,
      ]);

      onAdd();

      return { previousTodoList };
    },
    onSuccess: (savedTodo, newTodo) => {
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODO_LIST, (todoList) =>
        todoList?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
    },
    onError: (error, newTodo, context) => {
      if (!context) return;

      queryClient.setQueryData<Todo[]>(
        CACHE_KEY_TODO_LIST,
        context.previousTodoList
      );
    },
  });
};

export default useAddTodo;
