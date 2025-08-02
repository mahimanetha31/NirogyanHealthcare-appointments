import { useNavigate } from 'react-router-dom'

interface DoctorCardProps {
  name: string;
  specialization: string;
  image: string;
  availability: string;
}

export default function DoctorCard({
  name,
  specialization,
  image,
  availability,
}: DoctorCardProps) {
  const navigate = useNavigate();

  const handleBookClick = () => {
    navigate('/book-appointment', {
      state: {
        doctorName: name,
        specialization,
      },
    });
  };

  return (
    <div className="cursor-pointer border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img src={image} alt={name} className="w-24 h-24 object-cover rounded-full mx-auto" />
      <h2 className="text-lg font-semibold text-center mt-2">{name}</h2>
      <p className="text-center text-gray-600">{specialization}</p>
      <p className="text-center mt-1 text-sm text-green-600">{availability}</p>
      <div className="text-center mt-4">
        <button
          onClick={handleBookClick}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
}
