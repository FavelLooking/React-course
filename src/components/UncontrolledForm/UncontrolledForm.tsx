import styles from './UncontrolledForm.module.scss';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useDispatch } from 'react-redux';
import { DataState, save } from '../../store/dataSlice';
import { validationSchema } from '../../utils/yup/index';
import * as Yup from 'yup';
import { checkStrongPassword } from '../../utils/regex';

export function UncontrolledForm() {
  const inputName = useRef<HTMLInputElement>(null);
  const inputAge = useRef<HTMLInputElement>(null);
  const inputEmail = useRef<HTMLInputElement>(null);
  const inputPassword = useRef<HTMLInputElement>(null);
  const inputPasswordValidation = useRef<HTMLInputElement>(null);
  const inputGender = useRef<HTMLSelectElement>(null);
  const inputCheckbox = useRef<HTMLInputElement>(null);
  const inputFile = useRef<HTMLInputElement>(null);
  const inputCountry = useRef<HTMLInputElement>(null);

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [passwordStrength, setPasswordStrength] = useState<string>('');

  const countries = useSelector(
    (state: RootState) => state.dataSlice.countries,
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const processFormData = async (formData: DataState) => {
    try {
      dispatch(save(formData));
      navigate('/');
    } catch (err) {
      console.error('Error processing form data:', err);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const file = inputFile.current?.files?.[0];
    let fileBase64 = '';

    const password = inputPassword.current?.value;

    if (password) {
      setPasswordStrength(checkStrongPassword(password));
    }

    const formData = {
      isReactHookForm: false,
      userName: inputName.current?.value,
      age: inputAge.current?.value
        ? parseInt(inputAge.current.value, 10)
        : undefined,
      email: inputEmail.current?.value,
      password: inputPassword.current?.value,
      confirmPassword: inputPasswordValidation.current?.value,
      gender: inputGender.current?.value,
      isChecked: inputCheckbox.current?.checked ?? false,
      country: inputCountry.current?.value,
      file: fileBase64,
    };

    try {
      await validationSchema.validate(
        {
          ...formData,
          file: file,
        },
        { abortEarly: false },
      );

      if (file) {
        const reader = new FileReader();
        reader.onloadend = async () => {
          fileBase64 = reader.result as string;
          formData.file = fileBase64;
          await processFormData(formData);
        };
        reader.readAsDataURL(file);
      }
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors: { [key: string]: string } = {};
        err.inner.forEach((error) => {
          if (error.path) {
            errors[error.path] = error.message;
          }
        });
        setFormErrors(errors);
      }
    }
  };

  return (
    <div className={styles['form-container']}>
      <h1>Uncontrolled Form Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" ref={inputName} name="username" />
        </label>
        {(formErrors.userName && (
          <p className={styles['error']}>{formErrors.userName}</p>
        )) || <p></p>}
        <label>
          Age:
          <input ref={inputAge} name="age" />
        </label>
        {(formErrors.age && (
          <p className={styles['error']}>{formErrors.age}</p>
        )) || <p></p>}
        <label>
          Email:
          <input ref={inputEmail} name="email" />
        </label>
        {(formErrors.email && (
          <p className={styles['error']}>{formErrors.email}</p>
        )) || <p></p>}
        <label>
          Password:
          <input type="password" ref={inputPassword} name="password" />
        </label>
        {formErrors.password && (
          <p className={styles['error']}>{formErrors.password}</p>
        )}
        {(passwordStrength && (
          <p className={styles['strength']}>{passwordStrength}</p>
        )) || <p></p>}
        <label>
          Confirm Password:
          <input
            type="password"
            ref={inputPasswordValidation}
            name="confirmPassword"
          />
        </label>
        {(formErrors.confirmPassword && (
          <p className={styles['error']}>{formErrors.confirmPassword}</p>
        )) || <p></p>}
        <label>
          Select gender:
          <select ref={inputGender} name="gender">
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>
        {(formErrors.gender && (
          <p className={styles['error']}>{formErrors.gender}</p>
        )) || <p></p>}
        <label>
          Terms and Conditions:
          <input type="checkbox" ref={inputCheckbox} name="terms" />
        </label>
        {(formErrors.isChecked && (
          <p className={styles['error']}>{formErrors.isChecked}</p>
        )) || <p></p>}
        <label>
          Upload picture:
          <input type="file" ref={inputFile} name="fileUpload" />
        </label>
        {(formErrors.file && (
          <p className={styles['error']}>{formErrors.file}</p>
        )) || <p></p>}
        <label htmlFor="country">
          Choose your country:
          <input
            list="countries"
            id="country"
            name="country"
            autoComplete="off"
            ref={inputCountry}
          />
          <datalist id="countries">
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </datalist>
        </label>
        {(formErrors.country && (
          <p className={styles['error']}>{formErrors.country}</p>
        )) || <p></p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
