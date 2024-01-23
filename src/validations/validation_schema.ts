import {string, object} from 'yup';

export const profileSchema = object({
  first_name: string().required('Please enter your first name'),
  last_name: string().required('Please enter your last name'),
  email: string()
    .required('Please enter your email address')
    .email('Please enter a valid email address'),
  phone_number: string()
    .required('Please enter your phone number')
    .matches(/^\d{10}$/, 'Please enter a valid 10-digit phone number'),
  mailing_address: string().required('Please enter mailing address'),
});
