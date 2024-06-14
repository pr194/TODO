import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.todos || initialState;

export const selectTodos = createSelector([selectSlice], state => state);
