import './App.css';
import { Squares, IncrementButton, ReductionButton } from "./Squares";
import './components.css'
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0); // Initial count

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  console.log(count);
  return (
    <div className="App">
        <div className="parent">
          <div className="div1"> 
            <IncrementButton onIncrement={handleIncrement}/>
            <Squares/>
            <ReductionButton/>
          </div>
          <div className="div2"> </div>
          <div className="div3"> </div>
        </div>
    </div>
  );
}

export default App;