'use client';
import React, { useState } from 'react';
import { Modal, Box, Typography, Button, Grid, Input, InputAdornment, IconButton, FormControl, InputLabel, FormGroup,Link, FormLabel } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { red } from '@mui/material/colors';
import ColorSwitches from '../Components/ColorSwitches'
import styles from "../styles/Signup.module.scss";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function InputAdornments() {
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Open Modal
      </Button>

      <Modal open={open} onClose={handleClose} className={styles.modalBox}>
        <Box>
          <img 
            src='/images/eabe799dda574f628ac4d98cd0526139.png' 
            alt="Example Image" 
            className={styles.image}
          />
          <Typography variant="h6" className={styles.messageBox}>Login In</Typography>

          <form>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel className={styles.TextFieldText}>Username or Email</InputLabel>
              <Input
                    className={styles.TextFieldText0} 
                type={'text'}
              />
            </FormControl>


            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel className={styles.TextFieldText} htmlFor="password">Password</InputLabel>
              <Input 
                id="password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      className={styles.TextFieldText}
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Box className={styles.ForgetText}>
                
                <Link className={styles.ForgetTextL} href='#'>Forget Password
                <ArrowRightAltIcon sx={{ color: red[500] }} />
                </Link>
                </Box>


            
              <FormGroup aria-label="position" row>
              <ColorSwitches/>
               <FormLabel className={styles.TextFieldText2}>Stay Logged in</FormLabel>
              </FormGroup>



          <Box className={styles.buttonVala}>

            <Button type="submit" variant="contained" color="primary">
              Register
            </Button>
            </Box>

                <Box className={styles.lastText}>
                <FormLabel className={styles.TextFieldText3} variant='paragraph' >Still not signed up to MAVEN X</FormLabel>
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