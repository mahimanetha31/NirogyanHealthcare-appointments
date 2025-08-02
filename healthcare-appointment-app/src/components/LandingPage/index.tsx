import { useNavigate } from 'react-router-dom'
import DoctorCard from '../DoctorCard'

const doctors = [
  {
    id: 1,
    name: 'Dr. Asha Mehta',
    specialization: 'Cardiologist',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    availability: 'Mon - Fri, 10 AM - 4 PM',
  },
  {
    id: 2,
    name: 'Dr. Rajeev Sharma',
    specialization: 'Neurologist',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    availability: 'Tue - Sat, 11 AM - 5 PM',
  },
  {
    id: 3,
    name: 'Dr. Neha Kapoor',
    specialization: 'Pediatrician',
    image: 'https://randomuser.me/api/portraits/women/46.jpg',
    availability: 'Mon - Thu, 9 AM - 1 PM',
  },
  {
    id: 4,
    name: 'Dr. Arjun Verma',
    specialization: 'Dermatologist',
    image: 'https://randomuser.me/api/portraits/men/47.jpg',
    availability: 'Wed - Sun, 12 PM - 6 PM',
  },
  // Add more doctors as needed
]

export default function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Meet Our Doctors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            onClick={() => navigate(`/doctor/${doctor.id}`)} // optional: navigate to doctor's profile
          >
            <DoctorCard
              name={doctor.name}
              specialization={doctor.specialization}
              image={doctor.image}
              availability={doctor.availability}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
