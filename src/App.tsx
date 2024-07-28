import { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import styles from './App.module.scss';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Details } from './components/Details/Details';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store/store';
import { switchPage } from './store/pageSlice';
import { changeItemId } from './store/currentDetails';

export function App() {
  const { page } = useParams<{ page: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const totalPages = useSelector(
    (state: RootState) => state.pageSlice.totalPages,
  );
  const item = useSelector(
    (state: RootState) => state.currentDetails.currentId,
  );
  const currentPage = useSelector((state: RootState) => state.pageSlice.page);

  useEffect(() => {
    if (!page) {
      navigate('/search/1');
      return;
    }

    const pageNumber = parseInt(page, 10);

    if (
      isNaN(pageNumber) ||
      pageNumber <= 0 ||
      (totalPages && pageNumber > totalPages)
    ) {
      navigate('/not-found');
    } else {
      dispatch(switchPage(pageNumber));
    }
  }, [page, navigate, totalPages, dispatch]);

  const handleItemClick = (itemId: string) => {
    dispatch(changeItemId(itemId));
    navigate(`${location.pathname}&details=${itemId}`);
  };

  const handleCloseDetails = () => {
    dispatch(changeItemId(''));
    navigate(`/search/${currentPage}`);
  };

  return (
    <div className={styles['wrapper']} data-testid="app-wrapper">
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <div className={styles['main-content']} data-testid="main-content">
        <Main onItemClick={handleItemClick} hideDetails={handleCloseDetails} />
        {item && <Details onClose={handleCloseDetails} />}
      </div>
    </div>
  );
}
