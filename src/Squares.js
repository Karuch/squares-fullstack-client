function Squares() {
    let color = "green";
    return (
        <div className="square" style={{backgroundColor: color}}></div>
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
