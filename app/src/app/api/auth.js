

export const signUp = async (email) => {
  const response = await fetch('/users.json');
  const users = await response.json();
  
  const userExists = users.some(user => user.email === email);
  
  if (userExists) {
    return { message: 'User already exists' };
  }

  return { message: 'User registered successfully' };
};

export const login = async (email, password) => {
  const response = await fetch('/users.json');
  const users = await response.json();
  
  const user = users.find(user => user.email === email && user.password === password);
  
  if (user) {
    return { message: 'Login successful' };
  } else {
    return { message: 'Invalid email or password' };
  }
};
