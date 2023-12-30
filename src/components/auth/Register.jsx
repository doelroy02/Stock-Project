// OK Inside->components/auth/Register.js
import React, { useState } from 'react';
import authService from '../../services/authService';
import InputField from '../common/InputField';
import Button from '../common/Button';
import '../common/Form.css';
//----///*******/------->

const Register = () => {

  //---Done

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //Done
  const [confirmPassword, setConfirmPassword] = useState('');
//

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.error("Inside Passwords");
      console.error("Passwords don't match");
      return;
    }

    try {
      //
      const newUser = await authService.register(email, password);
      console.log('New user registered:', newUser);
      //
    } catch (error) {
      console.error('Registration error:', error);
    }
  };
///Ok
  return (
    <div className="form-container"> {/* Apply form styling */}
      <h2>Register</h2>
      <form onSubmit={handleRegister} className="auth-form"> {/* Apply form styling */}
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <InputField
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <Button type="submit">Register</Button>
      </form>
    </div>
  );
};

export default Register;
