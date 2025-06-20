import Home from './Home'

const Signup = () => {
  return (
    <div className="bg-[#670D2F] w-full h-screen flex justify-center items-center">
    <div className="bg-[#A53860] w-1/2 h-1/2 flex justify-center items-center">
    <div className="text-white w-full h-full flex flex-col justify-center items-center gap-2">  
      <h1 className="text-3xl font-bold text-[#FFE5EC] mr-4">Welcome Back</h1>
      <h6 className="text-[#FFE5EC] text-sm mr-4">Sign in to your account to continue</h6>
      <div className='flex flex-col w-full ml-14'>
      <div className="w-full space-y-2">
          <label className="block text-[#FFE5EC] font-medium ">Email</label>
          <input 
            type="text" 
            placeholder="Enter your email" 
            className="border border-[#FFE5EC] rounded-md w-3/4 px-4 py-2  bg-[#A53860] text-white placeholder-gray-300 focus:outline-none focus:border-[#FFE5EC]"
          />
        </div>

        <div className="w-full space-y-2">
          <label className="block text-[#FFE5EC] font-medium ">Password</label>
          <input 
            type="password" 
            placeholder="Enter your Password" 
            className="border border-[#FFE5EC] rounded-md w-3/4 px-4  py-2  bg-[#A53860] text-white placeholder-gray-300 focus:outline-none focus:border-[#FFE5EC]"
          />
        </div>
    </div>
      <button className="bg-[#EF88AD] text-white w-1/2 rounded-md px-2 py-1 mr-10 mt-3 hover:bg-[#732255] cursor-pointer">Sign in</button>
      <h6 className='mr-8'>Don't have an account? <a href="">Sign up</a></h6>
    </div>
    <div className="bg-white w-full h-full">
      <img src="/Startimg.jpeg" alt="" className='w-full h-full'/>
    </div>
    </div>
  </div>
  
  )
}

export default Signup