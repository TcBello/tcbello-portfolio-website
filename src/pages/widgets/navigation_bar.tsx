import "./navigation_bar.css";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerOverlay, IconButton } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

export default function NavigationBar() {
    const { scrollY } = useScroll()
    const [isActive, setActive] = useState(false);
    const [isDrawerActive, setDrawerActive] = useState(false);

    const isSmallDevice = useMediaQuery({query: '(max-width: 992px)'});

    const delayNavigate = 150;

    useMotionValueEvent(scrollY, "change", (latestScrollY: number) => {
        console.log(latestScrollY);
        if(latestScrollY >= 700) setActive(true);
        else setActive(false);
    })

    function scrollToHome() {
        const element = document.getElementById('home');
        if (element) {
            if(isSmallDevice){
                setDrawerActive(false);
                setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), delayNavigate);
            }
            else{
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    function scrollToTools() {
        const element = document.getElementById('tools');
        if (element) {
            if(isSmallDevice){
                setDrawerActive(false);

                if(scrollY.get() >= 1100){
                    setTimeout(() => element.scrollIntoView({ behavior: 'smooth', block: "end" }), delayNavigate);
                }
                else{
                    setTimeout(() => element.scrollIntoView({ behavior: 'smooth', block: "nearest" }), delayNavigate);
                }
            }
            else{
                if(scrollY.get() >= 1100){
                    element.scrollIntoView({ behavior: 'smooth', block: "end" });
                }
                else{
                    element.scrollIntoView({ behavior: 'smooth', block: "nearest" });
                }
            }
        }
    }

    function scrollToProjects() {
        const element = document.getElementById('projects');
        if (element) {
            if(isSmallDevice){
                setDrawerActive(false);

                if(scrollY.get() >= 1224){
                    setTimeout(() => element.scrollIntoView({ behavior: 'smooth', block: "end" }), delayNavigate);
                }
                else{
                    setTimeout(() => element.scrollIntoView({ behavior: 'smooth', block: "nearest" }), delayNavigate);
                }
            }
            else{
                if(scrollY.get() >= 1224){
                    element.scrollIntoView({ behavior: 'smooth', block: "end" });
                }
                else{
                    element.scrollIntoView({ behavior: 'smooth', block: "nearest" });
                }
            }
        }
    }

    function scrollToContact() {
        const element = document.getElementById('contact');
        if (element) {
            if(isSmallDevice){
                setDrawerActive(false);
                setTimeout(() => element.scrollIntoView({ behavior: 'smooth', block: "nearest" }), delayNavigate);
            }
            else{
                element.scrollIntoView({ behavior: 'smooth', block: "nearest" });
            }
        }
    }
    
    // return <motion.nav className={isActive ? "navigation-container-active" : "navigation-container"}>
    //     {/* LOGO */}
    //     <div className="logo"/>
    //     {/* MORE MENU */}
    //     <Drawer isOpen={isDrawerActive} onClose={() => setDrawerActive(false)} size="xs">
    //         <DrawerOverlay className="navigation-drawer" onClick={() => setDrawerActive(false)}>
    //             <DrawerContent className="navigation-drawer-content">
    //                 <IconButton className="navigation-close-button" aria-label="Close menu" icon={<CloseIcon style={{backgroundColor: "transparent"}} />} onClick={() => setDrawerActive(false)} />
    //                 <DrawerBody style={{width: "100%", backgroundColor: "transparent"}}>
    //                     <button className="navigation-drawer-items" onClick={scrollToHome}>Home</button>
    //                     <button className="navigation-drawer-items" onClick={scrollToTools}>Tools</button>
    //                     <button className="navigation-drawer-items" onClick={scrollToProjects}>Projects</button>
    //                     <button className="navigation-drawer-items" onClick={scrollToContact}>Contact</button>
    //                 </DrawerBody>
    //                 <DrawerFooter className="navigation-drawer-footer">
    //                     <button className="navigation-drawer-items-hire-button" onClick={scrollToContact}>Hire Me</button>
    //                 </DrawerFooter>
    //             </DrawerContent>
    //         </DrawerOverlay>
    //     </Drawer>
    //     {
    //         isSmallDevice
    //          ? <div style={{backgroundColor: "transparent"}}>
    //             <IconButton
    //                 aria-label="More menu"
    //                 icon={<HamburgerIcon style={{backgroundColor: "transparent"}} />}
    //                 className="navigation-menu-button"
    //                 onClick={() => setDrawerActive(true)}
    //             />
    //          </div>
    //          : <div>
    //             {/* HOME BUTTON */}
    //             <motion.button onClick={scrollToHome} className="navigation-header" whileHover={{borderWidth: 5}} transition={{ease: "easeOut", duration: 0.1, stiffness: 500}}>
    //                 Home
    //             </motion.button>
    //             {/* TOOLS BUTTON */}
    //             <motion.button onClick={scrollToTools} className="navigation-header" whileHover={{borderWidth: 5}} transition={{ease: "easeOut", duration: 0.1, stiffness: 500}}>
    //                 Tools
    //             </motion.button >
    //             {/* PROJECTS BUTTON */}
    //             <motion.button onClick={scrollToProjects} className="navigation-header" whileHover={{borderWidth: 5}} transition={{ease: "easeOut", duration: 0.1, stiffness: 500}}>
    //                 Projects
    //             </motion.button >
    //             {/* CONTACT BUTTON */}
    //             <motion.button onClick={scrollToContact} className="navigation-header" whileHover={{borderWidth: 5}} transition={{ease: "easeOut", duration: 0.1, stiffness: 500}}>
    //                 Contact
    //             </motion.button>
    //             {/* HIRE ME BUTTON */}
    //             <motion.button onClick={scrollToContact} className="hire-button" whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} transition={{type: "spring", stiffness: 300}}>
    //                 Hire Me
    //             </motion.button>
    //          </div>
    //     }
    // </motion.nav>;

    if(isSmallDevice){
        return <motion.nav className={isActive ? "navigation-container-active" : "navigation-container"}>
            {/* LOGO */}
            <div className="logo"/>
            {/* MORE MENU */}
            <Drawer isOpen={isDrawerActive} onClose={() => setDrawerActive(false)} size="xs">
                <DrawerOverlay className="navigation-drawer" onClick={() => setDrawerActive(false)}>
                    <DrawerContent className="navigation-drawer-content">
                        <IconButton className="navigation-close-button" aria-label="Close menu" icon={<CloseIcon style={{backgroundColor: "transparent"}} />} onClick={() => setDrawerActive(false)} />
                        <DrawerBody style={{width: "100%", backgroundColor: "transparent"}}>
                            <button className="navigation-drawer-items" onClick={scrollToHome}>Home</button>
                            <button className="navigation-drawer-items" onClick={scrollToTools}>Tools</button>
                            <button className="navigation-drawer-items" onClick={scrollToProjects}>Projects</button>
                            <button className="navigation-drawer-items" onClick={scrollToContact}>Contact</button>
                        </DrawerBody>
                        <DrawerFooter className="navigation-drawer-footer">
                            <button className="navigation-drawer-items-hire-button" onClick={scrollToContact}>Hire Me</button>
                        </DrawerFooter>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
            {
                isSmallDevice
                ? <div style={{backgroundColor: "transparent"}}>
                    <IconButton
                        aria-label="More menu"
                        icon={<HamburgerIcon style={{backgroundColor: "transparent"}} />}
                        className="navigation-menu-button"
                        onClick={() => setDrawerActive(true)}
                    />
                </div>
                : <div>
                    {/* HOME BUTTON */}
                    <motion.button onClick={scrollToHome} className="navigation-header" whileHover={{borderWidth: 5}} transition={{ease: "easeOut", duration: 0.1, stiffness: 500}}>
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
                    <motion.button onClick={scrollToContact} className="hire-button" whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} transition={{type: "spring", stiffness: 300}}>
                        Hire Me
                    </motion.button>
                </div>
            }
        </motion.nav>;
    }
    else{
        return <motion.nav className={isActive ? "navigation-container-active" : "navigation-container"}>
            {/* LOGO */}
            <div className="logo"/>
            {/* HOME BUTTON */}
            <motion.button onClick={scrollToHome} className="navigation-header" whileHover={{borderWidth: 5}} transition={{ease: "easeOut", duration: 0.1, stiffness: 500}}>
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
            <motion.button onClick={scrollToContact} className="hire-button" whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} transition={{type: "spring", stiffness: 300}}>
                Hire Me
            </motion.button>
        </motion.nav>;
    }
}