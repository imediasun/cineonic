import axios from 'axios'

const fetch = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Accept-Language': 'ru,en;q=0.5',
        // 'Access-Control-Allow-Headers' : `*, ${offset}`
    }
})

export default fetch