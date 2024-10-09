import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.rawg.io/api',

    params: {
        key: 'ab0a3dc5816d4ddeabd7b5b8eafbd9c6'
    }
})