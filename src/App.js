import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  
  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const wordCount = text.split(' ').filter(word => word !== '').length;

  return (
    <div className="App">
      <h1>Responsive Paragraph Word Counter</h1>
      <textarea
        value={text}
        onChange={handleInputChange}
        rows="5"
        placeholder="Type your text here..."
      />
      <p>Word Count: {wordCount}</p>
    </div>
  );
}

export default App;
