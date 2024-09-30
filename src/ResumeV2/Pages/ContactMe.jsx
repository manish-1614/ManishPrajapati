import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';

const ContactMe = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitContactForm = async (data) => {
    try {
      setLoading(true)
      console.log("Email sent - ", data);
      // TODO - email sending logic
      // console.log("Email Res - ", res)
      setLoading(false)
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
      setLoading(false)
    }
  }

  useEffect( () => {
    if(isSubmitSuccessful) {
      reset({
        email: "",
        name: "",  
        message: "",
      })
    }
  }, [reset, isSubmitSuccessful])
  
  return (
    <div className="mx-auto">
      <div>
        <p className='font-roboto text-xl'>I'll be happy to connect with you.</p>
        <p className='font-thin'>Let's get in touch!</p>

        <form className='flex flex-col gap-2' onSubmit={handleSubmit(submitContactForm)}>
          {/* name  */}
          
          <div className='my-border'>
            <label htmlFor='name'>Your Name<sup>*</sup></label>
            <input 
              type='text'
              name='name'
              id='name'
              placeholder='Enter your name'
              {...register("name", { required: true })}
            />
            {
              errors.name && (
                <span className='text-red-500'>
                  Please enter your name before submitting
                </span>
              )
            }
          </div>

          {/* email address  */}
          <div className='my-border'>
            <label htmlFor='email'>Email Address <sup>*</sup></label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Enter your email address'
              {...register("email", { required: true })}
            />
            {
              errors.email && (
                <span className='text-red-500'>
                  Please enter your email address before submitting
                </span>
              )
            }
          </div>

          {/* message  */}
          <div className="my-border flex flex-col gap-2">
            <label htmlFor="message" className="lable-style">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="2"
              placeholder="Enter your message here"
              {...register("message", { required: false })}
            />
          </div>

          {/* submit button  */}
          <button
            disabled={loading}
            type='submit'
            className={`rounded-md bg-yellow-50 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
          ${
            !loading &&
            "transition-all duration-200 hover:scale-95 hover:shadow-none"
          }  disabled:bg-richblack-500 sm:text-[16px] `}
          >
              Get in touch
          </button>
      
        </form>
      </div>
    </div>
  )
}

export default ContactMe