// utils.js
import { jwtDecode } from 'jwt-decode';


export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  if (!token) return false;



  try {
    console.log(token);
    const decoded = jwtDecode(token);
    // Check if the token is expired
    const currentTime = Date.now() / 1000;
    return decoded.exp > currentTime;
  } catch (error) {
    return false;

  
  }
};