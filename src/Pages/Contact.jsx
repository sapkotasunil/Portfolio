import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Thanks for contact us! We'll contact back as soon as possible");
    setFormData({ name: "", email: "", message: "" });
  };
  return (
    <div className=" pt-8">
      <h1 className="text-5xl font-semibold">Contact</h1>
      <h1 className="text-lg text-gray-500">Reach Out Me</h1>
      <div className="flex justify-center mt-10   min-h-calc[100vh] px-4">
        <div className=" shadow-lg   bg-secondaryColor rounded-lg p-6 w-full max-w-[50%] border border-solid border-white">
          <h2 className="text-2xl  bg-secondaryColor font-bold text-start ">
            Let's get in touch. Leave me your message.
          </h2>
          <p className=" bg-secondaryColor">Do not hesitate to contact me!</p>
          <form
            onSubmit={handleSubmit}
            className="  bg-secondaryColor space-y-4 mt-3"
          >
            <div>
              <label
                htmlFor="name"
                className="block bg-secondaryColor text-sm font-medium"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your full Name"
                required
                className="mt-1  bg-secondaryColor block w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block  bg-secondaryColor text-sm font-medium "
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="mt-1 block w-full  bg-secondaryColor p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block  bg-secondaryColor text-sm font-medium "
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                required
                className="mt-1 block w-full  bg-secondaryColor p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className=" flex mt-40 items-center">
        <h1 className="text-xl">connect with me on social media:</h1>
        <a href="https://www.facebook.com/sunil.sapkota.7161953">
          <div className="flex h-10 w-10">
            <img src="/fb.svg" alt="" />
          </div>
        </a>
        <a href="https://www.instagram.com/sapkota268/">
          <div className="flex h-7 w-10">
            <img src="/insta.webp" alt="" />
          </div>
        </a>
        <a href="https://github.com/sapkotasunil">
          <div className="flex h-7 w-10">
            <img src="/github.svg" alt="" />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/sunil-sapkota-88026a32a/">
          <div className="flex h-10 w-10">
            <img src="/linkdln.svg" alt="" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
