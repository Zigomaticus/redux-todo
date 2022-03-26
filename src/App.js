import React from 'react'

import { Router } from './pages/Router'
import { Nav } from './pages/Nav/Nav'
import './App.css'

const navItems = [
  {
    href: '/todos',
    title: 'Todos',
  },
  {
    href: '/editor',
    title: 'Editor',
  },
]

function App() {
  return (
    <div className="app__container">
      <Router>
        <Nav activeKey="/todos" items={navItems} />
      </Router>
    </div>
  )
}

export default App
