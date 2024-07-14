import { useContext } from 'react';
import { ClickedContext } from '../context/context';

export const useClicked = () => {
  const context = useContext(ClickedContext);
  if (!context) {
    throw new Error('useClicked must be used within a ClickedProvider');
  }
  return context;
};
