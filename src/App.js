import React, { useState } from 'react'
import ColorBlock from './ColorBlock'
import ColorForm from './ColorForm'

function App() {
  let [colors, setColors] = useState([
    'violet',
    'blue',
    'lightblue',
    'green',
    'greenyellow',
    'yellow',
    'orange',
    'red'
  ]);

  let colorMap = colors.map((color, i) => {
    return <ColorBlock key={i} color={color} />;
  });

  const addColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  return (
    <div className="App">
      {colorMap}
      {/* Render ColorForm component and pass addColor function as a prop */}
      <ColorForm addColor={addColor} />
    </div>
  );
}

export default App;
