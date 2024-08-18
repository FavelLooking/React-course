import styles from './ReactHookForm.module.scss';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { DataState } from '../../store/dataSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useDispatch } from 'react-redux';
import { save } from '../../store/dataSlice';
import { validationSchema } from '../../utils/yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import {
  lowercaseRegex,
  numberRegex,
  symbolRegex,
  uppercaseRegex,
} from '../../utils/regex';

interface FormInput {
  userName: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  country: string;
  isChecked: boolean;
  file: File;
}

export function ReactHookForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    setValue,
    watch,
    formState: { errors, touchedFields },
  } = useForm<FormInput>({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });

  const [passwordStrength, setPasswordStrength] = useState<string>('');
  const passwordField = watch('password');

  useEffect(() => {
    if (passwordField) {
      const strength = checkStrongPassword(passwordField);
      setPasswordStrength(strength);
    } else {
      setPasswordStrength('');
    }
  }, [passwordField]);

  const countries = useSelector(
    (state: RootState) => state.dataSlice.countries,
  );

  const checkStrongPassword = (password: string): string => {
    const hasNumber = numberRegex.test(password);
    const hasUppercase = uppercaseRegex.test(password);
    const hasLowercase = lowercaseRegex.test(password);
    const hasSymbol = symbolRegex.test(password);
    const strength = +hasNumber + +hasUppercase + +hasLowercase + +hasSymbol;

    switch (strength) {
      case 1:
        return 'Weak password';
      case 2:
        return 'Average password';
      case 3:
        return 'Strong password';
      case 4:
        return 'Superb password';
      default:
        return '';
    }
  };

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    clearErrors();

    let fileString: string | undefined;

    if (data.file) {
      const file = data.file;
      fileString = await convertFileToBase64(file);
    }

    const reactHookFormData: DataState = {
      isReactHookForm: true,
      userName: data.userName,
      age: data.age,
      email: data.email,
      password: data.password,
      gender: data.gender,
      isChecked: data.isChecked,
      country: data.country,
      file: fileString,
    };

    dispatch(save(reactHookFormData));
    reset();
    navigate('/');
  };

  const convertFileToBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          resolve(reader.result as string);
        } else {
          reject(new Error('Failed to convert file to base64.'));
        }
      };
      reader.readAsDataURL(file);
    });

  return (
    <div className={styles['form-container']}>
      <h1>React hook form page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name:
          <input {...register('userName')} type="text" />
        </label>
        {(errors.userName && (
          <p className={styles['error']}>{errors.userName.message}</p>
        )) || <p></p>}
        <label>
          Age:
          <input {...register('age')} type="number" />
        </label>
        {(errors.age && (
          <p className={styles['error']}>{errors.age.message}</p>
        )) || <p></p>}
        <label>
          Email:
          <input {...register('email')} />
        </label>
        {(errors.email && (
          <p className={styles['error']}>{errors.email.message}</p>
        )) || <p></p>}
        <label>
          Password:
          <input {...register('password')} type="password" />
        </label>
        {(errors.password && (
          <p className={styles['error']}>{errors.password.message}</p>
        )) || <p className={styles.strength}>{passwordStrength}</p>}
        <label>
          Confirm password:
          <input type="password" {...register('confirmPassword')} />
        </label>
        {(errors.password && (
          <p className={styles['error']}>{errors.password.message}</p>
        )) || <p></p>}
        <label>
          Select gender:
          <select {...register('gender')}>
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </label>
        {(errors.gender && (
          <p className={styles['error']}>{errors.gender.message}</p>
        )) || <p></p>}
        <label>
          Terms and Conditions:
          <input {...register('isChecked')} type="checkbox" />
        </label>
        {(errors.isChecked && (
          <p className={styles['error']}>{errors.isChecked.message}</p>
        )) || <p></p>}
        <label>
          Upload picture:
          <input
            type="file"
            onChange={(e) => {
              if (e.target.files?.[0]) {
                setValue('file', e.target.files[0]);
              }
            }}
          />
        </label>
        {(errors.file && (
          <p className={styles['error']}>{errors.file.message}</p>
        )) || <p></p>}
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
        </label>
        {(errors.country && (
          <p className={styles['error']}>{errors.country.message}</p>
        )) || <p></p>}
        <button
          type="submit"
          disabled={
            Object.keys(errors).length > 0 ||
            Object.keys(touchedFields).length < 8
          }
        >
          Submit
        </button>
      </form>
    </div>
  );
}
