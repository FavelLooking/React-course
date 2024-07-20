import { render, screen } from '@testing-library/react';

import { CardItem } from './CardItem';

describe('Card Item', () => {
  it('renders headline', () => {
    render(
      <CardItem
        title="Mars"
        astronomicalObjectType="Meteor"
        onClick={() => {}}
      />,
    );

    screen.debug();
  });
});
