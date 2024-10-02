import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

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
      setLoading(true);
      // console.log("Email sent - ", data);
      saveInformation(data);
      setLoading(false);
    } catch (error) {
      console.error("ERROR MESSAGE - ", error.message);
      setLoading(false);
    }
  };

  const saveInformation = async (data) => {
    const response = await fetch("https://formspree.io/f/mgvwgpkv", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    // console.log("Response received:: ",response);
    
    if (response.ok) {
      toast.success("Email sent successfully!");
    } else {
      toast.error("Something went wrong while submitting your data. Please try again later.");
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        name: "",
        message: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <div className="mx-auto">
      
        <p className="font-roboto text-xl">
          I'll be happy to connect with you.
        </p>
        <p className="font-thin">Let's get in touch!</p>

        <form
          className="flex flex-col gap-2"
          onSubmit={handleSubmit(submitContactForm)}
        >
          {/* name  */}

          <div className="my-border">
            <label htmlFor="name">
              Your Name<sup className="text-pink-100">*</sup>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="p-2 rounded-md"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className="text-pink-200">
                Please enter your name before submitting
              </p>
            )}
          </div>

          {/* email address  */}
          <div className="my-border">
            <label htmlFor="email">
              Email Address <sup className="text-pink-100">*</sup>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="p-2 rounded-md"
              placeholder="Enter your email address"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-pink-200">
                Please enter your email address before submitting
              </p>
            )}
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
              className="p-2 rounded-md"
              placeholder="Enter your message here"
              {...register("message", { required: false })}
            />
          </div>

          {/* submit button  */}
          <button
            disabled={loading}
            type="submit"
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
  );
};

export default ContactMe;
