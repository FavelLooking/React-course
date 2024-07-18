import './CardItem.css';

export interface ItemProps {
  title: string;
  location?: string;
  astronomicalObjectType: string;

  onClick: () => void;
}

export function CardItem(props: ItemProps) {
  const { title, location, astronomicalObjectType, onClick } = props;

  return (
    <div className="card-item" onClick={onClick}>
      <span className="name-title">
        Name:{' '}
        <span className={title.length > 30 ? 'title-small' : 'title'}>
          {title}
        </span>
      </span>

      {location && (
        <span className="location-title">
          Location:{' '}
          <span
            className={location.length > 20 ? 'location-small' : 'location'}
          >
            {location}
          </span>
        </span>
      )}

      {!location && (
        <span className="location-title">
          Location: <span className="location">Unknown</span>
        </span>
      )}
      <span className="type-title">
        Object Type:{' '}
        <span
          className={astronomicalObjectType.length > 20 ? 'type-small' : 'type'}
        >
          {astronomicalObjectType}
        </span>
      </span>
    </div>
  );
}
