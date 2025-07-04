import React from "react";
import haux from "@/public/haux.png";
import vesper from "@/public/vesper.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { textVariant } from "./ui/motion";
import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const experiences = [
  {
    title: "I.T Support",
    company_name: "Haux Medical",
    icon: haux,
    iconBg: "#6d57a2",
    date: "May 2024 - October 2024",
    points: [
      "Provided direct support and customer service to clients via multiple communication channels.",
      "Contributed to internal IT management by organizing processes and improving workflow documentation.",
      "Handled maintenance and updates for the company's WordPress website.",
      "Assisted in organizing internal technology resources and support documentation.",
    ],
  },
  {
    title: "I.T Assistant",
    company_name: "Vésper Cargas Expressas",
    icon: vesper,
    iconBg: "#FFFFFF",
    date: "October 2024 - Now",
    points: [
      "Work in the IT infrastructure team, maintaining company devices and ensuring network reliability.",
      "Troubleshoot and resolve technical issues across hardware, software, and network layers.",
      "Responsible for the management and upkeep of all IT equipment in the company.",
      "Contribute to continuous improvement of internal IT operations and system organization.",
    ],
  },
]

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "transparent",
        color: "#fff",
        border: "1px solid #5810ff",
        borderRadius: "12px",
        boxShadow: "none",
        padding: "20px" 
      }}
      contentArrowStyle={{ borderRight: "7px solid #5810ff" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <Image
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div className="bg-[#5810ff]/20 -m-5 mb-4 p-5 rounded-t-md border-b border-accent">
        <h3 className="text-white text-[24px] font-extrabold">
          {experience.title}
        </h3>
        <p className="text-white text-[16px] font-semibold m-0">
          {experience.company_name}
        </p>
      </div>

      <ul className='list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white text-[14px] tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>

  );
};

const Experience = () => {
  return (
    <div id="experience" className="pt-20">
      <motion.div variants={textVariant()}>
        <h2 className="text-center">
          Work Experience<span className="text-accent">.</span>
        </h2>
      </motion.div>

      <div className='mt-20 pb-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;