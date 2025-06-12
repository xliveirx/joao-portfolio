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
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "I.T Assistant",
    company_name: "Vésper Cargas Expressas",
    icon: vesper,
    iconBg: "#FFFFFF",
    date: "October 2024 - Now",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
      <div>
        <h3 className='text-blue text-[24px] font-extrabold'>{experience.title}</h3>
        <p
          className='text-gray text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
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