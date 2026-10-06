import axios from 'axios';

const API_BASE_URL = '/api/medicines';
export const getMedicines = () => {
    return axios.get(API_BASE_URL);
};

export const addMedicine = (medicineData) => {
    return axios.post(API_BASE_URL, medicineData);
};