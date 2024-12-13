import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://tarotapi.dev/api/v1/cards',
})

export default instance
