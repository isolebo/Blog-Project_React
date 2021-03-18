
import axios from 'axios'

const RequestHeaders ={
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
}

const Axios = axios.create({
    baseURL:'http://localhost:5000',
    headers: RequestHeaders,
})

export default Axios