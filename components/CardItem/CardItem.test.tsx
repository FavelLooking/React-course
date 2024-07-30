import { render, screen, fireEvent } from '@testing-library/react';
import { CardItem } from './CardItem';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

const defaultProps = {
  title: 'Test Title',
  location: 'Test Location',
  astronomicalObjectType: 'Planet',
  isSelect: false,
  onClick: vi.fn(),
};

describe('CardItem', () => {
  it('renders the title correctly', () => {
    render(
      <Provider store={store}>
        <CardItem {...defaultProps} />
      </Provider>,
    );
  });

  it('renders the location correctly', () => {
    render(
      <Provider store={store}>
        <CardItem {...defaultProps} />
      </Provider>,
    );
    expect(screen.getByText('Location:')).toBeInTheDocument();
    expect(screen.getByText(defaultProps.location)).toBeInTheDocument();
  });

  it('renders "Unknown" when location is not provided', () => {
    const propsWithoutLocation = { ...defaultProps, location: '' };
    render(
      <Provider store={store}>
        <CardItem {...propsWithoutLocation} />
      </Provider>,
    );
    expect(screen.getByText('Location:')).toBeInTheDocument();
    expect(screen.getByText('Unknown')).toBeInTheDocument();
  });

  it('renders the astronomicalObjectType correctly', () => {
    render(
      <Provider store={store}>
        <CardItem {...defaultProps} />
      </Provider>,
    );
    expect(screen.getByText('Object Type:')).toBeInTheDocument();
    expect(
      screen.getByText(defaultProps.astronomicalObjectType),
    ).toBeInTheDocument();
  });

  it('applies correct class based on title length', () => {
    const longTitle =
      'This is a very long title that exceeds thirty characters';
    const propsWithLongTitle = { ...defaultProps, title: longTitle };
    render(
      <Provider store={store}>
        <CardItem {...propsWithLongTitle} />
      </Provider>,
    );
    const titleElement = screen.getByText(longTitle);

    expect(titleElement.className).toMatch(/title-small/);
  });

  it('calls onClick when the card is clicked', () => {
    render(
      <Provider store={store}>
        <CardItem {...defaultProps} />
      </Provider>,
    );
    fireEvent.click(screen.getByText(defaultProps.title));
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });
});
