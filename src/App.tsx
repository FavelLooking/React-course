import { Link } from 'react-router-dom';
import style from './App.module.scss';
import { FormTile } from './components/FormTile/FormTile';

function App() {
  return (
    <>
      <div className={style['form-selector']}>
        <h1>Select a Form</h1>
        <button className={style['selector-button']}>
          <Link to="/controlled">Controlled Form</Link>
        </button>
        <button className={style['selector-button']}>
          <Link to="/uncontrolled">Uncontrolled Form</Link>
        </button>
      </div>
      <div className={style['tile-wrapper-uncontrolled']}>
        <h1>Uncontrolled Forms</h1>
        <FormTile />
      </div>
    </>
  );
}
export default App;
