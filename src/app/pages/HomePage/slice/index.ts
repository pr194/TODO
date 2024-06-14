import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { todosSaga } from './saga';
import { Todo, TodosState } from './types';

export const initialState: TodosState = {
  isLoading: false,
  todos: null,
};

const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
    getTodos(state) {
      state.isLoading = true;
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
