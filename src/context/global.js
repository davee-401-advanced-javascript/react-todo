import React, {useEffect, useState} from 'react';

export const GlobalContext = React.createContext();

function Global(props){

  const [mode, setMode] = useState('');

  const[displayCompleted, setDisplayCompleted] = useState(true);

  const[itemsPerScreen, setItemsPerScreen] = useState(3);

  // this could be sorted by difficulty or assignee
  const [defaultSort, setDefaultSort] = useState('assignee');


  function changePagination(){
    setItemsPerScreen('new number')
  };


  const toggleMode = () => {
    setMode( mode === 'dark' ? 'light' : 'dark');
  }

  useEffect( () => {
    setMode(props.default);
  }, [props.default]);

  return (
    <GlobalContext.Provider value={{mode, toggleMode, displayCompleted, itemsPerScreen, defaultSort}}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export default Global;


// Create a context for managing application settings and provide this at the application level
// Display or Hide completed items (boolean)
// Number of items to display per screen (number)
// Default sort field (string)
// You may manually set (hard code) those state settings in the context provider during development