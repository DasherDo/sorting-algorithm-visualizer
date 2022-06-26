import VisualizeArray from './components/Main/VisualizeArray'
import React, { useState } from 'react';
import Header from './components/Header/Header'


function App() {

  const [arrayLength, setArrayLength] = useState(25)

  const handleLengthChange = (length) => {
    setArrayLength(length)
  };

  return (
    <div className="App">
      <Header handleLengthChange={handleLengthChange}/>
      <VisualizeArray len={arrayLength}/>
    </div>
  );
}

export default App;
