import './App.css';
import { Squares, IncrementButton, ReductionButton } from "./Squares";
import './components.css'

function App() {
  return (
    <div className="App">
        <div className="parent">
          <div className="div1"> 
            <IncrementButton/>
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