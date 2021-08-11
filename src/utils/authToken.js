import axios from 'axios';

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
};

// const setToken = (value) => {
//   const token = JSON.stringify(value);
//   sessionStorage.setItem('token', token);
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

export default setAuthToken;
