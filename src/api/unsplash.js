import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID pj8yY_BEkJjEGnWu3P83EC_Ed8LxhyeNX4bR2xx1rFk'   
    }
})