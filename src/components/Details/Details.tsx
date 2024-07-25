import styles from './Details.module.scss';
import stylesButton from '../Button/Button.module.scss';
import { useClicked } from '../../context/useClicked';
import { useTheme } from './../../context/useTheme';
import { useGetPlanetByIdQuery } from '../../services/planets';
import { Loader } from '../Loader/Loader';

interface DetailsProps {
  itemId: string;
  onClose: () => void;
}

export function Details({ itemId, onClose }: DetailsProps) {
  const { resetClicked } = useClicked();
  const { isStandartTheme } = useTheme();
  const { data, error, isLoading } = useGetPlanetByIdQuery(itemId);

  const handleOnClose = () => {
    onClose();
    resetClicked();
  };
  console.log(isLoading);

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
      <h2>{data.astronomicalObject.name}</h2>
      <p>{data.astronomicalObject.astronomicalObjectType}</p>
      <p>{data.astronomicalObject.location?.name || 'Unknown location'}</p>
      <button className={stylesButton.button} onClick={handleOnClose}>
        Close
      </button>
    </div>
  );
}
