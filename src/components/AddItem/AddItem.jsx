import React, { useState } from "react";

import "./AddItem.css";

export function AddItem({ onAdd }) {
  const [text, setText] = useState("");

  const handleChange = (value) => {
    setText(value);
  };

  const handleAdd = () => {
    onAdd(text);
    setText("");
  };

  return (
    <div className="add-item__container">
      <form className="add-item__item">
        <input
          type="text"
          className="add-item__input"
          value={text}
          onChange={(event) => handleChange(event.target.value)}
        />
        <button
          type="button"
          variant="primary"
          className="add-item__button"
          onClick={handleAdd}
        >
          <button type="button" class="btn btn-primary">
            <i class="bi bi-plus-lg"></i>
          </button>
        </button>
      </form>
    </div>
  );
}
