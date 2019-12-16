import axios from 'axios'

const instance = axios.create({
    baseURL: '/api/v1/cards'
})

export default instance
