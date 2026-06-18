import React, { useState } from 'react'
import TodoInput from '../components/TodoInput'
import './ToDoList.css';
import Button from '../components/Button'

function ToDoList() {
  const [items, setItems] = useState([]);
  const [filtering,setFiltering] = useState("All")

  const addNewItem = (newItemText) => {
    const newTodoObject = {
      id: Date.now(),
      text: newItemText,
      isCompleted: false 
    }
    setItems([...items, newTodoObject])
  };

  const deleteItem = (idToDelete) => {
    const updatedItems = items.filter((item) => item.id != idToDelete)
    setItems(updatedItems)
  };

  const toggleComplete = (idToToggle) => {
    const updatedItems = items.map((item) => {
      if (item.id == idToToggle) {
        return { ...item, isCompleted: !item.isCompleted }
      }
      return item
    });
    setItems(updatedItems)
  };

  const filteredItems = items.filter((item) => {
    if(filtering == "All")
        return true
    else if(filtering == "Active")
        return item.isCompleted == false
    else if(filtering == "Completed")
        return item.isCompleted == true
  })

  return (
    <div className="page-container">
      <h1>רשימת המטלות שלי</h1>
      
      <TodoInput onAdd={addNewItem} />

      
      <div className="filter-buttons" style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <Button text="כל המטלות " onClick={() => setFiltering("All")} />
        <Button text="מטלות פעילות" onClick={() => setFiltering("Active")} />
        <Button text="מטלות שבוצעו" onClick={() => setFiltering("Completed")} />
      </div>

      <div className="list-container">
        {filteredItems.map((item) => (
          <div key={item.id} className="list-item">
            
            <input 
              type="checkbox" 
              checked={item.isCompleted} 
              onChange={() => toggleComplete(item.id)} 
            />
            
           
            <span className={item.isCompleted ? "completed-text" : "regular-text"}>
              {item.text}
            </span>
            
            <Button text="מחק" className="delete-btn" onClick={() => deleteItem(item.id)} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ToDoList