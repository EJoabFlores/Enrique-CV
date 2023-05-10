import React from 'react'
import {motion, useScroll} from "framer-motion"
import { useRef } from 'react'
import Lilcon from './Lilcon'


const Details = ({position, company, companyLink, time, addres, work }) => {
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center 
    justify-between md:w-[80%]'>

            <Lilcon reference={ref}/>
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}
            >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink}
            target="_blank"
            className='text-primary dark:text-primaryDark capitalize'
            >@{company}
            </a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {addres}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
            </motion.div>
        </li>
}

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start "]
        }
    )
    return (
    <div className='my-64'>
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experiencia
        </h2>
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

        <motion.div  
        style={{scaleY: scrollYProgress}}
        className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
        md:w-[2px] md:left-[30px] xs:left-[20px]'/>

            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
        <Details
        position= "Desarrolador Web" company="Inboundmkt" 
        companyLink="https://inboundmkt.com.mx"
        time="2023-Present" addres="San Luis Potosí, S.L.P."
        work="Entablar relación con los clientes para comprender sus necesidades, proponer las tecnologías y  
            desarrollar las herramientas a emplear para, crear de 0 el proyecto."
        />

<Details
        position= "Desarrolador Web" company="Frelance" 
        companyLink="https://enriquejoabfg.com"
        time="2022-Present" addres="San Luis Potosí, S.L.P."
        work="Buscó llevar mi nombre y mi marca al siguiente nivel, trabajando como desarrollador freelance
        atendiendo a clientes con ideas increibles, poniendo en practica la frase que me eh tomado personal.
        Si lo puedes imaginar, lo puedes programar."
        />

<Details
        position= "Asistente Técnico" company="Soy Henry" 
        companyLink="https://www.soyhenry.com/?utm_source=google&utm_medium=cpc&utm_campaign=GADS_SEARCH_MEX_BRAND&utm_content=Brand&gad=1&gclid=CjwKCAjw9J2iBhBPEiwAErwpefWcOSwuLvUYp33qvazI6EUbF5uIiObHzONDFmUNVX8ixdKXzSf9CxoCc00QAvD_BwE"
        time="Enero-Marzo 2023" addres="Remoto"
        work="Tuve la fortuna de ser seleccionado para desempeñarme como TA de Soy Henry, epuesto que consta
        de trabajar las habilidades blandas de los cursantes del BotCamp, estando al frente de un grupo de 
        25 personas, hablando de codígo y ayudando en los problemas que a ellos se les pudiera presentar."
        />
            </ul>
        </div>
    </div>
    )
}

export default Experience
