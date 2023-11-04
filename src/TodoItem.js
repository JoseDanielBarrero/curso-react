import React from 'react'

function renderCompleted(completed) {
    if(completed)
    {
        return (<span>VVV</span>)
    }
    return(<span>V</span>)
}
function TodoItem(props) {
    return(
      <li>
        {renderCompleted(props.completed)}
        <p>{props.text}</p>
        <span>X</span>
      </li>
    );
  }

export {TodoItem}