import './App.css';
import { Squares, IncrementButton, ReductionButton } from "./Squares";
import './components.css'

function App() {
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
  const squares_amount = Array.from({ length: count }, (_, index) => (
    <div key={index}>Element {index + 1}</div>
  ));
  return (
    <div className="App">
        <div className="parent">
          <div className="div1"> 
            <IncrementButton/>
            {squares_amount.map((index) => <Squares/>)}
            <ReductionButton/>
          </div>
          <div className="div2"> </div>
          <div className="div3"> </div>
        </div>
    </div>
  );
}

export default App;