import React from "react";
import { Routes, Route } from "react-router-dom";

import { Todos } from "./Todos";
import { Editor } from "./Editor";

export function Router({ children }) {
  return (
    <div>
      <div>{children}</div>
      <div>
        <Routes>
          <Route path="/todos" element={<Todos />} />
          <Route path="/editor" element={<Editor />} />
        </Routes>
      </div>
    </div>
  );
}
