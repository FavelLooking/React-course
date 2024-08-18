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
    .required('Confirm assword is required'),
  gender: Yup.string().required('Gender is required'),
  isChecked: Yup.boolean()
    .oneOf([true], 'You must accept the terms')
    .required('Check is required'),
  country: Yup.string().required('Country is required'),
  file: Yup.mixed<File>()
    .required('Image is required')
    .test('fileSize', 'Size needs to be less than 1MB', (value) => {
      if (!value) return false;
      return value.size < 1024 * 1024;
    })
    .test('fileType', 'Unsupported file type. Use png or jpg', (value) => {
      if (!value) return false;
      const supportedFormats = ['image/jpeg', 'image/png', 'image/gif'];
      return supportedFormats.includes(value.type);
    }),
});
