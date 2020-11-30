import React, {useEffect, useState} from 'react';

export const GlobalContext = React.createContext();

function Global(props){

  const [mode, setMode] = useState('');

  const[displayCompleted, setDisplayCompleted] = useState(false);

  const[itemsPerScreen, setItemsPerScreen] = useState(3);

  // this could be sorted by difficulty or assignee
  const [defaultSort, setDefaultSort] = useState('difficulty');

  const paginationLogic = () => {
      //do we put the pagination logic here?
      //
      //Only display the first n items in the list, where n is the number to display per screen in your context.
      // If you have more than n items in the list, add a button labeled Next that will replace the list with the next n items in the list.
      // If you are past the first n items (i.e. on page 2 or higher), add a button labeled Previous that will replace the list with the previous n items in the list.

  }

  const toggleMode = () => {
    setMode( mode === 'dark' ? 'light' : 'dark');
  }

  useEffect( () => {
    setMode(props.default);
  }, [props.default]);

  return (
    <GlobalContext.Provider value={{mode, toggleMode, itemsPerScreen, defaultSort}}>
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