import { Grid, Paper } from '@mui/material';
import React from 'react';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';

export default function ForgotPassword() {
  const btnstyle = { margin: '18px 0' };
  return (
    <Grid>
      <Paper className="paperStyle" elevation={20}>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="forgotPassword"
          placeholder="Enter Your email "
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
        >
          {' '}
          Reset Password
        </Button>
      </Paper>
    </Grid>
  );
}
