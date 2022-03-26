// Libraries
import React from "react";
import { useDispatch } from "react-redux";
// AddItem
import { AddItem } from "./AddItem";
// Store
import { addTodo } from "../../store/todo-actions";

export function AddItemContainer() {
  const dispatch = useDispatch();

  const handleAdd = (text) => {
    dispatch(addTodo(text));
  };

  return <AddItem onAdd={handleAdd} />;
}
