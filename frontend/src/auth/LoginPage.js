import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { FcGoogle } from 'react-icons/fc';
import bgImage from '../assets/bg-1.jpg';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleOnChange = (value) => {
    const ph = '+' + value;
    setPhone(ph);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can send the data to the backend here
    console.log('Phone Number:', phone);
    navigate("/verify-otp")
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="absolute inset-0 bg-customPurple opacity-60"></div>
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="relative bg-black bg-opacity-50 rounded-[40px] shadow-lg w-[700px] h-[500px] backdrop-blur-sm py-24 px-28">
          <h2 className="text-3xl font-semibold text-center mb-4 text-white">
            Welcome Back
          </h2>
          <form onSubmit={handleSubmit} className="w-full">
            <label
              className="block text-white text-sm font-semibold mb-2"
              htmlFor="phone"
            >
              Phone number
            </label>
            <div className="mb-12 relative w-full">
              <PhoneInput
                country={'in'}
                value={phone}
                onChange={handleOnChange}
                placeholder="Enter your phone number"
                inputStyle={{
                  width: '100%',
                  height: '45px',
                  fontSize: '16px',
                  zIndex: 50,
                }}
                buttonStyle={{
                  zIndex: 50,
                }}
                containerStyle={{
                  width: '100%',
                  zIndex: 50,
                  position: 'relative',
                }}
                dropdownStyle={{
                  zIndex: 1000,
                }}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-btn text-white py-3 px-4 rounded-xl hover:bg-purple-700 focus:outline-none focus:bg-purple-700 font-semibold text-sm mb-6"
            >
              Send code
            </button>
          </form>
          <div className="flex items-center justify-center my-1">
            <button>
              <FcGoogle className="text-4xl" />
            </button>
          </div>
          <p className="text-center mt-4 text-gray-400 text-sm">
            Don't have an account?{' '}
            <a href="#" className="text-gray-100 pl-1 font-medium">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
