import styles from './Details.module.scss';
import stylesButton from '../Button/Button.module.scss';
import { useClicked } from '../../src/context/useClicked';
import { useTheme } from './../../src/context/useTheme';
import { useGetPlanetByIdQuery } from '../../src/services/planets';
import { Loader } from '../Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { changeDetails } from '../../src/store/currentDetails';
import { RootState } from '../../src/store/store';
import React from 'react';
import { ApiResponse } from '../../src/interfaces/interfaces';

interface DetailsProps {
  onClose: () => void;
  serversideData: ApiResponse;
}

export function Details({ onClose, serversideData }: DetailsProps) {
  const item = useSelector(
    (state: RootState) => state.currentDetails.currentId,
  );
  const cachedData = useSelector(
    (state: RootState) => state.currentDetails.details,
  );
  const { resetClicked } = useClicked();
  const { isStandartTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (serversideData && serversideData.astronomicalObjects && item) {
      const selectedObject = serversideData.astronomicalObjects.find(
        (obj) => obj.uid === item,
      );

      if (selectedObject) {
        dispatch(
          changeDetails({
            name: selectedObject.name,
            location: selectedObject.location
              ? selectedObject.location.name
              : 'Unknown location',
            type: selectedObject.astronomicalObjectType,
          }),
        );
        setIsLoading(false);
      }
    }
  }, [item, serversideData, dispatch]);

  const handleOnClose = () => {
    onClose();
    resetClicked();
  };

  if (isLoading) {
    return (
      <div className={styles[`main-content`]}>
        <Loader />
      </div>
    );
  }

  if (!serversideData) {
    return null;
  }

  return (
    <div
      className={`${styles.details} ${!isStandartTheme ? styles.alternative : ''}`}
    >
      <h2>{cachedData.name}</h2>
      <p>{cachedData.type}</p>
      <p>{cachedData.location}</p>
      <button className={stylesButton.button} onClick={handleOnClose}>
        Close
      </button>
    </div>
  );
}
