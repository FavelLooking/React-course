import styles from './ReactHookForm.module.scss';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { DataState } from '../../store/dataSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useDispatch } from 'react-redux';
import { save } from '../../store/dataSlice';

export function ReactHookForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataState>();

  console.log(errors);

  const countries = useSelector(
    (state: RootState) => state.dataSlice.countries,
  );

  // const submit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  // };

  return (
    <div className={styles['form-container']}>
      <h1>React hook form Page</h1>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          const reactHookFormData = Object.assign(
            {
              isReactHookForm: true,
            },
            data,
          );
          dispatch(save(reactHookFormData));
          navigate('/');
        })}
      >
        <label>
          Name:
          <input {...register('userName')} type="text" />
        </label>
        <p>{errors.userName?.message}</p>
        <br />
        <label>
          Age:
          <input {...register('age')} type="number" />
        </label>
        <p>{errors.age?.message}</p>
        <br />
        <label>
          Email:
          <input {...register('email')} />
        </label>
        <br />
        <label>
          Password:
          <input {...register('password')} type="password" />
        </label>
        <br />
        <label>
          Confirm password:
          <input type="password" />
        </label>
        <br />
        <label>
          Select gender:
          <select {...register('gender')}>
            <option>Male</option>
            <option>Female</option>
          </select>
          <br />
        </label>
        <br />
        <label>
          Terms and Conditions:
          <input {...register('isChecked')} type="checkbox" />
        </label>
        <br />
        <label>
          Upload picture:
          <input type="file" />
        </label>
        <br />
        <label htmlFor="country">
          Choose your country:
          <input
            list="countries"
            id="country"
            autoComplete="off"
            {...register('country')}
          />
          <datalist id="countries">
            {countries.map((country) => (
              <option key={country}>{country}</option>
            ))}
          </datalist>
          <br />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
