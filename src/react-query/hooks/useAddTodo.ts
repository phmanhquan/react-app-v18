import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "./useTodoList";
import { useRef } from "react";
import axios from "axios";
import { CACHE_KEY_TODO_LIST } from "../constants";

interface AddTodoContext {
  previousTodoList: Todo[];
}

const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient();

  return useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
        .then((res) => res.data),
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
    onSuccess: (savedTodo: Todo, newTodo: Todo) => {
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODO_LIST, (todoList) =>
        todoList?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
    },
    onError: (error: Error, newTodo: Todo, context: AddTodoContext) => {
      if (!context) return;

      queryClient.setQueryData<Todo[]>(
        CACHE_KEY_TODO_LIST,
        context.previousTodoList
      );
    },
  });
};

export default useAddTodo;
