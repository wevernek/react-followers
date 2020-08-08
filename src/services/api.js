import Axios from 'axios';

const API = Axios.create({ baseURL: 'https://api.github.com/users/wevernek' });

export default API;