
//

const users = [];

// Simulate user registration
const authService = {
  register(email, password) {
    const newUser = { email, password };
    users.push(newUser);
    console.log("String perfect")
    console.log('Registered:', newUser);
    return Promise.resolve(newUser);
  },

  // Simulate user login
  login(email, password) {
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      //
      console.log('Logged in:', user);
      return Promise.resolve(user);
    } else {
      console.error('Login failed');
      return Promise.reject(new Error('Invalid credentials'));
    }
  },
};

export default authService;
