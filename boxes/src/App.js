
import boxes from './boxes';
import React from 'react';
import './style.css'
import Box from './Box';

function App() {

  const [squares, setSquares] = React.useState(boxes)


  function toggle(id) {
    setSquares(prevSquares => {
        return prevSquares.map((square) => {
            return square.id === id ? {...square, on: !square.on} : square
        })
    })
}
  

  const squareElements = squares.map(square => (

    

    <Box key={square.id} on={square.on} id={square.id} handleClick={toggle}/>

    

  ) )

  

  return (
        <main>
            <h1>Boxes will go here</h1>
            {squareElements}
        </main>
  );
}

export default App;
