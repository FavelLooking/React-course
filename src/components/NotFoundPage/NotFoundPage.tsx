import styles from './NotFoundPage.module.scss';

export function NotFoundPage() {
  return (
    <div className={styles['not-found-page']} data-testid="not-found-page">
      <h1>Lost in space?</h1>
      <p>
        No problem, just navigate back to the homepage or explore the stars from
        our menu.
      </p>
    </div>
  );
}
