
const users = [
    {
      email: 'test@example.com',
      password: 'password123',
    },
    {
      email: 'user@example.com',
      password: 'userpassword',
    },
  ];
  
  export const login = (email, password) => {
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      return { status: 'success', message: 'Login successful!' };
    } else {
      return { status: 'error', message: 'Invalid email or password' };
    }
  };
  
  export const signUp = (email, password) => {
    const userExists = users.some(user => user.email === email);
    if (userExists) {
      return { status: 'error', message: 'User already exists' };
    } else {
      users.push({ email, password });
      return { status: 'success', message: 'Sign-up successful!' };
    }
  };
  