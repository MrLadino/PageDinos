import React from 'react'
import { Header } from '../../Layouts/Header/Header'
import { Section } from '../../Section/Section'
import  IndominusRex from '../../../Assets/IndominusRex.jpg'
import  Fondo from '../../../Assets/fondo.jpg'
import Cards from '../../Cards/Cards'
import { Footer } from '../../Layouts/Footer/Footer'


export const Home = () => {
  return (
    <div>
        <Header>
            <header className='w-full h-40  bg-black flex justify-center items-center border-b-4 border-gray-300'>
                <h1 className='text-5xl p-2 text-white border-b-2 border-gray-300'>DinoBlog con Andrés</h1>
            </header>
        </Header>
        <Section>
            <section className='w-full max-h bg-slate-900 flex justify-evenly p-5'>
                <div className='w-6/12 h-4/6 flex justify-center items-center border-4 border-white flex-col'>
                    <h2 className='text-3xl text-white flex justify-center items-center mb-7 mt-4'>Dinosaurio Favorito</h2>
                    <h3 className='text-white text-2xl'>IndominusRex:</h3>
                    <img className='w-5/6 h-72 p-3' src={IndominusRex} alt='Indominus Rex' />
                    <p className='p-11 text-white'>Este depredador gigante se caracteriza por su tamaño imponente, que puede superar los 15 metros de longitud, y su piel cubierta de escamas gruesas que varían en color de gris a blanco, lo que le permite camuflarse en su entorno. Con una mandíbula llena de dientes afilados y curvados, garras poderosas en sus extremidades, y una inteligencia excepcional, el Indominus rex es un depredador formidable y adaptable, capaz de planear estrategias de caza y representar una grave amenaza para cualquier criatura que se cruce en su camino.</p>
                </div>

                <div className='w-5/12 flex flex-col justify-center items-center border-4 border-white'>
                    <h2 className='text-3xl text-white flex justify-center items-center p-3.5'>Mis Dinosaurios Favoritos</h2>
                        <Cards/>
                </div>
            </section>
        </Section>
        
        <Footer>
            <footer className='bg-black w-full h-20 flex justify-center items-center'>
                <p className='text-2xl text-white'>Andrés Felipe Ladino Ocampo </p>
            </footer>
        </Footer>
    </div>
  )
}
