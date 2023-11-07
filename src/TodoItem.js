import React from 'react';
import './TodoItem.css';


function TodoItem(props) {
    return(
      <li className='TodoItem'>
        <span className={`TodoItem__Check ${props.completed && "TodoItem__Check--completed"}`}>V</span>
        <span className='TodoItem__Text'>{props.text}</span>
        <span className='TodoItem__DeleteButton'>X</span>
      </li>
    );
  }

export {TodoItem}