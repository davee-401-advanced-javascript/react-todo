import React, { useEffect, useState } from 'react';

export const SettingsContext = React.createContext();

function Settings(props) {
  const [mode, setMode] = useState('');

  const [itemsPerScreen, setItemsPerScreen] = useState(null);
  const [displayCompleted, setDisplayCompleted] = useState(null);
  const [defaultSort, setDefaultSort] = useState('');

  function changeitemsPerScreen(num) {
    setItemsPerScreen(num);
  }

  function changeDisplayCompleted(boolean) {
    setDisplayCompleted(boolean);
  }

  function changeDefaultSort(sortby) {
    setDefaultSort(sortby);
  }

  const toggleMode = () => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  };

  return (
    <SettingsContext.Provider
      value={{
        mode,
        toggleMode,
        displayCompleted,
        changeDisplayCompleted,
        itemsPerScreen,
        changeitemsPerScreen,
        defaultSort,
        changeDefaultSort,
      }}
    >
      {props.children}
    </SettingsContext.Provider>
  );
}

export default Settings;
