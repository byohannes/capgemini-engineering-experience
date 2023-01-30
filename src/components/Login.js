import React from 'react';

 export const Login = ({ isLoggedIn }) => {
  const text = isLoggedIn ? 'Welcome' : 'Login'
  return (
      <h4>{text}</h4>
  )
}