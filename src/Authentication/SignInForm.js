// External Dependencies
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

// Material-UI Dependencies
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

// Internal Dependencies
import getSignInFormStyles from './styles/SignInFormStyles';

// Local Variables
const validationSchema = yup.object({
  username: yup
    .string('Enter your username')
    .required('Username is required'),
  passowrd: yup
    .string('Enter your passowrd')
    .required('Passowrd is required'),
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
      passowrd: '',
    },
    validationSchema,
    onSubmit: (values) => console.log(values),
  });

  const inputFields = [
    { name: 'username', label: 'Username' },
    { name: 'passowrd', label: 'Passowrd' },
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
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default SignInForm;
