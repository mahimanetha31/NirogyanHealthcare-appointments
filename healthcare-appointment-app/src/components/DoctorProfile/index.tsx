import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function DoctorProfile() {
  const { id } = useParams()
  const doctorId = Number(id)
  const navigate = useNavigate()

  const doctors = [
    { id: 1, name: 'Dr. Smith', specialization: 'Cardiologist', availability: 'Mon-Fri, 9AM to 5PM' },
    { id: 2, name: 'Dr. Jane', specialization: 'Dermatologist', availability: 'Tue-Thu, 10AM to 4PM' },
    { id: 3, name: 'Dr. Alex Kim', specialization: 'Neurologist', availability: 'Available Today' },
    { id: 4, name: 'Dr. Emily Chen', specialization: 'Pediatrician', availability: 'On Leave' },
    { id: 5, name: 'Dr. Raj Mehta', specialization: 'Orthopedic Surgeon', availability: 'Available Today' },
    { id: 6, name: 'Dr. Linda Zhao', specialization: 'Psychiatrist', availability: 'Fully Booked' },
  ]

  const doctor = doctors.find(d => d.id === doctorId)

  if (!doctor) return <p className="p-4 text-red-500">Doctor not found</p>

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{doctor.name}</h2>
      <p className="mb-2">Specialization: {doctor.specialization}</p>
      <p className="mb-4">Availability: {doctor.availability}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => navigate(`/doctor/${doctor.id}/book`)}>Book Appointment</button>
    </div>
  )
}
