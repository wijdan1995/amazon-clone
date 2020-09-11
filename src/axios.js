import axios from 'axios'

const instance = axios.create({
    baseURL:'https://us-central1-clone-6ba24.cloudfunctions.net/api'
    
    // 'http://localhost:5001/clone-6ba24/us-central1/api'//API url local
})

export default instance