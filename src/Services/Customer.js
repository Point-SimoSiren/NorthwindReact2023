import axios from 'axios'

const baseUrl = "https://localhost:7128/api/customers"

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const addNew = (object) => {
    const request = axios.post(baseUrl, object)
    return request.then(response => response.data)
}

export default {getAll, addNew}
