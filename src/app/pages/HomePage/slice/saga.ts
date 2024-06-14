import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { todosActions as actions } from '.';
import axios from 'axios';
import request from '../utils';

// function* doSomething() {}

function* getTodosSaga() {
  try {
    const data = yield call(
      request,
      'https://jsonplaceholder.typicode.com/todos/',
    );

    return yield put(actions.getTodosSuccess(data));
  } catch (e) {
    console.log('error in getting data ', e);
  }
}
export function* todosSaga() {
  yield takeLatest(actions.getTodos.type, getTodosSaga);
}
