import { v4 as uuid } from "uuid";

export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO_TEXT = "UPDATE_TODO_TEXT";
export const UPDATE_TODO_DONE = "UPDATE_TODO_DONE";
export const DELETE_TODO = "DELETE_TODO";
export const INIT_TODOS = 'INIT_TODOS'

const makeActionCreater = (type, keys, valueProviders = {}) => {
  return (...values) => {
    let payload = {};
    keys.forEach((_, index) => {
      payload[keys[index]] = values[index];
    });
    Object.entries(valueProviders).forEach(([key, providerFn]) => {
      payload[key] = providerFn();
    });
    return {
      type,
      payload,
    };
  };
};

export const addTodo = makeActionCreater(ADD_TODO, ["text"], {
  id: () => uuid(),
  done: () => false,
});

export const updateTodoText = makeActionCreater(UPDATE_TODO_TEXT, [
  "id",
  "text",
]);

export const updateTodoDone = makeActionCreater(UPDATE_TODO_DONE, [
  "id",
  "done",
]);

export const deleteTodo = makeActionCreater(DELETE_TODO, ["id"]);
