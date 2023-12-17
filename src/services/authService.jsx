const users = [];

const authService = {
  register(email, password) {
    // Simulate user registration
    const newUser = { email, password };
    users.push(newUser);
    console.log('Registered:', newUser);
    return Promise.resolve(newUser);
  },

  login(email, password) {
    // Simulate user login
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      console.log('Logged in:', user);
      return Promise.resolve(user);
    } else {
      console.error('Login failed');
      return Promise.reject(new Error('Invalid credentials'));
    }
  },
};

export default authService;
