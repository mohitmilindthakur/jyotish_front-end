import axios from 'axios';



// let localhost = 'http://localhost:5000/'
// let networkhost = 'http://192.168.1.3:5000/'
let productionhost = "https://www.ahirbudhnya.com/"

const instance = axios.create({
    baseURL: productionhost
})

export default instance;