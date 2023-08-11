import AnimeHistoryPic from "../assets/anime_history.png";
import MyMusicPic from "../assets/my_music.png";
import NittivPic from "../assets/nittiv.png";

interface TechStack {
  logo: string;
  name: string;
}

interface Project {
  image: string;
  name: string;
  techStack: string;
}

export const techStacks: TechStack[] = [
  {
    logo: "https://raw.githubusercontent.com/TcBello/devicon/master/icons/flutter/flutter-original.svg",
    name: "Flutter",
  },
  {
    logo: "https://raw.githubusercontent.com/TcBello/devicon/master/icons/react/react-original.svg",
    name: "React",
  },
  {
    logo: "https://raw.githubusercontent.com/TcBello/devicon/master/icons/firebase/firebase-plain.svg",
    name: "Firebase",
  },
  {
    logo: "https://raw.githubusercontent.com/TcBello/devicon/master/icons/mongodb/mongodb-original.svg",
    name: "MongoDB",
  },
  {
    logo: "https://raw.githubusercontent.com/TcBello/devicon/master/icons/nodejs/nodejs-original.svg",
    name: "Node",
  },
  {
    logo: "https://raw.githubusercontent.com/TcBello/devicon/master/icons/express/express-original.svg",
    name: "Express",
  },
  {
    logo: "https://raw.githubusercontent.com/TcBello/devicon/master/icons/figma/figma-original.svg",
    name: "Figma",
  },
  {
    logo: "https://raw.githubusercontent.com/TcBello/devicon/master/icons/dart/dart-original.svg",
    name: "Dart",
  },
  {
    logo: "https://raw.githubusercontent.com/TcBello/devicon/master/icons/javascript/javascript-original.svg",
    name: "Javascript",
  },
  {
    logo: "https://raw.githubusercontent.com/TcBello/devicon/master/icons/typescript/typescript-original.svg",
    name: "Typescript",
  },
];

export const recentProjects: Project[] = [
  {
    image:
      "https://raw.githubusercontent.com/TcBello/chatty/master/screenshots/chat_page_ss_2.png",
    name: "Chatty",
    techStack: "MongoDB|Express|React|NodeJS|Socket.io",
  },
  {
    image:
      "https://raw.githubusercontent.com/TcBello/CapMS/master/screenshots/Screenshot1.png",
    name: "Capstone Management System",
    techStack: "React|Firebase",
  },
  {
    image: NittivPic,
    name: "Nittiv",
    techStack: "Flutter|Firebase",
  },
  {
    image:
      "https://raw.githubusercontent.com/TcBello/Axie-Energy-Calculator/master/screenshot/ss_2.png",
    name: "Axie Energy Calculator",
    techStack: "React",
  },
  {
    image: MyMusicPic,
    name: "My Music",
    techStack: "Flutter",
  },
  {
    image: AnimeHistoryPic,
    name: "Anime History",
    techStack: "Flutter|MongoDB|Node|Express",
  },
];
