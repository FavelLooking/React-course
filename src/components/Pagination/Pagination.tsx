import styles from './Pagination.module.scss';
import stylesButton from '../Button/Button.module.scss';
import { useClicked } from '../../context/useClicked';
import { useTheme } from './../../context/useTheme';
import { useDispatch, useSelector } from 'react-redux';
import { nextPage, previousPage } from '../../store/pageSlice';
import { RootState } from 'src/store/store';
import { useNavigate } from 'react-router-dom';

export function Pagination() {
  const { clicked } = useClicked();
  const { isStandartTheme } = useTheme();
  const dispatch = useDispatch();
  const currentPage = useSelector((state: RootState) => state.pageSlice.page);
  const totalPages = useSelector(
    (state: RootState) => state.pageSlice.totalPages,
  );
  const navigate = useNavigate();

  return (
    <div
      className={`${styles.pagination} ${!isStandartTheme ? styles.alternative : ''}`}
    >
      <button
        className={stylesButton.button}
        onClick={() => {
          dispatch(previousPage());
          navigate(`/search/${currentPage - 1}`);
        }}
        disabled={clicked || currentPage === 1}
      >
        Previous
      </button>
      <span>
        {currentPage} of {totalPages}
      </span>
      <button
        className={stylesButton.button}
        onClick={() => {
          dispatch(nextPage());
          navigate(`/search/${currentPage + 1}`);
        }}
        disabled={clicked || currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}
