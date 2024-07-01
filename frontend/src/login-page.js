// @ts-ignore
import googleIcon from './Pics/google_icon.png'; // Adjust the path as necessary
import bgImage from './Pics/bg.png';
import IndiaFlag from './Pics/flag.png';

const Login = () => {
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
          
          <span className="inline-flex font-regular items-center px-3 rounded-l-md border border-r-0 border-gray-100 bg-gray-50 text-gray-500 text-sm"><img src={IndiaFlag} alt="Your Image" className="h-6 w-6" />
            +91
          </span>
          <input
            type="text"
            id="phone"
            className="flex-1 appearance-none border border-gray-300 rounded-r-md w-full py-2 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Enter phone number"
          />
          </div>
        </div>
        <div className="flex items-center justify-between mb-1 py-5">
          <button
          type="button"
          className="w-full text-white  font-Montserrat py-3 px-4  rounded-lg focus:outline-none focus:shadow-outline gradient-custom inner-shadow text-m"
          >
          Send code
          </button>
        </div>
        <div className="flex items-center justify-center mb-6">
          <img src={googleIcon} alt="Google icon" className="h-8 w-8 " />
        </div>
        <div className="flex items-center justify-center">
        <p style={{ color: 'rgb(179, 175, 179)' }} className="mr-2">Don't have an account? </p>
          <a href="#" className="text-white font-small font-Montserrat text-sm ">Register</a>
        </div>
        </form>
      </div>
      </div>
    );
}
// Add this line at the end of LoginPage.js
export default Login;