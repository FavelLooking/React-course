import styles from './Pagination.module.scss';
import { useClicked } from '../../context/useClicked';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const handlePageChange = (page: number) => {
    if (page > 0 && page < totalPages + 1) {
      onPageChange(page);
    }
  };

  const { clicked } = useClicked();

  return (
    <div className={styles['pagination']}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={clicked || currentPage === 1}
      >
        Previous
      </button>
      <span>
        {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={clicked || currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}
