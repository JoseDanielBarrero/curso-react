import React from 'react';
import './TodoItem.css';
import {AiOutlineCheckSquare} from 'react-icons/ai';
import {TiDelete} from 'react-icons/ti'

function TodoItem(props) {

    return(
      <li className='TodoItem'>
        <AiOutlineCheckSquare 
          className={`TodoItem__Check ${props.completed && "TodoItem__Check--completed"}`}
          onClick={props.onComplete}/>
        <span className={`TodoItem__Text ${props.completed && "TodoItem__Text--completed"}`}>{props.text}</span>
        <TiDelete className='TodoItem__DeleteButton'
          onClick={props.onDelete}
          >X</TiDelete>
      </li>
    );
  }

export {TodoItem}