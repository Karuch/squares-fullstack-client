import { useState, useEffect } from 'react';

const request = async () => {
  try {
    const response = await fetch('http://localhost:5000/squares');
    const data = await response.json();
    return data[0].squares_amount;
  } catch (error) {
    console.error('An error occurred:', error);
  }
};


function Squares({count}) {
    console.log("being rendered");
    const [squaresCount, setSquaresCount] = useState(0); // Initialize with 0

    useEffect(() => {
      request().then(result => {
        // Set the squares count when the request completes
        setSquaresCount(result);
      });
    }, [count]);

    let color = "green";
    const squares_amount = Array.from({ length: squaresCount }, (_, index) => (
      <div key={index} className="square" style={{ backgroundColor: color }}></div>
    ));
  

    return (
      <>
        {squares_amount}
      </>
    );
}













function IncrementButton({ onIncrement }){
  const [count, setCount] = useState(1);
  const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
  };

  const request = async () => {
    await fetch('http://localhost:5000/increment', requestOptions);
    onIncrement();
    setCount(count + 1);
    console.log("was rendered");
}


  return(
    <>
      <button type="button" className="square" id="increment" 
      onClick={request} style={{backgroundColor: 'lightGreen'}}></button>
    </>
  );
}

function ReductionButton({ onReduction }){
  const [count, setCount] = useState(1);
  const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
  };

  const request = async () => {
    await fetch('http://localhost:5000/reduction', requestOptions);
    onReduction();
    setCount(count + 1);
    console.log("was rendered");
}


  return(
    <>
      <button type="button" className="square" id="reduction" 
      onClick={request} style={{backgroundColor: 'tomato'}}></button>
    </>
  );
}


export {IncrementButton, ReductionButton, Squares};
