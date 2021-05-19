import React, { useEffect, useState } from 'react';

export const SettingsContext = React.createContext();

function Settings(props) {
  const [mode, setMode] = useState('');

  const [itemsPerScreen, setItemsPerScreen] = useState(3);
  const [displayCompleted, setDisplayCompleted] = useState(true);
  // this could be sorted by difficulty or assignee
  const [defaultSort, setDefaultSort] = useState('difficulty');

  function changeDisplayCompleted(boolean) {
    setDisplayCompleted(boolean);
  }

  function changeitemsPerScreen(num) {
    setItemsPerScreen(num);
  }

  function changeDefaultSort(sortby) {
    setDefaultSort(sortby);
  }

  const toggleMode = () => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    setMode(props.default);
  }, [props.default]);

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
