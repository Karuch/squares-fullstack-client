const request = async () => {
  try {
    const response = await fetch('http://localhost:5000/squares');
    const data = await response.json();
    count = data[0].squares_amount;
  } catch (error) {
    console.error('An error occurred:', error);
  }
};
request()




function Squares({ count }) {
  const squares_amount = Array.from({ length: count }, (_, index) => (
    <div key={index}>Element {index + 1}</div>
  ));

  let color = "green";
  return (
    <>
      {squares_amount.map((index) => <div className="square" style={{backgroundColor: color}}></div>)}
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
  }
  onIncrement();
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
