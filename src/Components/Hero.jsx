
import Student from '/student.png'
import Pattern from '/pattern.png'

function Hero() {
  return (
    <div className="flex justify-center items-center w-full p-2 md:p-4 lg:p-6">
      <div className="w-full max-w-8xl m-2 md:m-4 lg:m-6 rounded-lg shadow-2xl" style={{backgroundImage: `linear-gradient(135deg, rgba(255, 193, 7, 0.8), rgba(255, 193, 7, 0.8)), url(${Pattern})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', boxShadow: '0 30px 60px rgba(0,0,0,0.35)'}}>
        <div className='flex items-center justify-between gap-8 px-4 md:px-8 lg:px-12 py-4 md:py-5 lg:py-6'>
          <div className='flex-1 p-7'>
              <h2 className='text-2xl md:text-4xl lg:text-6xl font-extrabold mb-2 md:mb-3'> <span className='text-red-500'>Ekiti State</span> MSME ICT Skill Acquisition Hub:</h2>
              <p className='text-base md:text-lg mb-3 text-black-700'>
              Empowering the Future of Innovators
              </p>
              <h3 className='text-lg md:text-xl font-semibold'>Attendance WebApp</h3>
          </div>
          <div className='flex-1 flex justify-center'>
            <img src={Student} alt="student" className='w-full h-auto max-w-xs md:max-w-sm lg:max-w-md object-contain' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
