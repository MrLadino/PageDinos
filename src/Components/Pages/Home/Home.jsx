import React from 'react'
import { Header } from '../../Layouts/Header/Header'
import { Section } from '../../Section/Section'
import  Fondo from '../../../Assets/fondo.jpg'
import  Fondo5 from '../../../Assets/fondo5.jpg'
import Cards from '../../Cards/Cards'
import { Footer } from '../../Layouts/Footer/Footer'
import { Card2 } from '../../Card2/Card2'
import Slider from '../../Slider/Slider'


export const Home = () => {

  return (
    <div>
        <Header>
            <header style={{backgroundImage:`url(${Fondo})`}} className='w-full h-32  bg-black flex justify-center items-center border-b-4 border-gray-300'>
                <h1 className='text-5xl p-2 text-white border-b-2 border-gray-300'>JurassicBlog con Andrés</h1>
            </header>
        </Header>
        <Section>
            <section style={{backgroundImage:`url(${Fondo5})`}} className='w-full  bg-no-repeat bg-cover flex items-center justify-evenly p-5'>    
                    <Card2/>
                <div className='w-5/12  bg-cyan-800 flex flex-col justify-center items-center border-4 border-white'>
                    <Cards/>
                </div>
            </section>
        </Section>

        <Slider/>
        
        <Footer>
            <footer style={{backgroundImage:`url(${Fondo})`}} className= 'bg-black w-full h-32 flex justify-center items-center border-t-4 border-gray-300'>
                <p className='text-3xl p-2 text-white border-b-2 border-gray-300'>Andrés Felipe Ladino Ocampo </p>
            </footer>
        </Footer>
    </div>
  )
}
