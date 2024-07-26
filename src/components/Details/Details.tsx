import styles from './Details.module.scss';
import stylesButton from '../Button/Button.module.scss';
import { useClicked } from '../../context/useClicked';
import { useTheme } from './../../context/useTheme';
import { useGetPlanetByIdQuery } from '../../services/planets';
import { Loader } from '../Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { changeDetails } from '../../store/currentDetails';
import { RootState } from '../../store/store';

interface DetailsProps {
  itemId: string;
  onClose: () => void;
}

export function Details({ itemId, onClose }: DetailsProps) {
  const { resetClicked } = useClicked();
  const { isStandartTheme } = useTheme();
  const { data, error, isLoading } = useGetPlanetByIdQuery(itemId);
  const dispatch = useDispatch();

  const cachedData = useSelector(
    (state: RootState) => state.currentDetails.details,
  );

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
  }, [itemId, data]);

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
    console.error('Error fetching details:', error);
  }

  if (!data) {
    return null;
  }

  return (
    <div
      className={`${styles[`details`]} ${!isStandartTheme ? styles[`alternative`] : ''}`}
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
