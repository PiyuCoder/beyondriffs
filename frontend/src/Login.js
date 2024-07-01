import googleIcon from './Pics/google_icon.png';
import bgImage from './Pics/bg.png';

export const Login = () => {
  return (
    <div
      className="background-image-container flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-transparent bg-opacity-90 p-8 rounded-lg shadow-custom w-full max-w-md bg-gradient-custom">
        <h2 className="text-4xl text-white font-semibold font-Montserrat text-center mb-6 ">Welcome Back</h2>
        <form>
          <div className="mb-4">
            <label className="block text-white font-semibold font-Montserrat text-sm  mb-2" htmlFor="phone">
              Phone number
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                +91
              </span>
              <input
                type="text"
                id="phone"
                className="flex-1 appearance-none border border-gray-300 rounded-r-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter phone number" />
            </div>
          </div>
          <div className="flex items-center justify-between mb-6">
            <button
              type="button"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold font-Montserrat py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send code
            </button>
          </div>
          <div className="flex items-center justify-center mb-6">
            <img src={googleIcon} alt="Google icon" className="h-6 w-6 mr-2" />
          </div>
          <div className="flex items-center justify-center">
            <a href="#" className="text-blue-500 hover:underline">Don't have an account? Register</a>
          </div>
        </form>
      </div>
    </div>
  );
};
