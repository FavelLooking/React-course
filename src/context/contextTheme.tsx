import React, { createContext, useState, ReactNode } from 'react';

export interface ThemeContextType {
  isStandartTheme: boolean;
  changeTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  isStandartTheme: true,
  changeTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isStandartTheme, setAnotherTheme] = useState(true);

  const changeTheme = () => {
    setAnotherTheme((prevTheme) => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={{ isStandartTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
