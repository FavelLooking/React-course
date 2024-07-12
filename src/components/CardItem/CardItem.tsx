import './CardItem.css';
import ItemProps from '../../interfaces/interfaces';

export default function CardItem(props: ItemProps) {
  const { title, location, astronomicalObjectType } = props;

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
      <span className="type-title">
        Object Type: <span className="type">{astronomicalObjectType}</span>
      </span>
    </div>
  );
}
