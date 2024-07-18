import { useEffect, useState } from 'react';
import './Details.css';
import { AstronomicalObject } from '../../interfaces/interfaces';
import planet from './../../assets/images/Planet.gif';
import { useClicked } from '../../context/useClicked';

interface DetailsProps {
  itemId: string;
  onClose: () => void;
  setLoading: (isLoading: boolean) => void;
  isLoading: boolean;
}

export function Details({
  itemId,
  onClose,
  setLoading,
  isLoading,
}: DetailsProps) {
  const [itemDetails, setItemDetails] = useState<AstronomicalObject | null>(
    null,
  );
  const { resetClicked } = useClicked();

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://stapi.co/api/v2/rest/astronomicalObject?uid=${itemId}`,
        );
        const data = await response.json();
        setItemDetails(data.astronomicalObject);
      } catch (error) {
        console.error('Error fetching details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [itemId, setLoading]);

  const handleOnClose = () => {
    onClose();
    resetClicked();
  };

  if (isLoading) {
    return (
      <div className="main-content">
        <div className="loader">
          <img src={planet} alt="loader" />
        </div>
      </div>
    );
  }

  if (!itemDetails) {
    return null;
  }

  return (
    <div className="details">
      <h2>{itemDetails.name}</h2>
      <p>{itemDetails.astronomicalObjectType}</p>
      <p>{itemDetails.location?.name || 'Unknown location'}</p>
      <button onClick={handleOnClose}>Close</button>
    </div>
  );
}
