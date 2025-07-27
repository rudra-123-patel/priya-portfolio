import React from "react";
import priya from "../assets/priya.png";
import priya4 from "../assets/priya4.png";
import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";

export default function Hero() {
  motion;
  return (
    <section className="relative w-full h-screen bg-[#F6F6F2] px-6 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
              linear-gradient(to right, #e2e8f0 1px, transparent 1px),
              linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
            `,
          backgroundSize: "20px 30px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
        }}
      />

      <motion.div
        initial={{
          opacity: 0,
          x: -100,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 1,
        }}
        className="hidden sm:block absolute px-4 py-2 top-5 left-3 text-sm leading-tight z-10 "
      >
        <p className="font-bold text-[#84A59D] uppercase">Priya Singh</p>
        <p>priyasinghu698@gmail.com</p>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          x: 100,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 1,
        }}
        className="hidden sm:block absolute uppercase top-6 right-6 text-[#84A59D] text-xl font-semibold z-10 "
      >
        <p>Human Resource </p>
      </motion.div>

      <div className="flex justify-center items-center h-full relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: 0.5,
          }}
          className="font-[Dancing_Script] text-9xl -rotate-8 absolute top-[15%] sm:top-[15%] left-1/2 transform -translate-x-1/2 text-[#84A59D] sm:text-[210px] font-bold tracking-widest z-20"
        >
          Priya
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="font-script -mt-40 sm:mt-0 text-[110px] sm:text-[250px] font-extrabold tracking-tight text-[#3D3D3D] uppercase leading-none"
        >
          Singh
        </motion.h1>
      </div>
      <motion.code
        initial={{
          opacity: 0,
          y: -10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 1,
        }}
        className=" absolute top-8 left-[2%] sm:left-[38%] transform hover:backdrop-blur-xl bg-white px-1 py-1 rounded text-[12px] sm:text-sm backdrop-blur z-10 text-[#4B5563] hover:bg-[#84A59D] hover:text-white"
      >
        #HumanResource • #EmpathyDriven • #Leadership
      </motion.code>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1 }}
        className="absolute top-[300px] left-1/2 transform translate-y-[60px] -translate-x-1/2 z-20 group"
      >
        <div className="relative h-[50vh] sm:h-[60vh] w-auto">
          <img
            src={priya}
            alt="Priya Singh"
            className="h-full object-cover grayscale transition-opacity duration-300 ease-in-out group-hover:opacity-0"
          />

          <img
            src={priya4}
            alt="Priya Hover"
            className="absolute inset-0 h-full object-cover grayscale transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
          />
        </div>
      </motion.div>

      <a
        href="https://www.linkedin.com/in/priya-singh-7b6228322"
        target="_blank"
        className="absolute bottom-16 left-8 z-20 p-3 bg-white rounded-full border border-[#84A59D] shadow-lg hover:shadow-[#84A59D] "
      >
        <FaLinkedinIn size={24} className="text-[#84A59D]" />
      </a>
    </section>
  );
}
