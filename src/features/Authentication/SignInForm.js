// External Dependencies
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';

// Material-UI Dependencies
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

// Internal Dependencies
import getSignInFormStyles from './styles/signInFormStyles';
import { signInUser } from './reducers/signInSlice';

// Local Variables
const validationSchema = yup.object({
  username: yup
    .string('Enter your username')
    .required('Username is required'),
  password: yup
    .string('Enter your password')
    .required('Password is required'),
});

// Component Definition
const SignInForm = () => {
  const dispatch = useDispatch();
  const routeHistory = useHistory();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => dispatch(signInUser(values, routeHistory)),
  });

  const {
    pageStyle,
    formContainerStyle,
    textFieldStyle,
    submitButtonStyle,
  } = makeStyles((theme) => getSignInFormStyles(theme))();

  const inputFields = [
    { name: 'username', label: 'Username' },
    { name: 'password', label: 'Password' },
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
        type={name === 'password' ? 'password' : ''}
      />
    );
  });

  return (
    <div className={pageStyle}>
      <h1>Truck Fleet Analytics</h1>
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
    </div>
  );
};

export default SignInForm;
