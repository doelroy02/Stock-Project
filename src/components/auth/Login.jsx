// Ok ----> components/auth/Login.js
import Button from '../common/Button';
import React, { useState } from 'react';
import InputField from '../common/InputField';
import authService from '../../services/authService';
import '../common/Form.css'; 

const Login = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const user = await authService.login(email, password);
      console.log("User logged in")
      console.log('Logged in:', user);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (

    <div className="form-container"> {}
  


      <h2>Login</h2>
      <form onSubmit={handleLogin} className="auth-form"> {/**/}
        <InputField
          type="email"
          /*OK Tested*/
          placeholder="Email"
          value={email}
          /*OK Tested*/
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <InputField
          type="password"
        
        /*OK Tested*/  placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
