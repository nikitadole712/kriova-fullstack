import React from 'react';
import {
  Grid,
  Avatar,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Typography,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';

const LogIn = (handleChange) => {
  let navigate = useNavigate();
  const avatarStyle = { backgroundColor: 'black' };
  const btnstyle = { margin: '18px 0' };
  const initialValues = {
    username: '',
    password: '',
    remember: false,
  };
  const onSubmit = (values, props) => {
    console.log(values);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
    navigate('/profile');
    console.log(props);
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .email('Please Enter valid email')
      .required('Required'),
    password: Yup.string().required('Required'),
  });
  return (
    <Grid>
      <Grid align="center">
        <Avatar style={avatarStyle}>
          <LockOutlinedIcon />
        </Avatar>
        <h2>Sign in</h2>
      </Grid>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(props) => (
          <Form>
            <Field
              as={TextField}
              label="Username"
              placeholder="Enter username"
              name="username"
              variant="standard"
              fullWidth
              helperText={<ErrorMessage name="username" />}
            />
            <Field
              as={TextField}
              label="password"
              placeholder="Enter password"
              name="password"
              variant="standard"
              type="password"
              fullWidth
              helperText={<ErrorMessage name="password" />}
            />
            <Field
              as={FormControlLabel}
              name="remember"
              control={<Checkbox color="primary" />}
              label="Remember me"
            />
            <br />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              disabled={props.isSubmitting}
              style={btnstyle}
              fullWidth
            >
              {props.isSubmitting ? 'Loading' : 'Sign In'}
            </Button>
            {console.log(props)}
          </Form>
        )}
      </Formik>
      <Typography>
        <Link to="/forgot">Forget Password ?</Link>
      </Typography>
      <Typography>
        Do you have an account? <Link to="/signin">Sign Up</Link>
      </Typography>
    </Grid>
  );
};
export default LogIn;
