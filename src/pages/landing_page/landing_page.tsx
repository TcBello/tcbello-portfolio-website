import "./landing_page.css";
import NavigationBar from "../widgets/navigation_bar";
import BackgroundImage from "../widgets/background_image";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon, DownloadIcon, Icon } from '@chakra-ui/icons';
import Footer from "../widgets/footer";
import LandingPageHeader from "../widgets/landing_page_header";
import Slider from "@ant-design/react-slick";
import { FormControl, FormErrorMessage, FormLabel, Image, Input, InputGroup, InputLeftElement, Textarea } from '@chakra-ui/react';
import { MdEmail, MdMailOutline, MdPersonOutline } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";
import { sendEmail } from "../../utils/email";
import { useState } from "react";
import { showErrorToast, showInfoToast, showSuccessToast } from "../widgets/toast";

interface TechStack {
    logo: string,
    name: string 
}

interface Project {
    image: string,
    name: string,
    techStack: string
}

const techStacks: TechStack[] = [
    {
        logo: "https://raw.githubusercontent.com/TcBello/devicon/master/icons/flutter/flutter-original.svg",
        name: "Flutter"
    },
    {
        logo: "https://raw.githubusercontent.com/TcBello/devicon/master/icons/react/react-original.svg",
        name: "React"
    },
    {
        logo: "https://raw.githubusercontent.com/TcBello/devicon/master/icons/firebase/firebase-plain.svg",
        name: "Firebase"
    },
    {
        logo: "https://raw.githubusercontent.com/TcBello/devicon/master/icons/mongodb/mongodb-original.svg",
        name: "MongoDB"
    },
    {
        logo: "https://raw.githubusercontent.com/TcBello/devicon/master/icons/nodejs/nodejs-original.svg",
        name: "Node"
    },
    {
        logo: "https://raw.githubusercontent.com/TcBello/devicon/master/icons/express/express-original.svg",
        name: "Express"
    },
    {
        logo: "https://raw.githubusercontent.com/TcBello/devicon/master/icons/figma/figma-original.svg",
        name: "Figma"
    },
    {
        logo: "https://raw.githubusercontent.com/TcBello/devicon/master/icons/dart/dart-original.svg",
        name: "Dart"
    },
    {
        logo: "https://raw.githubusercontent.com/TcBello/devicon/master/icons/javascript/javascript-original.svg",
        name: "Javascript"
    },
    {
        logo: "https://raw.githubusercontent.com/TcBello/devicon/master/icons/typescript/typescript-original.svg",
        name: "Typescript"
    }
];

const recentProjects: Project[] = [
    {
        image: "https://raw.githubusercontent.com/TcBello/CapMS/master/screenshots/Screenshot1.png",
        name: "Capstone Management System",
        techStack: "React|Firebase"
    },
    {
        image: "https://raw.githubusercontent.com/TcBello/CapMS/master/screenshots/Screenshot1.png",
        name: "Nittiv",
        techStack: "Flutter|Firebase"
    },
    {
        image: "https://raw.githubusercontent.com/TcBello/Axie-Energy-Calculator/master/screenshot/ss_2.png",
        name: "Axie Energy Calculator",
        techStack: "React"
    },
    {
        image: "https://raw.githubusercontent.com/TcBello/CapMS/master/screenshots/Screenshot1.png",
        name: "My Music",
        techStack: "Flutter"
    },
    {
        image: "https://raw.githubusercontent.com/TcBello/CapMS/master/screenshots/Screenshot1.png",
        name: "Anime History",
        techStack: "Flutter|MongoDB|Node|Express"
    }
];

const LandingPage = () => {
    const [name, setName] = useState<string|null>(null);
    const [email, setEmail] = useState<string|null>(null);
    const [message, setMessage] = useState<string|null>(null);

    var slider: Slider|null = null;

    const isSmallDevice = useMediaQuery({query: '(max-width: 992px)'});

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: isSmallDevice ? 1 : 2,
        slidesToScroll: isSmallDevice ? 1 : 2,
        arrows: false,
        className: "slider",
        // centerMode: true,
        // centerPadding: "10px",
        ref: (c: Slider|null) => {slider = c}
    };

    function goToFacebook() {
        window.open("https://www.facebook.com/SxzOtaku");
    }

    function goToTwitter() {
        window.open("https://twitter.com/tcbello16");
    }

    function goToLinkedIn() {
        window.open("https://www.linkedin.com/in/tcbello/");
    }

    function goToGithub() {
        window.open("https://github.com/tcbello");
    }

    function goToEmail() {
        window.open("https://mail.google.com/mail/u/0/?view=cm&fs=1&to=hire.thombello@gmail.com&su=Hire+you")
    }

    async function submitForm() {
        if(name != null && email != null && message != null){
            let result = await sendEmail(message, name, email);
        
            if(result){
                setName(null);
                setEmail(null);
                setMessage(null);
                showSuccessToast("Email sent");
            } else showErrorToast("Something went wrong");
        } else showInfoToast("Fill up missing fields")
    }

    
    return <div>
        {/* BACKGROUND IMAGE */}
        <BackgroundImage />
        {/* NAVIGATION BAR */}
        <NavigationBar />
        {/* INTRODUCTION */}
        <section className="introduction-container-1" id="home">
            <motion.section className="introduction-container-2" initial={{opacity: 0, y: 100, backgroundColor: "transparent"}} whileInView={{opacity: 1, y: 0, backgroundColor: "transparent"}} transition={{ease: "easeOut", duration: 0.5, delay: 0.3}}>
                <p className="intro-1">Hello! I'm</p>
                <p className="intro-2">Thom Carlo Bello</p>
                <p className="intro-3">Developer specializing in developing applications using React and Flutter</p>
                <motion.button className="resume-button" whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} transition={{type: "spring", stiffness: 300}} onClick={()=>{console.log("test")}} whileInView={{zIndex: 0}}>
                    Get Resume
                    <DownloadIcon className="download-icon" />
                </motion.button>
            </motion.section>
        </section>
        {/* TECH STACK */}
        <motion.section className="tech-stack-container" id="tools">
            {/* TECH STACK HEADER */}
            <motion.div initial={{y: 200, opacity: 0}} whileInView={{y: 0, opacity: 1}}>
                <LandingPageHeader title="Tech Stack"/>
            </motion.div>
            <div className="tech-stack-items-container">
                {
                    techStacks.map((tech, key) => {
                        return (
                            <motion.div className="tech-stack-item" key={`tech-item-${key}`} initial={{x: -200}} whileInView={{x: 0}} transition={{type: "spring", stiffness: 300, damping: 20}}>
                                <img src={tech.logo} alt={tech.name} height={41.82} width={41.82} style={{backgroundColor: "transparent"}}/>
                                {tech.name}
                            </motion.div>
                        );
                    })
                }
            </div>
        </motion.section>
        {/* RECENT PROJECTS */}
        <div className="recent-projects-container-1" id="projects">
            <div className="recent-projects-container-2">
                {/* RECENT PROJECT TEXT */}
                <motion.h6 className="recent-projects-text" initial={{opacity: 0, x: -50}} whileInView={{opacity: 1, x: 0}}>Recent Projects</motion.h6>
                {/* NEXT/PREV BUTTON */}
                <motion.div className="recent-projects-button-container" initial={{opacity: 0, x: 50}} whileInView={{opacity: 1, x: 0}}>
                    <motion.button className="recent-projects-arrow-button" whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} transition={{type: "spring", stiffness: 300}} onClick={() => slider?.slickPrev()}>
                        <ChevronLeftIcon height={30} width={30} backgroundColor="transparent" />
                    </motion.button>
                    <motion.button className="recent-projects-arrow-button" whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} transition={{type: "spring", stiffness: 300}} onClick={() => slider?.slickNext()}>
                        <ChevronRightIcon height={30} width={30} backgroundColor="transparent" />
                    </motion.button>
                </motion.div>
            </div>
            {/* SLIDER */}
            <Slider {...settings}>
                {
                    recentProjects.map((project, index) => {
                        return (
                            <div>
                                <div className="slider-item" key={`project-${index}`}>
                                    <Image src={project.image} alt="name" className="slider-item-image" objectFit={"cover"} objectPosition="center" />
                                    <p className="slider-item-title">{project.name}</p>
                                    <p className="slider-item-subtitle">{project.techStack}</p>
                                </div>
                            </div>
                        );
                    })
                }
            </Slider>
        </div>
        {/* CONTACT ME */}
        {
            isSmallDevice
             ? <section className="contact-me-container-mobile" id="contact">
                {/* CONTACT ME HEADER */}
                <motion.p className="contact-me-header" initial={{opacity: 0, x: -200}} whileInView={{opacity: 1, x: 0}}>If you have any project or need help. Contact me</motion.p>
                {/* CONTACT FIELDS */}
                <motion.div initial={{opacity: 0, y: 200}} whileInView={{opacity: 1, y: 0}} className="contact-fields-container-mobile">
                    <FormControl className="contact-fields-form-container">
                        {/* FULL NAME FIELD */}
                        {/* LABEL */}
                        <FormLabel className="contact-field-label">Full Name</FormLabel>
                        <InputGroup style={{backgroundColor: "transparent", marginBottom: 20}}>
                            {/* PERSON ICON */}
                            <InputLeftElement pointerEvents='none' className="contact-field-icon" >
                                <Icon as={MdPersonOutline} style={{backgroundColor: "transparent", width: 30, height: 30}}/>
                            </InputLeftElement>
                            {/* TEXT FIELD */}
                            <Input value={name ?? ""} type='text' variant='filled' placeholder='Enter your name' className="contact-me-textfield" onChange={(e) => setName(e.target.value)} />
                        </InputGroup>
                        {/* EMAIL FIELD */}
                        {/* LABEL */}
                        <FormLabel className="contact-field-label">Email</FormLabel>
                        <InputGroup style={{backgroundColor: "transparent", marginBottom: 20}}>
                            {/* EMAIL ICON */}
                            <InputLeftElement pointerEvents='none' className="contact-field-icon" >
                                <Icon as={MdMailOutline} style={{backgroundColor: "transparent", width: 30, height: 30}}/>
                            </InputLeftElement>
                            {/* TEXT FIELD */}
                            <Input value={email ?? ""} type='email' variant='filled' placeholder='Email' className="contact-me-textfield" onChange={(e) => setEmail(e.target.value)} />
                        </InputGroup>
                        {/* MESSAGE FIELD */}
                        {/* LABEL */}
                        <FormLabel className="contact-field-label">Message</FormLabel>
                        {/* TEXT FIELD */}
                        <InputGroup style={{backgroundColor: "transparent", marginBottom: 20}}>
                            <Textarea value={message ?? ""} placeholder='Message' className="contact-me-message" onChange={(e) => setMessage(e.target.value)} />
                        </InputGroup>
                        {/* SUBMIT BUTTON */}
                        <motion.button className="contact-submit-button" whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} transition={{type: "spring", stiffness: 300}} onClick={submitForm}>
                            Submit
                        </motion.button>
                    </FormControl>
                </motion.div>
                <div style={{height: 50}} />
                <motion.div className="contact-me-follow-container" initial={{opacity: 0, x: -200}} whileInView={{opacity: 1, x: 0}}>
                    {/* CONTACT ME HEADER */}
                    <p className="contact-me-header">Follow Me</p>
                    {/* SOCIAL MEDIA BUTTONS */}
                    <div className="contact-me-follow-items">
                        <motion.button className="contact-me-follow-button" whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} transition={{type: "spring", stiffness: 300}} onClick={goToFacebook}>
                            <Icon as={FaFacebookF} className="contact-me-follow-item-icon" height={30} width={30} />
                        </motion.button>
                        <motion.button className="contact-me-follow-button" whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} transition={{type: "spring", stiffness: 300}} onClick={goToTwitter}>
                            <Icon as={FaTwitter} className="contact-me-follow-item-icon" height={30} width={30} />
                        </motion.button>
                        <motion.button className="contact-me-follow-button" whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} transition={{type: "spring", stiffness: 300}} onClick={goToLinkedIn}>
                            <Icon as={FaLinkedinIn} className="contact-me-follow-item-icon" height={30} width={30} />
                        </motion.button>
                        <motion.button className="contact-me-follow-button" whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} transition={{type: "spring", stiffness: 300}} onClick={goToGithub}>
                            <Icon as={FaGithub} className="contact-me-follow-item-icon" height={30} width={30} />
                        </motion.button>
                        <motion.button className="contact-me-follow-button" whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} transition={{type: "spring", stiffness: 300}} onClick={goToEmail}>
                            <Icon as={MdEmail} className="contact-me-follow-item-icon" height={30} width={30} />
                        </motion.button>
                    </div>
                </motion.div>
             </section>
             : <section className="contact-me-container" id="contact">
                <div className="contact-me-info-container">
                    {/* CONTACT ME HEADER */}
                    <motion.p className="contact-me-header" initial={{opacity: 0, x: -200}} whileInView={{opacity: 1, x: 0}}>If you have any project or need help. Contact me</motion.p>
                    <motion.div className="contact-me-follow-container" initial={{opacity: 0, x: -200}} whileInView={{opacity: 1, x: 0}}>
                        {/* CONTACT ME HEADER */}
                        <p className="contact-me-header">Follow Me</p>
                        {/* SOCIAL MEDIA BUTTONS */}
                        <div className="contact-me-follow-items">
                            <motion.button className="contact-me-follow-button" whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} transition={{type: "spring", stiffness: 300}} onClick={goToFacebook}>
                                <Icon as={FaFacebookF} className="contact-me-follow-item-icon" height={30} width={30} />
                            </motion.button>
                            <motion.button className="contact-me-follow-button" whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} transition={{type: "spring", stiffness: 300}} onClick={goToTwitter}>
                                <Icon as={FaTwitter} className="contact-me-follow-item-icon" height={30} width={30} />
                            </motion.button>
                            <motion.button className="contact-me-follow-button" whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} transition={{type: "spring", stiffness: 300}} onClick={goToLinkedIn}>
                                <Icon as={FaLinkedinIn} className="contact-me-follow-item-icon" height={30} width={30} />
                            </motion.button>
                            <motion.button className="contact-me-follow-button" whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} transition={{type: "spring", stiffness: 300}} onClick={goToGithub}>
                                <Icon as={FaGithub} className="contact-me-follow-item-icon" height={30} width={30} />
                            </motion.button>
                            <motion.button className="contact-me-follow-button" whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} transition={{type: "spring", stiffness: 300}} onClick={goToEmail}>
                                <Icon as={MdEmail} className="contact-me-follow-item-icon" height={30} width={30} />
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
                <motion.div initial={{opacity: 0, y: 200}} whileInView={{opacity: 1, y: 0}} className="contact-fields-container">
                    <FormControl className="contact-fields-form-container">
                        {/* FULL NAME FIELD */}
                        {/* LABEL */}
                        <FormLabel className="contact-field-label">Full Name</FormLabel>
                        <InputGroup style={{backgroundColor: "transparent", marginBottom: 20}}>
                            {/* PERSON ICON */}
                            <InputLeftElement pointerEvents='none' className="contact-field-icon" >
                                <Icon as={MdPersonOutline} style={{backgroundColor: "transparent", width: 30, height: 30}}/>
                            </InputLeftElement>
                            {/* TEXT FIELD */}
                            <Input value={name ?? ""} type='text' variant='filled' placeholder='Enter your name' className="contact-me-textfield" onChange={(e) => setName(e.target.value)} />
                        </InputGroup>
                        {/* EMAIL FIELD */}
                        {/* LABEL */}
                        <FormLabel className="contact-field-label">Email</FormLabel>
                        <InputGroup style={{backgroundColor: "transparent", marginBottom: 20}}>
                            {/* EMAIL ICON */}
                            <InputLeftElement pointerEvents='none' className="contact-field-icon" >
                                <Icon as={MdMailOutline} style={{backgroundColor: "transparent", width: 30, height: 30}}/>
                            </InputLeftElement>
                            {/* TEXT FIELD */}
                            <Input value={email ?? ""} type='email' variant='filled' placeholder='Email' className="contact-me-textfield" onChange={(e) => setEmail(e.target.value)} />
                        </InputGroup>
                        {/* MESSAGE FIELD */}
                        {/* LABEL */}
                        <FormLabel className="contact-field-label">Message</FormLabel>
                        {/* TEXT FIELD */}
                        <InputGroup style={{backgroundColor: "transparent", marginBottom: 20}}>
                            <Textarea value={message ?? ""} placeholder='Message' className="contact-me-message" onChange={(e) => setMessage(e.target.value)} />
                        </InputGroup>
                        {/* SUBMIT BUTTON */}
                        <motion.button className="contact-submit-button" whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} transition={{type: "spring", stiffness: 300}} onClick={submitForm}>
                            Submit
                        </motion.button>
                    </FormControl>
                </motion.div>
            </section>
        }
        {/* FOOTER */}
        <Footer />
    </div>;
}

export default LandingPage;