import axios from 'axios';

const instance = axios.create({
    baseURL:'https://myburgerbuilder-5bfb9.firebaseio.com/'
});
export default instance;
