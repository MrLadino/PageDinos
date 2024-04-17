import React from 'react';
import { Imagenes } from '../../js/Images';

const Cards = () => {
  return (
    <div>
      {Imagenes.map((imagen) => (
        <div key={imagen.id}>
          <img src={imagen.img} alt={imagen.description} />
          <h2>{imagen.date}</h2>
          <p>{imagen.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;