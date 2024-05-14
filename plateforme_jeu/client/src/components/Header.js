import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/games">Games</Link></li>
          <li><Link to="/tsumego">Tsumego</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
    </div>
  )
}
