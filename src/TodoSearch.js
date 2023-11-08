import React from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {

  


  return (
    <input className='TodoSearch' placeholder='Cortar Cebolla' 
      value={searchValue}
      onChange={(event) =>{
        console.log(searchValue)
        setSearchValue(event.target.value)

    }}/>
  )
}

export  {TodoSearch}