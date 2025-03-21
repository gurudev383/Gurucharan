import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaUser, FaEnvelope, FaPhone, FaCalendar } from "react-icons/fa";
import Reg from "../../../public/MsgDesk/10368828.jpg"; // Left-side image
import BgImage from "../../assets/bgforProfile.jpg";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dateofbirth: "",
  });

  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // For error messages

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      dateofbirth: formData.dateofbirth,
      message: "User has registered successfully.",
    };

    try {
      const response = await emailjs.send(
        "service_qzycwdd",  // Your Service ID
        "template_y1o4vq9", // Your Template ID
        templateParams,
        "f_yGhzLbkQqxrId8o" // Your Public Key
      );
      

      console.log("✅ Email sent successfully!", response);
      setMessage("Registration successful! We will contact you soon.");
      setErrorMessage(""); // Clear error message if success

      // Reset Form
      setFormData({ name: "", email: "", phone: "", dateofbirth: "" });

    } catch (error) {
      console.error("❌ Error sending email:", error);

      // Show detailed error message
      setErrorMessage("Failed to register. Please check your network and try again.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-6"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="bg-white bg-opacity-90 shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row max-w-4xl w-full">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img src={Reg} alt="Registration" className="w-full h-[40vh] md:h-full object-cover" />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800">Register Now</h2>
          <p className="text-center text-gray-500 mb-6">Join our school today</p>

          {/* Success Message */}
          {message && (
            <p className="text-center text-green-600 mb-4">{message}</p>
          )}

          {/* Error Message */}
          {errorMessage && (
            <p className="text-center text-red-600 mb-4">{errorMessage}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div className="flex items-center border border-black rounded-lg p-3 bg-white">
              <FaUser className="text-blue-800 mr-3" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full outline-none bg-transparent text-black placeholder-gray-500"
                placeholder="Full Name"
                required
              />
            </div>

            {/* Email */}
            <div className="flex items-center border border-black rounded-lg p-3 bg-white">
              <FaEnvelope className="text-blue-800 mr-3" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full outline-none bg-transparent text-black placeholder-gray-500"
                placeholder="Email"
                required
              />
            </div>

            {/* Phone */}
            <div className="flex items-center border border-black rounded-lg p-3 bg-white">
              <FaPhone className="text-blue-800 mr-3" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full outline-none bg-transparent text-black placeholder-gray-500"
                placeholder="Phone Number"
                required
              />
            </div>

            {/* Date of Birth */}
            <div className="flex items-center border border-black rounded-lg p-3 bg-white">
              <FaCalendar className="text-blue-800 mr-3" />
              <input
                type="text"
                name="dateofbirth"
                value={formData.dateofbirth}
                onChange={handleChange}
                placeholder="Date of Birth"
                className="w-full outline-none bg-transparent text-black placeholder-gray-500"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
