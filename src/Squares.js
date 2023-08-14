let count = 40; // 193 should be max otherwise out of div + should be determine in PSQL
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
console.log(count, "after count"); //can't because the function which change count is async and change after count being rendered so it stays 0





function Squares() {
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













function IncrementButton(){
  const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
  };

  const request = async () => {
    fetch('http://localhost:5000/increment', requestOptions)
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
