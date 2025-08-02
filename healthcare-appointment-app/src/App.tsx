// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import AppointmentForm from './components/AppointmentForm'
import ConfirmationMessage from './components/ConfirmationMessage'

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/book-appointment" element={<AppointmentForm />} />
        <Route path="/confirmation" element={<ConfirmationMessage />} />
      </Routes>
    </Router>
  )
}
