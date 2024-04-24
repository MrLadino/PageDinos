import  IndominusRex from '../../Assets/IndominusRex.jpg'
import React from 'react'

export const Card2 = () => {
  return (
    <div className='w-5/12 h-4/6 bg-cyan-800 flex justify-center items-center border-4 border-white flex-col'>
        <h2 className='text-3xl text-white flex justify-center items-center mb-7 mt-4'>Dinosaurio Favorito</h2>
        <h3 className='text-white text-2xl'>IndominusRex:</h3>
        <img className='w-6/6 h-72 p-3' src={IndominusRex} alt='Indominus Rex' />
        <p className='p-11 text-white'>Este depredador gigante se caracteriza por su tamaño imponente, que puede superar los 15 metros de longitud, y su piel cubierta de escamas gruesas que varían en color de gris a blanco, lo que le permite camuflarse en su entorno. Con una mandíbula llena de dientes afilados y curvados, garras poderosas en sus extremidades, y una inteligencia excepcional, el Indominus rex es un depredador formidable y adaptable, capaz de planear estrategias de caza y representar una grave amenaza para cualquier criatura que se cruce en su camino.</p>
    </div>
  )
}
