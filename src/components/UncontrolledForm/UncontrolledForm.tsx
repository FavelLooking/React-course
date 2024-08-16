import styles from './UncontrolledForm.module.scss';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { save } from '../../store/dataUncontrolledSlice';

export function UncontrolledForm() {
  const inputName = useRef<HTMLInputElement>(null);
  const inputAge = useRef<HTMLInputElement>(null);
  const inputEmail = useRef<HTMLInputElement>(null);
  const inputPassword = useRef<HTMLInputElement>(null);
  const inputPasswordValidation = useRef<HTMLInputElement>(null);
  const inputCheckbox = useRef<HTMLInputElement>(null);
  const inputFile = useRef<HTMLInputElement>(null);
  const inputCountry = useRef<HTMLSelectElement>(null);

  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = {
      userName: inputName.current?.value,
      age: inputAge.current?.value,
      email: inputEmail.current?.value,
      password: inputPassword.current?.value,
      confirmPassword: inputPasswordValidation.current?.value,
      isChecked: inputCheckbox.current?.checked as boolean,
      file: inputFile.current?.files?.[0].name,
      country: inputCountry.current?.value,
    };
    dispatch(save(formData));
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
          Terms and Conditions:
          <input type="checkbox" ref={inputCheckbox} name="terms" />
        </label>
        <br />
        <label>
          Upload picture:
          <input type="file" ref={inputFile} name="fileUpload" />
        </label>
        <br />
        <label>
          Select country:
          <select ref={inputCountry} name="country">
            <option>Russia</option>
          </select>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
