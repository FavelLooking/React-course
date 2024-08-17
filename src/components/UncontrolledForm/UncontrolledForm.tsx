import styles from './UncontrolledForm.module.scss';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useDispatch } from 'react-redux';
import { save } from '../../store/dataSlice';
import { validationSchema } from '../../utils/yup/index';
import * as Yup from 'yup';

export function UncontrolledForm() {
  const inputName = useRef<HTMLInputElement>(null);
  const inputAge = useRef<HTMLInputElement>(null);
  const inputEmail = useRef<HTMLInputElement>(null);
  const inputPassword = useRef<HTMLInputElement>(null);
  const inputPasswordValidation = useRef<HTMLInputElement>(null);
  const inputGender = useRef<HTMLInputElement>(null);
  const inputCheckbox = useRef<HTMLInputElement>(null);
  const inputFile = useRef<HTMLInputElement>(null);
  const inputCountry = useRef<HTMLSelectElement>(null);

  const countries = useSelector(
    (state: RootState) => state.dataSlice.countries,
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = {
      userName: inputName.current?.value,
      age: inputAge.current?.value as unknown as number,
      email: inputEmail.current?.value,
      password: inputPassword.current?.value,
      confirmPassword: inputPasswordValidation.current?.value,
      gender: inputGender.current?.value,
      isChecked: inputCheckbox.current?.checked as boolean,
      file: inputFile.current?.files?.[0].name,
      country: inputCountry.current?.value,
      isReactHookForm: false,
    };

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      console.log('Valid data:', formData);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          console.error(error.path, error.message);
        });
      }
    }

    dispatch(save(formData));
    navigate('/');
  };

  return (
    <div className={styles['form-container']}>
      <h1>Uncontrolled Form Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" ref={inputName} name="username" />
        </label>
        <br />
        <label>
          Age:
          <input type="number" ref={inputAge} name="age" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" ref={inputEmail} name="email" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" ref={inputPassword} name="password" />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            ref={inputPasswordValidation}
            name="confirmPassword"
          />
        </label>
        <br />
        <label>
          Gender:
          <div>
            <label>
              Male
              <input
                type="checkbox"
                ref={inputGender}
                name="gender"
                value="male"
              />
            </label>
            <label>
              Female
              <input
                type="checkbox"
                ref={inputGender}
                name="gender"
                value="female"
              />
            </label>
          </div>
        </label>
        <br />
        <label>
          Terms and Conditions:
          <input type="checkbox" ref={inputCheckbox} name="terms" />
        </label>
        <br />
        <label>
          Upload picture:
          <input type="file" ref={inputFile} name="fileUpload" />
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
          <datalist id="countries" ref={inputCountry}>
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
