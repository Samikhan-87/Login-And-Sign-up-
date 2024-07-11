'use client';
import React, { useState } from 'react';
import { Modal, Box, Typography, Button, Grid, Input, InputAdornment, IconButton, FormControl, InputLabel, FormGroup,Link, FormLabel } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { red,pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import styles from "../styles/Login.module.scss";
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
          <Typography variant="h6" className={styles.messageBox}>Sign up</Typography>

          <form>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                  <InputLabel className={styles.TextFieldText}>First Name</InputLabel>
                  <Input
                    className={styles.TextFieldText0}
                    type={'text'}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                  <InputLabel className={styles.TextFieldText}>Last Name</InputLabel>
                  <Input
                    className={styles.TextFieldText}
                    type={'text'}
                  />
                </FormControl>
              </Grid>
            </Grid>

            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel className={styles.TextFieldText}>Username</InputLabel>
              <Input
                className={styles.TextFieldText}
                type={'text'}
              />
            </FormControl>

            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel className={styles.TextFieldText}>Email</InputLabel>
              <Input
                className={styles.TextFieldText}
                type={'email'}
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

            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel className={styles.TextFieldText} htmlFor="confirm-password">Confirm Password</InputLabel>
              <Input
                id="confirm-password"
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
               <FormLabel className={styles.TextFieldText2}>Agreeing to MAVEN X's Terms of Service & acknowledging our privacy notice applies</FormLabel>
              </FormGroup>



          <Box className={styles.buttonVala}>

            <Button type="submit" variant="contained" color="primary">
              Register
            </Button>
            </Box>

            <Box className={styles.lastText}>
              <FormLabel className={styles.TextFieldText3} variant='paragraph' >Already Signed up To MAVEN X?</FormLabel>
              <Link className={styles.TextFieldText4} href='/login'>Login in
              <ArrowRightAltIcon sx={{ color: red[500] }} />
              </Link>
            </Box>
          </form>
        </Box>


      </Modal>
    </div>
  );
}
