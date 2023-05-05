import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Please enter an email address'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .required('Please enter a password'),
});

export default validationSchema;
