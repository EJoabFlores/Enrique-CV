import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import project1 from '../../public/images/projects/altia.png'
import project2 from '../../public/images/projects/maquinados.png'
import project3 from '../../public/images/projects/inbound.png'
import project4 from '../../public/images/projects/rube.png'
import {GithubIcon} from '@/components/Icons'
import {motion} from "framer-motion";
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image);

const FeaturedProject = ({type, tittle, summary, img, link, github}) => {
return(
    <article 
    className='w-full flex item-center justify-between relative rounded-br-2xl rounded-3xl border border-solid
        border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col 
        lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
        
        <div className='absolute top-0 -right-3 -z-10 w-[101%] rounded-[2.5rem] bg-dark dark:bg-light
        rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>

        <Link href={link} target="_blank" 
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>

            <FramerImage src={img} alt={tittle} className="w-auto h-auto" 
            whileHover={{scale:1.05}}
            transition={{duration:0.2}}
            priority
            sizes='(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            50vw'
            />
        </Link>

        <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
            <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
            <Link href={link} target='_blank'
            className="hover:underline underline-offset-2">
            <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{tittle}</h2>
            </Link>
            <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
            <div className='mt-2 flex items-center'>
            <Link href={github} target='_blank' className='w-10'><GithubIcon/></Link>
            <Link href={link} target='_blank' 
            className='ml-4 rounded-lg bg-dark text-light p-2
            px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base
            '>Visita el proyecto</Link>
            </div>
        </div>
    </article>
)
}

const Project = ({tittle, type, img, link, github}) => {
    return(
    <article className='w-full flex flex-col item-center justify-center rounded-2xl border border-solid 
    border-dark bg-light p-6 shadow-2xl relative dark:bg-dark dark:border-light xs:p-4 '>

    <div className='absolute top-0 -right-3 -z-10 w-[101%] rounded-[2rem] bg-dark rounded-br-3xl 
    dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/>

    <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>

    <FramerImage src={img} alt={tittle} className="w-auto h-auto" 
    whileHover={{scale:1.05}}
    transition={{duration:0.2}}
    priority
        sizes='(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        50vw'/>
    </Link>

    <div className='w-full flex flex-col items-start justify-between mt-4'>
    <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base'>{type}</span>
    <Link href={link} target='_blank'
    className="hover:underline underline-offset-2">
    <h2 className='my-2 w-full text-left text-4xl font-bold lg:text-2xl'>{tittle}</h2>
    </Link>
    <div className='w-full mt-2 flex items-center justify-between'>
    <Link href={link} target='_blank' 
    className='text-lg font-semibold underline md:text-base'
    >Visita el proyecto</Link>
    <Link href={github} target='_blank' className='w-10 md:w-6'><GithubIcon/></Link>
    </div>
    </div>
        </article>
    )
}


const projects = () => {
    return (
    <>
    <Head>
        <title>Joab | Proyectos</title>
        <meta name='description' content='any description'/>
    </Head>
    <TransitionEffect/>
    <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
            <AnimatedText text="La creatividad triunfa sobre el conocimiento!" 
            className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
            />

            <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>

                <div className='col-span-12'>
                    <FeaturedProject 
                    tittle="Desarrolló de sitio Web"
                    img={project1}
                    summary="Esta página fue creada bajo solicitud del cliente, siguiendo los lineamientos 
                    del diseñador gráfico, colores de marca y buscando plasmar sus valores, se realizó un 
                    trabajo de meta etiquetas para el posicionamiento SEO, además de hacerlo totalmente 
                    responsivo para que se adapté a celular, darle seguimiento a redes sociales y hacerlo 
                    un sitio bilingüe."
                    link="https://altiacapital.com.mx"
                    github="/"
                    type="Sitio Web bajo demanda"
                    />
                </div>

                <div className='col-span-6 sm:col-span-12'>
                <Project 
                    tittle="Desarrolló de sitio Web"
                    img={project2}
                    link="https://maquinadosap.com"
                    github="/"
                    type="Sitio Web bajo demanda"
                    />
                </div>

                <div className='col-span-6 sm:col-span-12'>
                <Project 
                    tittle="Desarrolló de sitio Web"
                    img={project3}
                    link="https://inboundmkt.com.mx"
                    github="https://github.com/EJoabFlores/inbound"
                    type="Sitio Web bajo demanda"
                    />
                </div>

                <div className='col-span-12'>
                <FeaturedProject 
                    tittle="Desarrolló de sitio Web"
                    img={project4}
                    summary="Esta página fue creada bajo solicitud del cliente, siguiendo los lineamientos 
                    del diseñador gráfico, colores de marca y buscando plasmar sus valores, se realizó un 
                    trabajo de meta etiquetas para el posicionamiento SEO, además de hacerlo totalmente 
                    responsivo para que se adapte a celular, darle seguimiento a redes sociales, añadir una 
                    sección de blog interactivo con incrustación de video con controles personalizados y un 
                    apartado de bolsa de trabajo con un formulario de datos y un espacio para poder subir su 
                    cv en formato PDF, agilizando la labor de reclutamiento de la empresa."
                    link="https://rube.com.mx"
                    github="/"
                    type="Sitio bajo demanda"
                    />
                </div>

            </div>

        </Layout>
    </main>
    </>
    )
}

export default projects
