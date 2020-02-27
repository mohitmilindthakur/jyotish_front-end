import axios from 'axios';



// let networkhost = 'http://192.168.1.3:5000/'
let localhost = 'http://localhost:5000/'
let productionhost = "https://www.ahirbudhnya.com/"

const instance = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? localhost : productionhost
})

export default instance;