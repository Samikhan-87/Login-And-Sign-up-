'use client';
import React, { useState } from 'react';
import { Modal, Box, Typography, Button, Input, InputAdornment, IconButton, FormControl, InputLabel, FormGroup, Link, FormLabel } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { red } from '@mui/material/colors';
import ColorSwitches from '../Components/ColorSwitches';
import styles from "../styles/Signup.module.scss";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { login } from '../api/auth';


export default function LoginModal() {
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

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
      case 'email':
        setEmail(value);
        setEmailError(validateEmail(value) ? '' : 'Email should have at least 4 characters');
        break;
      case 'password':
        setPassword(value);
        setPasswordError(validatePassword(value) ? '' : 'Password should have a length of 8 to 15 characters, including capital & lowercase letters, numbers, & symbols');
        break;
      default:
        break;
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const isValid = validateEmail(email) && validatePassword(password);

    if (isValid) {
      const response = await login(email, password);
      setMessage(response.message);
    }
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setMessage('');
  };

  const validateEmail = (value) => value.length >= 4;
  const validatePassword = (value) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
    return passwordRegex.test(value);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Open Modal
      </Button>

      <Modal open={open} onClose={handleClose} className={styles.modalBox}>
        <Box>
          <img 
            src='/images/7347ea91-0e8d-4311-b535-c49cea392138-cover-removebg-preview.png' 
            alt="Example Image" 
            className={styles.image}
          />
          <Typography variant="h6" className={styles.messageBox}>Login In</Typography>

          {message && <Typography variant="body2" color="error">{message}</Typography>}

          <form onSubmit={handleLogin}>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel className={styles.TextFieldText}>Username or Email</InputLabel>
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

            <Box className={styles.ForgetText}>
              <Link className={styles.ForgetTextL} href='#'>Forget Password
                <ArrowRightAltIcon sx={{ color: red[500] }} />
              </Link>
            </Box>

            <FormGroup aria-label="position" row>
              <ColorSwitches />
              <FormLabel className={styles.TextFieldText2}>Stay Logged in</FormLabel>
            </FormGroup>

            <Box className={styles.buttonVala}>
              <Button type="submit" variant="contained" color="primary">
                Login
              </Button>
            </Box>
           
            <Box className={styles.lastText}>
              <FormLabel className={styles.TextFieldText3} variant='paragraph'>Still not signed up to SK's Gaming Arena</FormLabel>
              <Link className={styles.TextFieldText4} href='/'>Sign up
                <ArrowRightAltIcon sx={{ color: red[500] }} />
              </Link>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
