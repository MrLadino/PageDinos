import React from 'react'
import { Header } from '../../Layouts/Header/Header'
import { Section } from '../../Section/Section'
import Cards from '../../Cards/Cards'
import { Footer } from '../../Layouts/Footer/Footer'


export const Home = () => {
  return (
    <div>
        <Header>
            <header className='w-full h-40  bg-black flex justify-center items-center border-b-4 border-gray-300'>
                <h1 className='text-4xl p-2 text-white border-b-2 border-gray-300'>Mis Dinosaurios Favoritos</h1>
            </header>
        </Header>
        <Section>
            <section className='w-full max-h bg-slate-900 flex justify-evenly p-5'>
                <div className='w-6/12 flex justify-center border-4 border-white'>
                    <h2 className='text-2xl text-white flex justify-center items-center'>Dinosaurio Favorito</h2>
                    

                </div>

                <div className='w-5/12 flex justify-center items-center border-4 border-white'>
                    <h2 className='text-2xl text-white flex justify-center items-center'>parte2</h2>
                    <Cards/>
                </div>
            </section>
        </Section>
        
        <Footer>
            <footer className='bg-black w-full h-20 flex justify-center items-center'>
                <p className='text-1xl text-white'>Andrés Felipe Ladino Ocampo </p>
            </footer>
        </Footer>
    </div>
  )
}
