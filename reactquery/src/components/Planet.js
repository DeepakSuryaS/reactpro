import React from 'react'

const Planet = ({ planet }) => {
  return (
    <div className='card'>
      <h3>{ planet.name }</h3>
      <p>Gender - { planet.gender }</p>
      <p>Birth year - { planet.birth_year }</p>
    </div>
  );
}

export default Planet