import styles from './Details.module.scss';
import stylesButton from '../Button/Button.module.scss';
import planet from './../../assets/images/Planet.gif';
import { useClicked } from '../../context/useClicked';
import { useTheme } from './../../context/useTheme';
import { useGetPlanetByIdQuery } from '../../services/planets';

interface DetailsProps {
  itemId: string;
  onClose: () => void;
  //setLoading: (isLoadingDetails: boolean) => void;
  //isLoadingDetails: boolean;
}

export function Details({ itemId, onClose }: DetailsProps) {
  const { resetClicked } = useClicked();
  const { isStandartTheme } = useTheme();
  const { data, error, isLoading } = useGetPlanetByIdQuery(itemId);

  const handleOnClose = () => {
    onClose();
    resetClicked();
  };

  if (isLoading) {
    return (
      <div className={styles[`main-content`]}>
        <div className={styles[`loader`]}>
          <img src={planet} alt="loader" />
        </div>
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
      <h2>{data.astronomicalObject.name}</h2>
      <p>{data.astronomicalObject.astronomicalObjectType}</p>
      <p>{data.astronomicalObject.location?.name || 'Unknown location'}</p>
      <button className={stylesButton.button} onClick={handleOnClose}>
        Close
      </button>
    </div>
  );
}
