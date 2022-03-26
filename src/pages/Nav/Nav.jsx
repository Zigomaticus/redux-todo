import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export function Nav({ activeKey, items }) {
  return (
    <nav className="nav" activeKey={activeKey}>
      {items.map((item) => (
        <div className="nav__item" key={item.href}>
          <Link to={item.href}>{item.title}</Link>
        </div>
      ))}
    </nav>
  );
}
