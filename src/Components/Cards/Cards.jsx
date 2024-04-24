import React from 'react';
import { Imagenes } from '../../js/Images';

const Cards = () => {
  return (
    <div>
      {Imagenes.map((imagen) => (
            <div key={imagen.id}>
              <h2 className='text-white text-2xl p-5'>{imagen.dinoName}</h2>
              <div className='flex items-center'>
                <img className='w-5/12 h-40 p-3' src={imagen.img} alt={imagen.description} />
                <p className='text-white text-1xl p-3'>{imagen.description}</p>
              </div>
            </div> 
      ))}
    </div>
  );
};

export default Cards;