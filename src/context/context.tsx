import React, { createContext, useContext, useState } from 'react';

interface ClickedContextType {
  clicked: boolean;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
  resetClicked: () => void;
}

const ClickedContext = createContext<ClickedContextType | undefined>(undefined);

export const ClickedProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [clicked, setClicked] = useState(false);

  const resetClicked = () => {
    setClicked(false);
  };

  return (
    <ClickedContext.Provider value={{ clicked, setClicked, resetClicked }}>
      {children}
    </ClickedContext.Provider>
  );
};

export const useClicked = () => {
  const context = useContext(ClickedContext);
  if (!context) {
    throw new Error('Error');
  }
  return context;
};
