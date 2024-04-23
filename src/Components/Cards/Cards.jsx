import React from 'react';
import { Imagenes } from '../../js/Images';

const Cards = () => {
  return (
    <div>
      {Imagenes.map((imagen) => (
        <div key={imagen.id}>
          <h2 className='text-white text-2xl p-5'>{imagen.dinoName}</h2>
          <img className='w-7/12 h-60 p-5' src={imagen.img} alt={imagen.description} />
          <p className='text-white p-5'>{imagen.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;