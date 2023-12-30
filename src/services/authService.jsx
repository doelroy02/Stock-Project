
//Inside Auth

const users = [];


const authService = {
  register(email, password) {
    //___
    const newUser = { email, password };
    users.push(newUser);
    console.log("Auth service inside ")
    console.log('Registered:', newUser);
    return Promise.resolve(newUser);
  },

  login(email, password) {

    
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      // Simulate user login
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
