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
    const squares_amount = Array.from({ length: request() }, (_, index) => (
      <div key={index}>Element {index + 1}</div>
    ));
  
    useEffect(() => {
      async function fetchData() {
        const amount = await request();
        setCount(amount);
      }
      fetchData();
    }, []);

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
