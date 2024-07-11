import './CardItem.css';
import ItemProps from '../../interfaces/interfaces';

export default function CardItem(props: ItemProps) {
  const { title, location } = props;

  return (
    <div className="card-item">
      <span className="name-title">
        Name: <span className="title">{title}</span>
      </span>

      {location && (
        <span className="location-title">
          Location: <span className="location">{location}</span>
        </span>
      )}

      {!location && (
        <span className="location-title">
          Location: <span className="location">Unknown</span>
        </span>
      )}
    </div>
  );
}
