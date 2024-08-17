import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  userName: Yup.string()
    .required('Name is required')
    .test(
      'first-letter-uppercase',
      'First letter must be uppercase',
      (value) => {
        if (!value) return true;
        return /^[A-Z]/.test(value);
      },
    ),
  age: Yup.number().required('Age is required').positive().integer(),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
    .required('Confirm Password is required'),
  gender: Yup.string().required('Gender is required'),
  isChecked: Yup.boolean().oneOf([true], 'You must accept the terms'),
  country: Yup.string().required('Country is required'),
});
