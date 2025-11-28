export default function StudentPage() {
  // JSON object inside the page
  const student = {
    name: "Aarav Kumar",
    roll: "22CSE045",
    department: "Computer Science & Engineering",
    image: "/profile.jpg", // Place an image in /public folder
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-sm text-center">
        
        {/* Profile Image */}
        <img
          src={student.image}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md"
        />

        {/* Student Details */}
        <h1 className="text-xl font-semibold mb-2">{student.name}</h1>
        <p className="text-gray-700"><strong>Roll No:</strong> {student.roll}</p>
        <p className="text-gray-700"><strong>Department:</strong> {student.department}</p>
      </div>
    </div>
  );
}
