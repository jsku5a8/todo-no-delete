import './App.css';
import { useState } from 'react';
import Form from './componets/form/Form';
import List from './componets/list/List';

function App() {
  const [texts, setTexts] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <Form texts={texts} setTexts={setTexts} />
        <List texts={texts} />
      </header>
    </div>
  );
}

export default App;
