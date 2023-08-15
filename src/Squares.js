import { useState, useEffect } from 'react';

let count = 40; // 193 should be max otherwise out of div + should be determine in PSQL
const request = async () => {
  try {
    const response = await fetch('http://localhost:5000/squares');
    const data = await response.json();
    return data[0].squares_amount;
  } catch (error) {
    console.error('An error occurred:', error);
  }
};


function Squares() {
    const [squaresCount, setSquaresCount] = useState(0); // Initialize with 0

    useEffect(() => {
      request().then(result => {
        // Set the squares count when the request completes
        setSquaresCount(result);
      });
    }, []);

    let color = "green";
    const squares_amount = Array.from({ length: squaresCount }, (_, index) => (
      <div key={index} className="square" style={{ backgroundColor: color }}></div>
    ));
  

    return (
      <>
        {squares_amount}
        <button
          type="button"
          onClick={() => setSquaresCount(0)}
        >Blue</button>
      </>
    );
}













function IncrementButton({ onIncrement }){
  const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
  };

  const request = async () => {
    fetch('http://localhost:5000/increment', requestOptions)
    onIncrement();
    console.log("was rendered");
  }

  return(
    <button type="button" className="square" id="increment" 
    onClick={request} style={{backgroundColor: 'lightGreen'}}></button>
  );
}

function ReductionButton(){
  const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
  };

  const request = async () => {
    fetch('http://localhost:5000/reduction', requestOptions)
  }

  return(
    <button type="button" className="square" id="reduction" 
    onClick={request} style={{backgroundColor: 'tomato'}}></button>
  );
}

export {Squares, IncrementButton, ReductionButton};
