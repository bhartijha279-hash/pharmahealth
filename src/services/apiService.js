import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080"
});

export const getMedicines = () => API.get("/medicines");

export const addMedicine = (medicine) =>
  API.post("/medicines", medicine);

export const getSales = () =>
    API.get("/sales");

export const updateMedicine = (id, medicine) =>
  API.put(`/medicines/${id}`, medicine);

export const deleteMedicine = (id) =>
  API.delete(`/medicines/${id}`);

export default API;