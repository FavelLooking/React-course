import styles from './Details.module.scss';
import stylesButton from '../Button/Button.module.scss';
import { useClicked } from '../../src/context/useClicked';
import { useTheme } from './../../src/context/useTheme';
import { useGetPlanetByIdQuery } from '../../src/services/planets';
import { Loader } from '../Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { changeDetails } from '../../src/store/currentDetails';
import { RootState } from '../../src/store/store';
import React from 'react';

interface DetailsProps {
  onClose: () => void;
}

export function Details({ onClose }: DetailsProps) {
  const item = useSelector(
    (state: RootState) => state.currentDetails.currentId,
  );
  const cachedData = useSelector(
    (state: RootState) => state.currentDetails.details,
  );
  const { resetClicked } = useClicked();
  const { isStandartTheme } = useTheme();
  const { data, error, isLoading } = useGetPlanetByIdQuery(item);

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(
        changeDetails({
          name: data.astronomicalObject.name,
          location: data.astronomicalObject.location
            ? data.astronomicalObject.location.name
            : 'Unknown location',
          type: data.astronomicalObject.astronomicalObjectType,
        }),
      );
    }
  }, [item, data, dispatch]);

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

  if (error) {
    return <div>Error</div>;
  }

  if (!data) {
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
