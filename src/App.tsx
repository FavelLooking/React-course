import { Link } from 'react-router-dom';
import style from './App.module.scss';
// import { useSelector } from 'react-redux';
// import { RootState } from './store/store';

function App() {
  // const uncontrolledFormsData = useSelector((state: RootState) => {
  //   state.dataUncontrolledSlice.formData;
  // });
  // console.log(uncontrolledFormsData);

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
    </>
  );
}
export default App;
