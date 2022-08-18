import {
  Avatar,
  Grid,
  TextField,
  Typography,
  Button,
} from '@mui/material';
import React from 'react';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormHelperText } from '@mui/material';

const SignUp = (props) => {
  const headerStyle = { margin: '0' };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const btnStyle = { margin: '18px 0' };
  const marginTop = { marginTop: '5' };
  const initialValues = {
    name: '',
    email: '',
    gender: '',
    phone: '',
    password: '',
    confirm: '',
    terms: 'true',
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "It's too short !!")
      .required('Required!!'),
    email: Yup.string()
      .email('Enter valid email !!')
      .required('Required!!'),
    gender: Yup.string()
      .oneOf(['male', 'female'], 'required !!')
      .required('Required !!'),
    phone: Yup.string()
      .typeError('Enter valid Phone number !!')
      .min(10, 'Enter valid phone no min !!')
      .max(10, 'Enter valid phone no max !!')
      .required('Required!!'),
    password: Yup.string()
      .min(8, 'Password should be greater than 8 characters !!')
      .max(15, 'Password should be less than 15 characters !!')
      .required('Required!!'),
    confirm: Yup.string()
      .oneOf([Yup.ref('password')], 'Password do not match!!')
      .required('Required!!'),
    terms: Yup.string()
      .oneOf(['true'], 'Accept the terms and conditions !!')
      .required('Required!!'),
  });
  const onSubmit = (values, props) => {
    console.log(values);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
    console.log(props);
  };

  return (
    <Grid>
      <Grid align="center">
        <Avatar style={avatarStyle}>
          <AddCircleOutlineOutlinedIcon />
        </Avatar>
        <h2 style={headerStyle}>Sign Up</h2>
        <Typography variant="caption">
          Fill the form to create an account{' '}
        </Typography>
      </Grid>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <Field
            as={TextField}
            fullWidth
            name="name"
            label="name"
            placeholder="Enter name"
            variant="standard"
            helperText={<ErrorMessage name="name" />}
          />
          <Field
            as={TextField}
            fullWidth
            name="email"
            label="email"
            type="email"
            placeholder="Enter email"
            variant="standard"
            helperText={<ErrorMessage name="email" />}
          />
          <FormControl component="fieldset" style={marginTop}>
            <FormLabel component="legend">Gender</FormLabel>
            <Field
              as={RadioGroup}
              aria-label="gender"
              name="gender"
              style={{ display: 'initial' }}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Male"
              />
            </Field>
            <FormHelperText>
              <ErrorMessage name="gender" />
            </FormHelperText>

            <Field
              as={TextField}
              fullWidth
              label="Phone number"
              placeholder="Enter phone number"
              variant="standard"
              name="phone"
              helperText={<ErrorMessage name="phone" />}
            />
            <Field
              as={TextField}
              fullWidth
              label="Password"
              placeholder="Enter password"
              variant="standard"
              name="password"
              type="password"
              helperText={<ErrorMessage name="password" />}
            />
            <Field
              as={TextField}
              fullWidth
              label="Confirm password"
              placeholder="Enter confirm password"
              variant="standard"
              name="confirm"
              type="password"
              helperText={<ErrorMessage name="confirm" />}
            />
            <FormControlLabel
              control={
                <Field as={Checkbox} name="terms" color="primary" />
              }
              label="I accept the terms & conditions."
            />
          </FormControl>
          <FormHelperText>
            <ErrorMessage name="terms" />
          </FormHelperText>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={btnStyle}
            fullWidth
            disabled={props.isSubmitting}
          >
            {props.isSubmitting ? 'Loading' : 'Sign Up'}
          </Button>
        </Form>
      </Formik>
    </Grid>
  );
};

export default SignUp;
