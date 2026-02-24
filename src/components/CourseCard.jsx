export default function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
      <div className="h-48 bg-gray-200 flex items-center justify-center rounded-t-xl">
  <span className="text-gray-500 text-sm">
    Course Image
  </span>
</div>
      <div className="bg-white rounded-xl shadow
  hover:shadow-xl hover:scale-[1.02]
  transition-all duration-300">
        <h2 className="font-semibold text-lg">{course.title}</h2>
        <p className="text-sm text-gray-500">{course.category}</p>
        <div className="flex justify-between items-center mt-3">
          <span className="text-indigo-600 font-bold">{course.price}</span>
          <span className="text-yellow-500">⭐ {course.rating}</span>
        </div>
        <button className="w-full mt-4 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
          Enroll Now
        </button>
      </div>
    </div>
  );
}