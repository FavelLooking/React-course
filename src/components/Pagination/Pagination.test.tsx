import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from './Pagination';
import { jest } from '@jest/globals';

describe('Pagination component', () => {
  const mockOnPageChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('disables Previous button on first page', () => {
    render(
      <Pagination
        currentPage={1}
        totalPages={5}
        onPageChange={mockOnPageChange}
      />,
    );

    const previousButton = screen.getByRole('button', {
      name: /previous/i,
    }) as HTMLButtonElement;
    const nextButton = screen.getByRole('button', {
      name: /next/i,
    }) as HTMLButtonElement;

    expect(previousButton.disabled).toBe(true);
    expect(nextButton.disabled).toBe(false);
  });

  it('disables Next button on last page', () => {
    render(
      <Pagination
        currentPage={5}
        totalPages={5}
        onPageChange={mockOnPageChange}
      />,
    );

    const previousButton = screen.getByRole('button', {
      name: /previous/i,
    }) as HTMLButtonElement;
    const nextButton = screen.getByRole('button', {
      name: /next/i,
    }) as HTMLButtonElement;

    expect(previousButton.disabled).toBe(false);
    expect(nextButton.disabled).toBe(true);
  });

  it('calls onPageChange with correct page number on button click', () => {
    render(
      <Pagination
        currentPage={3}
        totalPages={5}
        onPageChange={mockOnPageChange}
      />,
    );

    const previousButton = screen.getByRole('button', { name: /previous/i });
    const nextButton = screen.getByRole('button', { name: /next/i });

    fireEvent.click(previousButton);
    fireEvent.click(nextButton);

    expect(mockOnPageChange).toHaveBeenCalledWith(2);
    expect(mockOnPageChange).toHaveBeenCalledWith(4);
  });
});
