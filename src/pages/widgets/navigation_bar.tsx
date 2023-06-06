import "./navigation_bar.css";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export default function NavigationBar() {
    const { scrollY } = useScroll()
    const [isActive, setActive] = useState(false);

    useMotionValueEvent(scrollY, "change", (latestScrollY: number) => {
        console.log(latestScrollY);
        if(latestScrollY >= 700) setActive(true);
        else setActive(false);
    })

    function scrollToHome() {
        const element = document.getElementById('home');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    function scrollToTools() {
        const element = document.getElementById('tools');
        if (element) {
            if(scrollY.get() >= 1200){
                element.scrollIntoView({ behavior: 'smooth', block: "end" });
            }
            else{
                element.scrollIntoView({ behavior: 'smooth', block: "nearest" });
            }
        }
    }

    function scrollToProjects() {
        const element = document.getElementById('projects');
        if (element) {
            if(scrollY.get() >= 1224){
                element.scrollIntoView({ behavior: 'smooth', block: "end" });
            }
            else{
                element.scrollIntoView({ behavior: 'smooth', block: "nearest" });
            }
        }
    }

    function scrollToContact() {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: "nearest" });
        }
    }
    
    return <motion.nav className={isActive ? "navigation-container-active" : "navigation-container"}>
        <div className="logo"/>
        {/* HOME BUTTON */}
        <motion.button onClick={scrollToHome} className="navigation-header" whileHover={{borderWidth: 5}} transition={{ease: "easeOut", duration: 0.1, stiffness: 500}} onTap={() => {}}>
            Home
        </motion.button>
        {/* TOOLS BUTTON */}
        <motion.button onClick={scrollToTools} className="navigation-header" whileHover={{borderWidth: 5}} transition={{ease: "easeOut", duration: 0.1, stiffness: 500}}>
            Tools
        </motion.button >
        {/* PROJECTS BUTTON */}
        <motion.button onClick={scrollToProjects} className="navigation-header" whileHover={{borderWidth: 5}} transition={{ease: "easeOut", duration: 0.1, stiffness: 500}}>
            Projects
        </motion.button >
        {/* CONTACT BUTTON */}
        <motion.button onClick={scrollToContact} className="navigation-header" whileHover={{borderWidth: 5}} transition={{ease: "easeOut", duration: 0.1, stiffness: 500}}>
            Contact
        </motion.button>
        {/* HIRE ME BUTTON */}
        <motion.button className="hire-button" whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} transition={{type: "spring", stiffness: 300}}>
            Hire Me
        </motion.button>
    </motion.nav>;
}