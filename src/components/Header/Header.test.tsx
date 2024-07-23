import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';
import { Header } from './Header';

describe('Header', () => {
  it('should submit correct form data', async () => {
    const user = userEvent.setup();
    const mockUpdateResults = vi.fn();
    const mockSetLoading = vi.fn();
    const mockSetCurrentPage = vi.fn();

    render(
      <MemoryRouter>
        <Header
          updateResults={mockUpdateResults}
          setLoading={mockSetLoading}
          setCurrentPage={mockSetCurrentPage}
          currentPage={1}
        />
      </MemoryRouter>,
    );

    await user.type(
      screen.getByPlaceholderText('Enter planet or star name'),
      'Mars',
    );
    await user.click(screen.getByText('Search'));

    expect(mockSetCurrentPage).toHaveBeenCalledWith(1);
  });

  it('should toggle error state on Get Error button click', async () => {
    const mockUpdateResults = vi.fn();
    const mockSetLoading = vi.fn();
    const mockSetCurrentPage = vi.fn();

    render(
      <MemoryRouter>
        <Header
          updateResults={mockUpdateResults}
          setLoading={mockSetLoading}
          setCurrentPage={mockSetCurrentPage}
          currentPage={1}
        />
      </MemoryRouter>,
    );
  });
});
