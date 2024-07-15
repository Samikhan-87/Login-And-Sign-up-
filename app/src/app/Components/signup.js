// components/SignUpModal.js
'use client';
import React, { useState } from 'react';
import { Modal, Box, Typography, Button, Grid, Input, InputAdornment, IconButton, FormControl, InputLabel, FormGroup, Link, FormLabel } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { red } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import styles from "../styles/Login.module.scss";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { signUp } from '../api/auth';

export default function SignUpModal() {
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    resetForm();
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'firstName':
        setFirstName(value);
        setFirstNameError(validateFirstName(value) ? '' : 'First name should have at least 3 characters');
        break;
      case 'lastName':
        setLastName(value);
        setLastNameError(validateLastName(value) ? '' : 'Last name should have at least 3 characters');
        break;
      case 'username':
        setUsername(value);
        setUsernameError(validateUsername(value) ? '' : 'Username should have at least 4 characters');
        break;
      case 'email':
        setEmail(value);
        setEmailError(validateEmail(value) ? '' : 'Email should have at least 4 characters');
        break;
      case 'password':
        setPassword(value);
        setPasswordError(validatePassword(value) ? '' : 'Password should have a length of 8 to 15 characters, including capital & lowercase letters, numbers, & symbols');
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        setConfirmPasswordError(value === password ? '' : 'Passwords do not match');
        break;
      default:
        break;
    }
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    const isValid =
      validateFirstName(firstName) &&
      validateLastName(lastName) &&
      validateUsername(username) &&
      validateEmail(email) &&
      validatePassword(password) &&
      validateConfirmPassword(confirmPassword);

    if (isValid) {
      const response = await signUp(email, password);
      setMessage(response.message);
    }
  };

  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setMessage('');
  };

  const validateFirstName = (value) => 
    value.length >= 3;
  const validateLastName = (value) => 
    value.length >= 3;
  const validateUsername = (value) => 
    value.length >= 4;
  const validateEmail = (value) => 
    value.length >= 4;
  const validatePassword = (value) => {
    const passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
    return passwordCheck.test(value);
  };
  const validateConfirmPassword = (value) => value === password;

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Open Modal
      </Button>
      <Modal open={open} onClose={handleClose} className={styles.modalBox}>
        <Box className={styles.imageBox}>
          <img 
            src='/images/7347ea91-0e8d-4311-b535-c49cea392138-cover-removebg-preview.png' 
            alt="Example Image" 
            className={styles.image}
          />
          <Typography variant="h6" className={styles.messageBox}>Sign up</Typography>
          {message && <Typography variant="body2" color="error">{message}</Typography>}
          <form onSubmit={handleSignUp}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                  <InputLabel className={styles.TextFieldText}>First Name</InputLabel>
                  <Input
                    className={styles.TextFieldText0}
                    type='text'
                    name='firstName'
                    value={firstName}
                    onChange={handleInputChange}
                  />
                  {firstNameError && <Typography className={styles.errorText} style={{ color: red[500], fontSize: '12px' }}>{firstNameError}</Typography>}
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                  <InputLabel className={styles.TextFieldText}>Last Name</InputLabel>
                  <Input
                    className={styles.TextFieldText0}
                    type='text'
                    name='lastName'
                    value={lastName}
                    onChange={handleInputChange}
                  />
                  {lastNameError && <Typography className={styles.errorText} style={{ color: red[500], fontSize: '12px' }}>{lastNameError}</Typography>}
                </FormControl>
              </Grid>
            </Grid>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel className={styles.TextFieldText}>Username</InputLabel>
              <Input
                className={styles.TextFieldText0}
                type='text'
                name='username'
                value={username}
                onChange={handleInputChange}
              />
              {usernameError && <Typography className={styles.errorText} style={{ color: red[500], fontSize: '12px' }}>{usernameError}</Typography>}
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel className={styles.TextFieldText}>Email</InputLabel>
              <Input
                className={styles.TextFieldText0}
                type='email'
                name='email'
                value={email}
                onChange={handleInputChange}
              />
              {emailError && <Typography className={styles.errorText} style={{ color: red[500], fontSize: '12px' }}>{emailError}</Typography>}
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel className={styles.TextFieldText}>Password</InputLabel>
              <Input
                className={styles.TextFieldText0}
                type={showPassword ? 'text' : 'password'}
                name='password'
                value={password}
                onChange={handleInputChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                        className={styles.TextFieldText0}
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {passwordError && <Typography className={styles.errorText} style={{ color: red[500], fontSize: '12px' }}>{passwordError}</Typography>}
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel className={styles.TextFieldText}>Confirm Password</InputLabel>
              <Input
                className={styles.TextFieldText0}
                type={showPassword ? 'text' : 'password'}
                name='confirmPassword'
                value={confirmPassword}
                onChange={handleInputChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton 
                    className={styles.TextFieldText0}
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {confirmPasswordError && <Typography className={styles.errorText} style={{ color: red[500], fontSize: '12px' }}>{confirmPasswordError}</Typography>}
            </FormControl>
              <FormGroup aria-label="position" row>
                <Checkbox
                  defaultChecked
                  sx={{
                    color: red[800],
                    '&.Mui-checked': {
                      color: red[600],
                    },
                  }}
                />
                <FormLabel className={styles.TextFieldText2}>Agreeing to SK's Gaming Arena Terms of Service & Acknowledging Our Privacy Notice Applies</FormLabel>
              </FormGroup>

              <Box className={styles.buttonVala}>
                <Button type="submit" variant="contained" color="primary">
                  Register
                </Button>
              </Box>

           

              <Box className={styles.lastText}>
                <FormLabel className={styles.TextFieldText3} variant='paragraph'>Already Signed up To Sk's Gaming Arena?</FormLabel>
                <Link className={styles.TextFieldText4}  href='/login'>Login in
                  <ArrowRightAltIcon sx={{ color: red[500] }} />
                </Link>
              </Box>
            </form>
          </Box>
        </Modal>
      </div>
    );
  }


