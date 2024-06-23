import { call, put, takeEvery, all } from 'redux-saga/effects';
import {
  FETCH_TASKS_REQUEST,
  fetchTasksSuccess,
  fetchTasksFailure,
  ADD_TASK_REQUEST,
  addTaskSuccess,
  addTaskFailure,
  UPDATE_TASK_REQUEST,
  updateTaskSuccess,
  updateTaskFailure,
  REMOVE_TASK_REQUEST,
  removeTaskSuccess,
  removeTaskFailure,
} from '../actions/taskActions';

function* fetchTasks() {
  try {
    const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/todos?_limit=10');
    const data = yield response.json();
    yield put(fetchTasksSuccess(data));
  } catch (error) {
    yield put(fetchTasksFailure(error.message));
  }
}

function* addTask(action) {
  try {
    const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.payload),
    });
    const data = yield response.json();
    yield put(addTaskSuccess(data));
  } catch (error) {
    yield put(addTaskFailure(error.message));
  }
}

function* updateTask(action) {
  try {
    const response = yield call(fetch, `https://jsonplaceholder.typicode.com/todos/${action.payload.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.payload),
    });
    const data = yield response.json();
    yield put(updateTaskSuccess(data));
  } catch (error) {
    yield put(updateTaskFailure(error.message));
  }
}

function* removeTask(action) {
  try {
    yield call(fetch, `https://jsonplaceholder.typicode.com/todos/${action.payload}`, {
      method: 'DELETE',
    });
    yield put(removeTaskSuccess(action.payload));
  } catch (error) {
    yield put(removeTaskFailure(error.message));
  }
}

function* watchFetchTasks() {
  yield takeEvery(FETCH_TASKS_REQUEST, fetchTasks);
}

function* watchAddTask() {
  yield takeEvery(ADD_TASK_REQUEST, addTask);
}

function* watchUpdateTask() {
  yield takeEvery(UPDATE_TASK_REQUEST, updateTask);
}

function* watchRemoveTask() {
  yield takeEvery(REMOVE_TASK_REQUEST, removeTask);
}

export default function* rootSaga() {
  yield all([
    watchFetchTasks(),
    watchAddTask(),
    watchUpdateTask(),
    watchRemoveTask(),
  ]);
}
