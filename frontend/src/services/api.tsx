import axios from "axios";

const connection = axios.create({
  baseURL: "http://localhost:5000/",
});


export default connection;