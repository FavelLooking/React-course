import { Link } from 'react-router-dom';
import style from './App.module.scss';
import { FormTile } from './components/FormTile/FormTile';

function App() {
  return (
    <>
      <div className={style['form-selector']}>
        <h1>Select a Form</h1>
        <Link className={style['selector-button']} to="/controlled">
          Controlled Form
        </Link>
        <Link className={style['selector-button']} to="/uncontrolled">
          Uncontrolled Form
        </Link>
      </div>
      <div className={style['tile-wrapper']}>
        <h1 className={style['tile-title']}>Form Data:</h1>
        <FormTile />
      </div>
    </>
  );
}
export default App;
