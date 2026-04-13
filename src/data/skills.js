import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaDatabase
} from "react-icons/fa";

import { SiSpringboot, SiMongodb } from "react-icons/si";

export const skills = [
  { name: "HTML", icon: FaHtml5, type: "frontend" },
  { name: "CSS", icon: FaCss3Alt, type: "frontend" },
  { name: "JavaScript", icon: FaJs, type: "frontend" },
  { name: "React", icon: FaReact, type: "frontend" },

  { name: "Java", icon: FaJava, type: "backend" },
  { name: "Spring Boot", icon: SiSpringboot, type: "backend" },

  { name: "MySQL", icon: FaDatabase, type: "database" },
  { name: "MongoDB", icon: SiMongodb, type: "database" }
];