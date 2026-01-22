"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import Image from "next/image";
import Button from "@mui/material/Button";
import { Reveal } from "../../components/animations/Reveal";

const ContactClient = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#cee0da] to-[#fcfcfc] dark:from-background dark:to-muted text-foreground mx-5 md:mx-10 ml-5 md:ml-14 my-20 rounded-2xl shadow transition-all duration-300">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {/* Left Card */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="col-span-2 p-3 md:p-8 flex flex-col justify-between">
          <div className="flex flex-col gap-28">
            <div className="flex flex-col gap-5">
              <Reveal>
                <Image
                  src="/pointer.svg"
                  width={250}
                  height={250}
                  alt="Image"
                  className="w-16 h-16 rounded-full"
                />
              </Reveal>
              <Reveal delay={0.1}>
                <div>
                  <h3 className="font-semibold text-3xl">Andrew Hughes -</h3>
                  <p className="text-2xl mt-2 text-muted-foreground">
                    Project Coordinator,<br /> can guide your project’s<br /> initial steps.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <h1 className="text-4xl md:text-7xl font-bold leading-tight">
                Every project <br /> <span className="opacity-55">starts with a plan.</span>
              </h1>
            </Reveal>
          </div>

          <div className="flex gap-3 mt-6 text-foreground">
            <a
              href="https://www.facebook.com/rahnimodesigns" target='_blank' rel="noopener noreferrer"
            >
              <FaFacebook
                size={35}
              />
            </a>
            <a
              href="https://www.instagram.com/rahnimodesigns/" target='_blank' rel="noopener noreferrer"
            >
              <FaInstagramSquare
                size={35}
                className="rounded-full"
              />
            </a>
            <a
              href="#" target='_blank' rel="noopener noreferrer"
            >
              <FaLinkedin
                size={35}
              />
            </a>
            <a
              href="#" target='_blank' rel="noopener noreferrer"
            >
              <AiFillTwitterCircle
                size={35}
              />
            </a>
          </div>
        </motion.div>

        {/* Right Card */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="p-8 bg-gray-900 text-gray-300 rounded-l-2xl">
          <h2 className="text-3xl text-gray-400 opacity-40 ">
            What services <br />
          </h2>
          <h1 className="text-3xl mt-1">
            We can support you with?
          </h1>
          <p className="text-xs text-gray-400 my-2 ">I&apos;m interested in</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              "UI/UX Design",
              "Website",
              "Brand Identity",
              "Content Production",
              "Illustration",
              "Other",
            ].map((item) => (
              <button
                key={item}
                className="px-3 py-1 rounded-full border border-gray-600 text-xs text-gray-300 hover:bg-lime-400 hover:text-black transition"
              >
                {item}
              </button>
            ))}
          </div>

          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-transparent border-b border-gray-600 focus:outline-none text-sm py-1 text-white placeholder:text-gray-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border-b border-gray-600 focus:outline-none text-sm py-1 text-white placeholder:text-gray-500"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full bg-transparent border-b border-gray-600 focus:outline-none text-sm py-1 text-white placeholder:text-gray-500"
            />
            <textarea
              rows="3"
              placeholder="Message"
              className="w-full bg-transparent border-b border-gray-600 focus:outline-none text-sm py-1 text-white placeholder:text-gray-500"
            />

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "var(--color-lime-400)",
                  color: "var(--color-black)"
                }}
              >
                Submit
              </Button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactClient;

/**
 *  <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */
/* <motion.div
  initial={{ x: -60, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="space-y-6 px-5"
>
  <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
    Let’s chat.
  </h2>
  <p className="text-lg text-slate-600">
    Tell us about your project.
  </p>
  <p className="text-sm text-slate-500">
    Let’s create something together
  </p>

  <div className="mt-6 inline-block bg-white shadow-md rounded-xl px-6 py-4">
    <p className="text-sm text-slate-500">Mail us at</p>
    <p className="font-semibold text-blue-600">
      contact@tajrids.com
    </p>
  </div>
</motion.div> 

 
{/* <motion.form
  ref={formRef}
  onSubmit={sendEmail}
  initial={{ x: 60, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="bg-blue-600 rounded-2xl shadow-2xl p-8 space-y-4"
>
  <h3 className="text-xl font-semibold text-white mb-4">
    Send us a message
  </h3>

  <input
    type="text"
    placeholder="Full Name*"
    className="w-full px-4 py-3 rounded-md bg-blue-500 text-white placeholder-blue-200 focus:outline-none"
    required
  />
  <input
    type="email"
    placeholder="Email Address*"
    className="w-full px-4 py-3 rounded-md bg-blue-500 text-white placeholder-blue-200 focus:outline-none"
    required
  />
  <input
    type="text"
    placeholder="Subject*"
    className="w-full px-4 py-3 rounded-md bg-blue-500 text-white placeholder-blue-200 focus:outline-none"
    required
  />
  <textarea
    rows="4"
    placeholder="Tell us more about your project"
    className="w-full px-4 py-3 rounded-md bg-blue-500 text-white placeholder-blue-200 focus:outline-none"
    required
  ></textarea>

  <button
    type="submit"
    className="w-full bg-white text-blue-600 font-semibold py-3 rounded-md hover:scale-105 transition-transform"
  >
    Send Message
  </button>
</motion.form> 
// </div>
*/