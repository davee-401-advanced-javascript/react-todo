import React, { useEffect, useState } from 'react';

export const SettingsContext = React.createContext();

function Settings(props) {
  const [mode, setMode] = useState('');

  const [displayCompleted, setDisplayCompleted] = useState(true);

  const [itemsPerScreen, setItemsPerScreen] = useState(3);

  // this could be sorted by difficulty or assignee
  const [defaultSort, setDefaultSort] = useState('assignee');

  function changePagination() {
    setItemsPerScreen('new number');
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
        itemsPerScreen,
        defaultSort,
      }}
    >
      {props.children}
    </SettingsContext.Provider>
  );
}

export default Settings;
