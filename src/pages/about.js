import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Image from 'next/image'
import profilePic from "../../public/images/profile/ejoabflores.jpg";
import { useMotionValue, useInView, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect';


const AnimatedNumber =({value}) => {
    const ref = useRef (null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration: 300});
    const isInView = useInView(ref, {once:true});

    useEffect(() =>{
        if(isInView){
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() =>{
        springValue.on("change", (latest) => {
        if(ref.current && latest.toFixed(0) <= value){
            ref.current.textContent = latest.toFixed(0);
        }
    })
    }, [springValue, value])

    return <span ref={ref}></span>
}


const about = () => {
    return (
    <>
    <Head>
        <title>Joab | Sobre mi</title>
        <meta name='description' content='any description'/>
    </Head>
    <TransitionEffect/>
    <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
        <AnimatedText text="Apasionado por el código!" className='mb-16 lg:!text-7xl sm:!text-6xl 
        xs:!text-4xl sm:mb-8'/>
        <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75
            '>Sobre mi</h2>
            <p className='font-medium '>Hey! Gracias por entrar y mostrar interés en mi CV, bueno te cuento 
            actualmente trabajo para <a className='font-bold text-primary' href='https://inboundmkt.com.mx'>INBOUND MKT </a>
            soy el desarrollador web de la agencia y también trabajo como freelance, siempre busco aprender
            nuevas tecnologías, soy desarrollador Full-Stack egresado de Soy Henry, me horiento mayormente al
            Front End, yaque me gusta brindar una experiencia agradable al usuario, además de seguir aprendiendo en 
            distintos cursos para continuar mejorando mis habilidades de programación para ofrecerte un 
            servicio de mejor calidad y acorde a los requerimientos de este gran sector económico.</p><br/>

            <p className='font-medium'>Soy una persona comprometida con mi trabajo, que busca ofrecer 
            siempre un servicio de calidad, soy bastante extrovertido, por lo que 
            no tengo problemas con entablar comunicación, trabajo bien bajo presión y 
            me gusta trabajar en equipo, siempre se aprende de los colegas.</p><br/>

            <p className='font-medium'>Te cuento un poco sobre mi vida privada actualmente radico en San Luis Potosí, 
                México, nací un 30 de Abril de 1995, así que tengo 27 años de edad, estoy felizmente 
                comprometido con el amor de mi vida, padre de familia, amante de la lectura, 
                las películas, la música, la tecnología y la cocina.</p>
        </div>
        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light
        p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
            <Image src={profilePic} alt="Ejoabflores" className="w-medium h-auto rounded-2xl" 
            priority
            sizes='(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            50vw'/>
        </div>

        <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 
        xl:flex-row xl:items-center md:order-3'>
            
            <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                    <AnimatedNumber value={12}/>+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 
                dark:text-light/75 xl:text-center ms:text-lg sm:text-base xs:text-sm'>
                    Clientes Satisfechos</h2>
            </div>

            <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                <AnimatedNumber value={20}/>+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 
                dark:text-light/75 xl:text-center ms:text-lg sm:text-base xs:text-sm'>
                    Proyectos Completados</h2>
            </div>

            <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                <AnimatedNumber value={1}/>+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 
                dark:text-light/75 xl:text-center ms:text-lg sm:text-base xs:text-sm'>
                    Años de Experiencia</h2>
            </div>

        </div>
        </div>
        <Skills/>
        <Experience />
        <Education />
        </Layout>
    </main>
    </>
)
}

export default about
