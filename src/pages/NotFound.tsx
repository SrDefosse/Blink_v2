import { Link, useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="bg-[#FAF8F3] flex min-h-screen items-center justify-center px-4 py-10 relative">
      {/* Background 404 */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[30rem] font-bold text-gray-200/30 select-none">
          404
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Page not found
        </h1>

        {/* Sub-heading */}
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Lost, this page is. In another system, it may be.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Go back button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 text-gray-900 rounded-md hover:bg-gray-50 transition-colors"
          >
            <FaArrowLeft />
            <span>Go back</span>
          </button>

          {/* Take me home button */}
          <Link
            to="/"
            className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-900 transition-colors"
          >
            Take me home
          </Link>
        </div>
      </div>
    </div>
  )
}


