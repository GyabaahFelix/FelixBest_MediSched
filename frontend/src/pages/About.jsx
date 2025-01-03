import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
          Welcome to XivhaTech World, your reliable companion in handling your healthcare requirements with ease and effectiveness. At XivhaTech World, we recognize the difficulties people encounter in booking medical appointments and organizing their health documentation.
          </p>
          <p>
          XivhaTech World is dedicated to innovation in healthcare technology. We constantly work to refine our platform, incorporating cutting-edge advancements to elevate user experience and provide exceptional service. Whether you're scheduling your initial appointment or overseeing continuous care, XivhaTech World is here to assist you at every stage.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
          Our vision at XivhaTech World is to deliver a streamlined healthcare journey for every individual. We aspire to close the gap between patients and medical professionals, ensuring you can access the care you require, precisely when you need it.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>{" "}
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>EFFICIENCY:</b>
          <p>Effortless appointment booking designed to accommodate your hectic schedule.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>CONVENIENCE:</b>
          <p>Connect with a network of reliable healthcare experts near you.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>PERSONALIZATION:</b>
          <p>Personalized suggestions and alerts to keep you proactive about your health.</p>
        </div>
      </div>
     </div>
  );
};

export default About;
