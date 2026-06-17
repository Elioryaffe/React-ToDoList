import React, { useState } from 'react';
import Button from './Button';

function TodoInput({ onAdd }) {
  const [taskText, setTaskText] = useState("");

  const handleAddClick = () => {
    if (taskText != "") {
      onAdd(taskText);
      setTaskText(""); 
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        className="task-input"
        placeholder="הכנס מטלה חדשה..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      
      <Button text="הוסף" onClick={handleAddClick} />
    </div>
  );
}

export default TodoInput;