/* --- STATE --- */
export interface TodosState {
  isLoading: boolean;
  todos: Todo[] | null;
}

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
