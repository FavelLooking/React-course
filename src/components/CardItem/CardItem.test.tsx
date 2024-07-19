import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CardItem, ItemProps } from 'components/CardItem/CardItem';

const mockItem: ItemProps = {
  title: 'Galaxy NGC 1300',
  location: 'Orion Arm',
  astronomicalObjectType: 'Barred Spiral Galaxy',
  onClick: () => {},
};

describe('CardItem Component', () => {
  it('renders with correct title, location, and object type', () => {
    render(<CardItem {...mockItem} />);

    const titleElement = screen.getByText(/Name:/);
    expect(titleElement).toBeInTheDocument();
    expect(screen.getByText(/Galaxy NGC 1300/)).toBeInTheDocument();

    const locationElement = screen.getByText(/Location:/);
    expect(locationElement).toBeInTheDocument();
    expect(screen.getByText(/Orion Arm/)).toBeInTheDocument();

    const typeElement = screen.getByText(/Object Type:/);
    expect(typeElement).toBeInTheDocument();
    expect(screen.getByText(/Barred Spiral Galaxy/)).toBeInTheDocument();
  });

  it('renders with unknown location if location is not provided', () => {
    const itemWithoutLocation = { ...mockItem, location: undefined };
    render(<CardItem {...itemWithoutLocation} />);

    const locationElement = screen.getByText(/Location:/);
    expect(locationElement).toBeInTheDocument();
    expect(screen.getByText(/Unknown/)).toBeInTheDocument();
  });

  it('calls onClick handler when the card is clicked', () => {
    const handleClick = jest.fn();
    render(<CardItem {...mockItem} onClick={handleClick} />);
    const cardItemElement = screen.getByText(/Name:/);
    fireEvent.click(cardItemElement);
    expect(handleClick).toHaveBeenCalled();
  });
});
