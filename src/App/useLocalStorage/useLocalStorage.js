import React from "react";

function useLocalStorage (itemName, initialValue){
    let parsedItems;
    const localStorageItems = localStorage.getItem(itemName);
    const [items, setItems]= React.useState(initialValue);
    const [loading, setLoading]= React.useState(true);
    const [error, setError]= React.useState(false);

    React.useEffect(()=>{
      setTimeout(() => {
          try {
            console.log(localStorageItems);
            if(!localStorageItems)
            {
              localStorage.setItem(itemName, JSON.stringify(initialValue));
              parsedItems=initialValue;
            }
            else{
              console.log("segunda ",localStorageItems);
              parsedItems =  JSON.parse(localStorage.getItem(itemName));
              saveItems(parsedItems)
            }
            setLoading(false);
          }
          catch(e){
            setLoading(false);
            setError(true);
          }
      },500)
      
    },[])
    
    
    
    const saveItems = (newItems) => {
      setItems(newItems)
      localStorage.setItem(itemName, JSON.stringify(newItems));
    }
  
    return {
      items,
      saveItems,
      loading,
      error};
  }

export { useLocalStorage }