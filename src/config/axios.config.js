import axios from 'axios';



// http://localhost:5000/
// http://192.168.1.2:5000/

const instance = axios.create({
    baseURL: 'http://192.168.1.2:5000/'
})

export default instance;