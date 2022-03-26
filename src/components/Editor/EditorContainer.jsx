// Libraries
import React from "react";
import { useDispatch, useSelector } from "react-redux";
// Editor
import { Editor } from "./Editor";
// Todo-actions
import {
  updateTodoText,
  updateTodoDone,
  deleteTodo,
} from "../../store/todo-actions";

export function EditorContainer() {
  const items = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleTextChange = (item, text) => {
    dispatch(updateTodoText(item.id, text));
  };

  const handleToggle = (item, done) => {
    dispatch(updateTodoDone(item.id, done));
  };

  const handleRemove = (item) => {
    dispatch(deleteTodo(item.id));
  };

  return (
    <Editor
      items={items}
      onTextChange={handleTextChange}
      onToggle={handleToggle}
      onRemove={handleRemove}
    />
  );
}
