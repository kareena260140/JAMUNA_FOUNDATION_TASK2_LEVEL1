import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Resources from './pages/Resources'
import ResourceDetail from './pages/ResourceDetail'
import Login from './pages/Login'
import Register from './pages/Register'
import OrganizerDashboard from './pages/OrganizerDashboard'
import UserDashboard from './pages/UserDashboard'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-sky-700 text-white p-4">
        <nav className="container mx-auto flex gap-4 items-center">
          <Link to="/" className="font-bold">Community Board</Link>
          <Link to="/resources" className="ml-4">Resources</Link>
          <Link to="/organizer">Organizer</Link>
          <Link to="/dashboard">My Applications</Link>
          <div className="ml-auto">
            <Link to="/login" className="px-3 py-1 bg-white text-sky-700 rounded">Login</Link>
          </div>
        </nav>
      </header>
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/resources" element={<Resources/>} />
          <Route path="/resources/:id" element={<ResourceDetail/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/organizer" element={<OrganizerDashboard/>} />
          <Route path="/dashboard" element={<UserDashboard/>} />
        </Routes>
      </main>
    </div>
  )
}
