
import boxes from './boxes';
import React from 'react';
import './style.css'
import Box from './Box';

function App() {

  const [squares, setSquares] = React.useState(boxes)

  

  const squareElements = squares.map(square => (

    

    <Box key={square.id} on={square.on}  />

    

  ) )

  return (
        <main>
            <h1>Boxes will go here</h1>
            {squareElements}
        </main>
  );
}

export default App;
