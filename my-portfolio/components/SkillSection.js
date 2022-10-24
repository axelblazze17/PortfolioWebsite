import { FadeContainer, popUp } from "@content/FramerMotionVariant";
import { HomeHeading } from "../pages/index"; // ----> not created yet
import { motion } from "framer-motion";
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiNextdotjs,
    SiTailwindcss,
    SiGit,
    SiMongodb,
    SiBootstrap,
    SiJquery,
    SiKaggle,
    SiMaterialui,
    SiC,
    SiCplusplus,
    SiJava,
    SiPython,
    SiSass,
    SiNodedotjs,
    SiExpress,
    SiFigma,
    SiNumpy,
    SiPandas,
    SiReact,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { useDarkMode } from "@context/darkModeContext";
import * as WindowsAnimation from "@lib/windowsAnimation";

export default function SkillSection({ skills }) {
    const { isDarkMode } = useDarkMode();
    return (
        <section className="mx-5">
            <HomeHeading title="My Skills" />

            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={FadeContainer}
                viewport={{ once: true }}
                className="grid my-10 gap-4 grid-cols-3"
            >
                {skills.map((skill, index) => {
                    const Icon = chooseIcon(skill.name.toLowerCase());
                    /* console.log(skill);
                    console.log(index);
                    console.log(Icon); */
                    return (
                        <motion.div
                            variants={popUp}
                            key={index}
                            title={skill.name}
                            onMouseMove={(e) =>
                                WindowsAnimation.showHoverAnimation(e, isDarkMode)
                            }
                            onMouseLeave={(e) => WindowsAnimation.removeHoverAnimation(e)}
                            className="p-4 flex items-center justify-center sm:justify-start gap-4 bg-gray-50 hover:bg-white dark:bg-darkPrimary hover:dark:bg-darkSecondary border rounded-sm border-gray-300 dark:border-neutral-700 transform origin-center md:origin-top group"
                        >
                            <div className="relative transition group-hover:scale-110 sm:group-hover:scale-100 select-none pointer-events-none">
                                <Icon className="w-8 h-8" />
                            </div>
                            <p className="hidden sm:inline-flex text-sm md:text-base font-semibold select-none pointer-events-none">
                                {skill.name}
                            </p>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
}

/* To choose the Icon according to the Name */
function chooseIcon(title) {
    let Icon;
    switch (title) {
        case "c":
            Icon = SiC;
            break;
         case "c++":
            Icon = SiCplusplus;
            break;
        case "java":
            Icon = SiJava;
            break;
        case "python":
            Icon = SiPython;
            break;
        case "html":
            Icon = SiHtml5;
            break;
        case "css":
            Icon = SiCss3;
            break;
        case "javascript":
            Icon = SiJavascript;
            break;
        case "bootstrap":
            Icon = SiBootstrap;
            break;
        case "sass":
            Icon = SiSass;
            break;
        case "react.js":
            Icon = FaReact;
            break;
        case "material ui":
            Icon = SiMaterialui;
            break;
        case "next.js":
            Icon = SiNextdotjs;
            break;
        case "tailwind css":
            Icon = SiTailwindcss;
            break;
        case "node.js":
            Icon = SiNodedotjs;
            break;
        case "express.js":
            Icon = SiExpress;
            break;
        case "mongo db":
            Icon = SiMongodb;
            break;
        case "jquery":
            Icon = SiJquery;
            break;
        case "git":
            Icon = SiGit;
            break;
        case "figma":
            Icon = SiFigma;
            break;
        case "kaggle":
            Icon = SiKaggle;
            break;
        case "numpy":
            Icon = SiNumpy;
            break;
        case "pandas":
            Icon = SiPandas;
            break; 
        default:
            break;
    }
    return Icon;
}