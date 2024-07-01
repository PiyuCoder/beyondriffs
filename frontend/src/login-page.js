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

        <div
          className="rounded-3xl shadow-xl w-full max-w-xl h-auto p-10 backdrop-filter backdrop-blur-lg"
          style={{ backgroundColor: 'rgb(45 42 57 / 34%)' }}
        >   
          <div className="items-center justify-center p-8 bg-transparent">
          <h2 className="text-4xl text-white font-semibold font-Montserrat text-center mb-6 ">Welcome Back</h2>
          <form>
          <div className="mb-4">
            <label className="block text-white font-semibold font-Montserrat text-sm  mb-2" htmlFor="phone">
            Phone number
            </label>
      
            <div className="flex">
            <span className="inline-flex font-regular items-center px-4 rounded-l-md border border-r-0 border-white bg-white text-black-10000 text-sm  "><img src={IndiaFlag} alt="Your Image" className="h-6 w-6" />
              +91
              
            </span>
            
            {/* <span className=" border-r bg-white border-black h-6 my-2 "></span> */}
            <input
              type="number"
              id="phone"
              className="flex-2 appearance-none  rounded-r-md w-full py-3 px-4 leading-tight focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-transparent"
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
        </div>
    );
}
// Add this line at the end of LoginPage.js
export default Login;