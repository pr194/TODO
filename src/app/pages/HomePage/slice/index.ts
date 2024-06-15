import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { todosSaga } from './saga';
import { Todo, TodoState } from './types';
import { stat } from 'fs';

export const initialState: TodoState = {
  isLoading: false,
  todos: [],
};

const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<Todo>) {},
    getTodos(state) {
      state.isLoading = true;
    },
    addTodo(state, action: PayloadAction<Todo>) {
      state.todos.push(action.payload);
      console.log('sded');
    },

    editTodo(state, action: PayloadAction<Todo>) {
      const index = state.todos.findIndex(
        todo => todo.id === action.payload.id,
      );
      if (index !== -1) {
        state.todos[index] = action.payload;
      }
      console.log(state.todos[index]);
    },

    deleteTodo(state, action: PayloadAction<number>) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },

    getTodosSuccess(state, action: PayloadAction<Todo[]>) {
      state.isLoading = false;
      state.todos = action.payload;
    },
  },
});

export const { actions: todosActions } = slice;

export const useTodosSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: todosSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useTodosSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
