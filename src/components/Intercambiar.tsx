import React from 'react'

const Intercambiar = () => {

    const intercambiarValores = (x: number,y: number) => {
        y= y - x;
        x= x + y;
        y = x - y;
    
        return [x,y];
    }

    let a=2;
    let b= 3;

    console.log(`x = ${a} , y = ${b}`);

    [a,b] = (intercambiarValores(a,b));
    console.log(`x = ${a} , y = ${b}`);

  return (
    <div>
      <h2> Valor Final intercambiado: {`x= ${a} , y= ${b}`}</h2>
    </div>
  )
}

export default Intercambiar;
