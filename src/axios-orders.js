import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-d5e92.firebaseio.com/'
});

export default instance;