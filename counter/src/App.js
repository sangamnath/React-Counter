
import './App.css';
import React from "react"
import './style.css';

function App() {

const [count, setCount] = React.useState(0)

function add(){
  setCount(prevCount => prevCount + 1);
}
function subtract(){
  setCount(prevCount => prevCount - 1);
}

  return (
    <div className="App">
      <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
     </div>
  );
}

export default App;
