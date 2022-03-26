import React from "react";

import { AddItemContainer } from "../AddItem";

import "./Editor.css";

export function Editor({ items, onTextChange, onToggle, onRemove }) {
  const handleChange = (item, value) => {
    onTextChange(item, value);
  };

  const handleToggle = (item, value) => {
    onToggle(item, value);
  };

  const handleRemove = (item) => {
    onRemove(item);
  };

  return (
    <>
      <form className="editor__container">
        {items.map((item) => (
          <div key={item.id} className="editor__item">
            <input
              type="checkbox"
              className="editor__checkbox"
              checked={item.done}
              onChange={(event) => handleToggle(item, event.target.checked)}
            />
            <input
              type="text"
              className="editor__input"
              value={item.text}
              onChange={(event) => handleChange(item, event.target.value)}
            />
            <button
              type="button"
              variant="danger"
              className="editor__button"
              onClick={() => handleRemove(item)}
            >
              <button type="button" class="btn btn-danger">
                <i class="bi bi-trash"></i>
              </button>
            </button>
          </div>
        ))}
        <AddItemContainer />
      </form>
    </>
  );
}
