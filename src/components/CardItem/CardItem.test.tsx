import { render, screen, fireEvent } from '@testing-library/react';

import { CardItem } from './CardItem';

const defaultProps = {
  title: 'Test Title',
  location: 'Test Location',
  astronomicalObjectType: 'Planet',
  onClick: vi.fn(),
};

describe('Card Item', () => {
  it('renders the title correctly', () => {
    render(<CardItem {...defaultProps} />);
    expect(screen.getByText('Name:')).toBeInTheDocument();
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
  });

  it('renders the location correctly', () => {
    render(<CardItem {...defaultProps} />);
    expect(screen.getByText('Location:')).toBeInTheDocument();
    expect(screen.getByText(defaultProps.location)).toBeInTheDocument();
  });

  it('renders "Unknown" when location is not provided', () => {
    const propsWithoutLocation = { ...defaultProps, location: '' };
    render(<CardItem {...propsWithoutLocation} />);
    expect(screen.getByText('Location:')).toBeInTheDocument();
    expect(screen.getByText('Unknown')).toBeInTheDocument();
  });

  it('renders the astronomicalObjectType correctly', () => {
    render(<CardItem {...defaultProps} />);
    expect(screen.getByText('Object Type:')).toBeInTheDocument();
    expect(
      screen.getByText(defaultProps.astronomicalObjectType),
    ).toBeInTheDocument();
  });

  it('applies correct class based on title length', () => {
    const longTitle =
      'This is a very long title that exceeds thirty characters';
    const propsWithLongTitle = { ...defaultProps, title: longTitle };
    render(<CardItem {...propsWithLongTitle} />);
    const titleElement = screen.getByText(longTitle);

    expect(titleElement.className).toMatch(/title-small/);
  });

  it('calls onClick when the card is clicked', () => {
    render(<CardItem {...defaultProps} />);
    fireEvent.click(screen.getByText(defaultProps.title));
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });
});
