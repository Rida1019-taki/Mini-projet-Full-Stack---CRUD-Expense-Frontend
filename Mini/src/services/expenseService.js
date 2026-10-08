import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/expenses`;

export const getExpenses = () => {
    return axios.get(API_URL);
};

export const getExpenseById = (id) => {
    return axios.get(`${API_URL}/${id}`);
};

export const createExpense = (data) => {
    return axios.post(API_URL, data);
};

export const updateExpense = (id, data) => {
    return axios.put(`${API_URL}/${id}`, data);
};

export const deleteExpense = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};