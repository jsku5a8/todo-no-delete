import { useState } from 'react';

const Form = ({ texts, setTexts }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="form">
      <input
        type="text"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setTexts([...texts, { id: Math.random(), text: inputValue }]);
          setInputValue('');
        }}
      >
        ADD
      </button>
    </div>
  );
};

export default Form;
