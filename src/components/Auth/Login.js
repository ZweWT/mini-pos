const Login = () => {
  return (
    <div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form className='bg-white'>
          <h1 class="text-gray-900 font-bold text-2xl mb-1">Log in</h1>
          <p className="text-sm font-normal text-gray-500 mb-7">Welcome back! Please enter your details.</p>
          <label className='block'>
            <span className="block text-sm font-medium text-slate-700">Email</span>
            <input type="email"></input>
          </label>

          <label className='block'>
            <span className="block text-sm font-medium text-slate-700">Password</span>
            <input type="password"></input>
          </label>
          <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Sign in</button>
        </form>
    </div>
  )
}

export default Login