import styles from './ReactHookForm.module.scss';
// import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { DataState } from '../../store/dataSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export function ReactHookForm() {
  // const navigate = useNavigate();
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
  //   navigate('/');
  // };

  return (
    <div className={styles['form-container']}>
      <h1>React hook form Page</h1>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <label>
          Name:
          <input
            {...(register('userName'), { required: true, minLength: 3 })}
            type="text"
          />
        </label>
        <p>{errors.userName?.message}</p>
        <br />
        <label>
          Age:
          <input
            {...(register('age'), { required: true, min: 0 })}
            type="number"
          />
        </label>
        <p>{errors.age?.message}</p>
        <br />
        <label>
          Email:
          <input {...(register('email'), { type: 'email' })} />
        </label>
        <br />
        <label>
          Password:
          <input {...register('password')} type="password" />
        </label>
        <br />
        <label>
          Password:
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
          <input {...register('file')} type="file" />
        </label>
        <br />
        <label htmlFor="country">
          Choose your country:
          <input
            list="countries"
            id="country"
            name="country"
            autoComplete="off"
          />
          <datalist id="countries" {...register('country')}>
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
