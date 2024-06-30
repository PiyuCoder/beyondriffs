import React, { useState } from 'react';
import bgImage from '../assets/bg-2.png';
import OTPInput from 'react-otp-input';

function VerifyOtp() {
  const [otp, setOtp] = useState('');
  const phNumber = '1234567890';
  const handleChange = (otpValue) => {
    // Ensure only numeric characters are entered
    if (/^[0-9]*$/.test(otpValue)) {
      setOtp(otpValue);
    }
  };

  console.log('otp:', otp);

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      {/* Image with color overlay and blur effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-customPurple opacity-60"></div>
      </div>
      <div className="relative bg-black bg-opacity-50 rounded-[40px] h-[500px] w-[700px] text-center p-20 flex items-center justify-center backdrop-filter backdrop-blur-sm"></div>
      <div className="absolute">
        <h2 className="font-semibold text-3xl text-white font mb-4 text-center">
          Enter OTP
        </h2>
        <div className="flex flex-col items-start justify-start text-gray-400 gap-4">
          <p className="text-start">
            We sent a verification code to your registered Mobile number
          </p>
          <p>{phNumber.slice(0, -3).replace(/./g, '*') + phNumber.slice(-3)}</p>

          <p>Type your 6 digit security code</p>
        </div>
        <div className="w-full flex justify-center my-6">
          <OTPInput
            value={otp}
            onChange={handleChange}
            numInputs={6}
            autoFocus
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
            containerStyle={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              maxWidth: '400px',
            }}
            inputStyle={{
              width: '50px',
              height: '50px',
              fontSize: '20px',
              borderRadius: '10px',
              border: '2px solid #564949',
              textAlign: 'center',
              margin: '0 5px',
              outline: 'none',
              padding: '0 4px',
            }}
          />
        </div>

        <button className="w-full py-3 bg-gradient-to-btn rounded-xl mb-4 text-white font-semibold mt-4">
          Login
        </button>

        <div className="flex items-center justify-center text-gray-400">
          <p>Didn't get code?</p>
          <button className="text-gray-100 pl-1 font-medium">Resend</button>
          {/* <ResendOTP onResendClick={() => console.log("Resend clicked")}/> */}
        </div>
      </div>
    </div>
  );
}

export default VerifyOtp;
