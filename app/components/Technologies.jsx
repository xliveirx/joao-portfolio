"use client";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaJava,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiSpringboot,
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { AiOutlineDotNet } from "react-icons/ai";
import { useState } from "react";

const skills = [
  { name: "HTML", icon: FaHtml5, color: "#E34F26", category: 'frontend' },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6", category: 'frontend' },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", category: 'frontend' },
  { name: "React", icon: FaReact, color: "#61DBFB", category: 'frontend' },
  { name: "Node.js", icon: FaNodeJs, color: "#339933", category: 'backend' },
  { name: "Java", icon: FaJava, color: "#007396", category: 'backend' },
  { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F", category: 'backend' },
  { name: "C#", icon: AiOutlineDotNet, color: "blue", category: 'backend' },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", category: 'tools' },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF", category: 'fullstack' },
  { name: "Github", icon: FaGithub, color: "#5810ff", category: 'tools' },
  { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "#42e0f5", category: 'frontend' },


];

const categories = ['all', 'frontend', 'backend', 'tools'];

const Technologies = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills =
    activeCategory === 'all'
      ? skills
      : skills.filter((skill) => skill.category === activeCategory)


  return (
    <section id="technologies" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-accent dark:text-white">
          Technologies<span className="text-accent">.</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {categories.map((category, key) => (
            <button onClick={() => setActiveCategory(category)} className={`hover:bg-accent border border-accent px-5 py-2 rounded-full transition-colors duration-300 capitalize hover:cursor-pointer ${activeCategory === category ? "bg-accent" : ""}`} key={key}>
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 w-fit mx-auto">          {filteredSkills.map(({ name, icon: Icon, color }, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center aspect-square w-40 p-4 bg-gradient-to-br rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            style={{ border: `1px solid ${color}` }}
          >
            <Icon
              className="w-12 h-12 mb-3 transition-transform duration-300 group-hover:rotate-3"
              style={{ color }}
            />
            <span className="text-sm font-medium text-white group-hover:text-accent dark:group-hover:text-accent transition-colors">
              {name}
            </span>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
