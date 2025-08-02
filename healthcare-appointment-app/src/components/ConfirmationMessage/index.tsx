import { useLocation, useNavigate } from 'react-router-dom'

export default function ConfirmationMessage() {
  const location = useLocation()
  const navigate = useNavigate()

  const { patientName, email, appointmentDateTime } = location.state || {}

  if (!patientName || !email || !appointmentDateTime) {
    return (
      <div className="text-center mt-10">
        <p className="text-red-500">Invalid booking data. Please try again.</p>
        <button
          onClick={() => navigate('/')}
          className="mt-4 text-blue-600 underline"
        >
          Go Back
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white shadow-md rounded-lg text-center">
      <h2 className="text-2xl font-bold text-green-600 mb-4">Appointment Confirmed!</h2>
      <p className="mb-2">Thank you, <span className="font-semibold">{patientName}</span>.</p>
      <p className="mb-2">We have sent a confirmation to <span className="font-semibold">{email}</span>.</p>
      <p className="mb-4">Your appointment is scheduled for:</p>
      <p className="text-blue-700 font-medium">{new Date(appointmentDateTime).toLocaleString()}</p>
      <button
        onClick={() => navigate('/')}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Back to Home
      </button>
    </div>
  )
}
