// External Dependencies
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

// Material-UI Dependencies
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

// Internal Dependencies
import getSignInFormStyles from './styles/signInFormStyles';

// Local Variables
const validationSchema = yup.object({
  username: yup
    .string('Enter your username')
    .required('Username is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minium 8 characters length')
    .required('Password is required'),
  companyName: yup
    .string('Enter your company name')
    .required('Company name is required'),
});

// Component Definition
const SignInForm = () => {
  const {
    formContainerStyle,
    textFieldStyle,
    submitButtonStyle,
  } = makeStyles((theme) => getSignInFormStyles(theme))();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      companyName: '',
    },
    validationSchema,
    onSubmit: (values) => console.log(values),
  });

  const inputFields = [
    { name: 'username', label: 'Username' },
    { name: 'password', label: 'Password' },
    { name: 'companyName', label: 'Company Name' },
  ].map((inputField) => {
    const {
      name,
      label,
    } = inputField;

    return (
      <TextField
        key={name}
        className={textFieldStyle}
        id={name}
        name={name}
        label={label}
        value={formik.values[name]}
        onChange={formik.handleChange}
        error={formik.touched[name] && Boolean(formik.errors[name])}
        helperText={formik.touched[name] && formik.errors[name]}
      />
    );
  });

  return (
    <div className={formContainerStyle}>
      <form onSubmit={formik.handleSubmit}>
        {inputFields}
        <Button
          className={submitButtonStyle}
          variant="outlined"
          type="submit"
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignInForm;
