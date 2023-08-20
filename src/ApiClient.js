import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/";
const ApiClient = axios.create({
    baseURL: baseURL,
    Headers: {"Content-Type": "application/json"},
});

export default ApiClient;