
import React from 'react';
import Footer from './Footer';
import contactUsPageBanner from "./assets/contactUsBanner.jpg"; // Ensure this path is correct
import AxiosInstance from './Axios';
import { useForm, Controller } from 'react-hook-form'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const defaultValues = {
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    massage: ''

  }

  
  const { handleSubmit, reset, setValue, control } = useForm();
  const submission = (data) => {
    console.log(data);
    AxiosInstance.post('inquiry/ ', {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      phone_number: data.phone_number,
      message: data.message
    }
    )
      .then((response) => {
        toast.success("Inquiry submitted successfully!", {
          position: "top-right",
        });
        reset(); // Reset the form after successful submission
      })
      .catch((error) => {
        toast.error("An error occurred. Please try again.", {
          position: "top-right",
        });
        console.error("Error:", error);
      });

  }


  return (
    <div>
      {/* Full-width banner image */}
      <div className='w-full'>
        <img className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover" src={contactUsPageBanner} alt="Contact Us Banner" />
      </div>

      {/* Contact Us Section */}
      <div className="flex flex-col md:flex-row gap-8 px-8 py-16">
        {/* Left side - Contact Information */}
        <div className='flex flex-col gap-4 w-full md:w-1/2'>
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">Speak With Us</h1>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl mb-4">
            Need help? Contact our support team via email, phone, or live chat. We're here for you!
          </p>

          {/* Contact Information */}
          <div className="text-gray-600 text-sm sm:text-base">
            <p><strong>Store Address:</strong> 10B, Peradeniya,Kandy.</p>
            <p><strong>Call Us:</strong> 900-123-456789</p>
            <p><strong>Mail Us:</strong> fashionflare@gmail.com</p>
            <p><strong>Website:</strong> fashionflare.lk</p>
          </div>
        </div>

        {/* Right side - Contact Form */}
        <div className='flex flex-col gap-4 w-full md:w-1/2 bg-gray-100 p-8 rounded-lg'>
          <h2 className="font-bold text-2xl mb-4">24/7 Support</h2>
          <p className="text-gray-700 mb-4">Get assistance anytime with our 24/7 support. Reach out via email, phone, or live chat.</p>

          {/* Contact Form */}

          <form className="flex flex-col gap-4" onSubmit={handleSubmit(submission)}>
            <div className="flex gap-4">
              <Controller
                name="first_name"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text" required
                    placeholder="First Name"
                    className="w-1/2 p-2 border rounded-md"
                  />
                )}
              />
              <Controller
                name="last_name"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text" required
                    placeholder="Last Name"
                    className="w-1/2 p-2 border rounded-md"
                  />
                )}
              />      
            </div>

            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="email" required
                  placeholder="Email"
                  className="p-2 border rounded-md"
                />
              )}
            />
            <Controller
              name="phone_number"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="tel" required pattern='[0-9]{10}' title='please enter 10 digit number'
                  placeholder="Phone Number"
                  className="p-2 border rounded-md"
                />
              )}
            />
            <Controller
              name="message" // Corrected name
              control={control}
              render={({ field }) => (
                <textarea
                  required
                  maxLength="2000" // Correct syntax for the HTML attribute
                  title="Please enter word count less than 2000"
                  {...field}
                  placeholder="Message"
                  className="p-2 border rounded-md h-24"
                ></textarea>
              )}
            />

            <button
              type="submit"
              className="w-full p-2 bg-[#5C8374] text-white rounded-md hover:bg-black transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Services Section */}
      <div className="flex justify-around bg-gray-200 py-8">
        <div className="text-center">
          <i className="fas fa-clock text-2xl mb-2"></i>
          <p className="font-semibold">Timely Delivery</p>
        </div>
        <div className="text-center">
          <i className="fas fa-headset text-2xl mb-2"></i>
          <p className="font-semibold">24/7 Support</p>
        </div>
        <div className="text-center">
          <i className="fas fa-shield-alt text-2xl mb-2"></i>
          <p className="font-semibold">Secured Payment</p>
        </div>
        <div className="text-center">
          <i className="fas fa-truck text-2xl mb-2"></i>
          <p className="font-semibold">Free Shipping</p>
        </div>
      </div>

      {/* Footer */}
      {/* <Footer /> */}
      <ToastContainer />
    </div>
  );
};

export default ContactUs;