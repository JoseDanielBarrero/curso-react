import React from "react";

function useLocalStorage (itemName, initialValue){
    let parsedItems;
    const localStorageItems = localStorage.getItem(itemName);
    if(!localStorageItems)
    {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItems=initialValue;
      
    }
    else{
      parsedItems =  JSON.parse(localStorage.getItem(itemName))
    }
    const [items, setItems]= React.useState(parsedItems);
    
    const saveItems = (newItems) => {
      setItems(newItems)
      localStorage.setItem(itemName, JSON.stringify(newItems));
    }
  
    return [items, saveItems];
  }

export { useLocalStorage }