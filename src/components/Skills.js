import React from 'react'
import {motion} from "framer-motion"

const Skill = ({name, x, y}) => {
return(
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light 
    py-3 px-6 shadow-black cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 
    lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent 
    xs:text-dark xs:dark:text-light xs:font-bold'
    whileHover={{scale:1.05}}
    initial={{x:0, y:0}}
    whileInView={{ x:x, y:y, transition: {duration: 1.5}}}
    transition={{duration: 1.5}}
    viewport={{once:true}}
    >
    {name}
    </motion.div>
)
}

const Skills = () => {
return (
    <>
    <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
    <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight
    dark:bg-circularDark lg:h-[80vh] sm:h-[50vh] 
    lg:bg-circularLightLg lg:dark:circularDarkLg
    md:bg-circularLightMd md:dark:circularDarkMd 
    sm:bg-circularLightSm sm:dark:circularDarkSm'>

    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light 
    p-8 shadow-black cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2'
    whileHover={{scale:1.05}}>
    Web
    </motion.div>

    <Skill name="CSS" x="-15VW" y="-10vw" />
    <Skill name="HTML" x="-20VW" y="5vw" />
    <Skill name="JS" x="-35VW" y="-10vw" />
    <Skill name="React" x="-17VW" y="28vw" />
    <Skill name="Redux" x="2VW" y="15vw" />
    <Skill name="Next.Js" x="-20VW" y="-15vw" />
    <Skill name="NODE JS" x="20VW" y="2vw" />
    <Skill name="Flutter" x="35VW" y="10vw" />
    <Skill name="Unity" x="15VW" y="10vw" />
    <Skill name="Android STD" x="-20VW" y="15vw" />
    <Skill name="SQL" x="10VW" y="-20vw" />
    <Skill name="BOOTSTRAP" x="5VW" y="-15vw" />
    <Skill name="SASS" x="0VW" y="25vw" />
    <Skill name="TAILWIND" x="25VW" y="22vw" />
    <Skill name="NPM" x="17VW" y="-25vw" />
    <Skill name="GIT-HUB" x="19VW" y="-10vw" />
    <Skill name="WORDPRESS" x="-15VW" y="-25vw" />

    </div>
    </>
)
}

export default Skills
