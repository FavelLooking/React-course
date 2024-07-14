import './Pagination.css';
import { useClicked } from '../../context/useClicked';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
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
    <div className="pagination">
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
