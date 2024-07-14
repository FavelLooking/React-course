import React, { createContext, useState } from 'react';

export interface ClickedContextType {
  clicked: boolean;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
  resetClicked: () => void;
}

export const ClickedContext = createContext<ClickedContextType | undefined>(
  undefined,
);

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
