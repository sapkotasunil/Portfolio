import { delay } from "motion";
import { motion } from "motion/react";
import { tr } from "motion/react-m";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
const variants = {
  hidden: { opacity: 0, y: 130 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      staggerChildren: 0.2,
      duration: 0.6,
      when: "beforeChildren",
    },
  },
};

const formlabel = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2 },
  },
};
const contactVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,

    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
      when: "beforeChildren",
    },
  },
};

const socialMediaVarients = {
  hidden: { opacity: 0, y: 80, scale: 0.3 },
  show: {
    transition: { duration: 0.6 },
    opacity: 1,
    scale: 1,
    y: 0,
  },
};

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
    const { name, email, message } = formData;

    if (name && email && message) {
      const res = fetch(
        "https://portfolio-contact-e65f2-default-rtdb.firebaseio.com/ContactRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        }
      );

      if (res) {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        toast.success(
          `Thanks for contact us! We'll contact back as soon as possible 😊`,
          {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          }
        );
      } else {
        alert("please fill the data");
      }
    } else {
      alert("please fill the data");
    }
  };

  return (
    <div className=" pt-8">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-5xl font-semibold"
      >
        Contact
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-lg text-gray-500"
      >
        Reach Out Me
      </motion.h1>
      <div className="flex justify-center mt-10 max-w-[90vw]   min-h-fit lg:px-4">
        <motion.div
          initial="hidden"
          animate="show"
          variants={variants}
          className=" shadow-lg   bg-secondaryColor rounded-lg p-6 w-full md:max-w-[50%] max-w-[95%]  border border-solid border-white"
        >
          <motion.h2
            variants={formlabel}
            className="text-2xl  bg-secondaryColor font-bold text-start "
          >
            Let's get in touch. Leave me your message.
          </motion.h2>
          <motion.p variants={formlabel} className=" bg-secondaryColor">
            Do not hesitate to contact me!
          </motion.p>
          <form
            initial="hidden"
            animate="show"
            variants={variants}
            onSubmit={handleSubmit}
            className="  bg-secondaryColor space-y-4 mt-3"
          >
            <div className="bg-secondaryColor">
              <motion.label
                variants={formlabel}
                htmlFor="name"
                className="block bg-secondaryColor text-sm font-medium"
              >
                Name
              </motion.label>
              <motion.input
                variants={formlabel}
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
            <div className="bg-secondaryColor">
              <motion.label
                variants={formlabel}
                htmlFor="email"
                className="block  bg-secondaryColor text-sm font-medium "
              >
                Email
              </motion.label>
              <motion.input
                variants={formlabel}
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
            <div className="bg-secondaryColor">
              <motion.label
                variants={formlabel}
                htmlFor="message"
                className="block  bg-secondaryColor text-sm font-medium "
              >
                Message
              </motion.label>
              <motion.textarea
                variants={formlabel}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="2"
                required
                className="mt-1 block w-full  bg-secondaryColor p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              ></motion.textarea>
            </div>
            <motion.button
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 3.3, duration: 0.5 }}
              type="submit"
              className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
      <motion.div
        variants={contactVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amout: 0.5 }}
        className=" lg:flex mt-20 lg:mt-40 items-center"
      >
        <motion.h1 variants={socialMediaVarients} className="text-xl">
          connect with me on social media:
        </motion.h1>
        <div className="flex items-center">
          <motion.a
            variants={socialMediaVarients}
            href="https://www.facebook.com/sunil.sapkota.7161953"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-10 w-10">
              <img src="/fb.svg" alt="" />
            </div>
          </motion.a>
          <motion.a
            variants={socialMediaVarients}
            href="https://www.instagram.com/sapkota268/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-7 w-10">
              <img src="/insta.webp" alt="" />
            </div>
          </motion.a>
          <motion.a
            variants={socialMediaVarients}
            href="https://github.com/sapkotasunil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-7 w-10">
              <img src="/github.svg" alt="" />
            </div>
          </motion.a>
          <motion.a
            variants={socialMediaVarients}
            href="https://www.linkedin.com/in/sunil-sapkota-88026a32a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-10 w-10">
              <img src="/linkdln.svg" alt="" />
            </div>
          </motion.a>
        </div>
      </motion.div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Contact;
