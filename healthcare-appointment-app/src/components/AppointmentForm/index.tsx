import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AppointmentForm() {
  const [patientName, setPatientName] = useState('')
  const [email, setEmail] = useState('')
  const [appointmentDateTime, setAppointmentDateTime] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (patientName && email && appointmentDateTime) {
      // You could send this data to a backend or context here
      navigate('/confirmation', {
        state: { patientName, email, appointmentDateTime },
      })
    }
  }

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Book Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Patient Name</label>
          <input
            type="text"
            value={patientName}
            onChange={e => setPatientName(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Date & Time</label>
          <input
            type="datetime-local"
            value={appointmentDateTime}
            onChange={e => setAppointmentDateTime(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Confirm Appointment
        </button>
      </form>
    </div>
  )
}
