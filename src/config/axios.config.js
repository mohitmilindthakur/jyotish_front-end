import axios from 'axios';



let localhost = 'http://localhost:5000/'
let networkhost = 'http://192.168.1.3:5000/'

const instance = axios.create({
    baseURL: networkhost
})

export default instance;