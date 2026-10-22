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

export const findByCategorie = (categorie) => {
    return axios.get(`${API_URL}/categorie/${categorie}`);
}

export const findByModePaiment = (modePaiement) => {
    return axios.get(`${API_URL}/modePaiemnt/${modePaiement}`);
}

export const findBydateDepenseAfter = (dateDepenseAfter) => {
    return axios.get(`${API_URL}/dateDepenseAfter/${dateDepenseAfter}`);
}

export const findBymontantGreaterThan = (montantGreaterThan) => {
    return axios.get(`${API_URL}/montantGreaterThan/${montantGreaterThan}`);
}

export const findDepenseBetweenTwoDate = (dateDebut, dateFin) => {
    return axios.get(`${API_URL}/depenseBetweenTwoDate/${dateDebut}/${dateFin}`)
}

export const CalculerMontantTotal = () => {
    return axios.get(`${API_URL}/calculerMontantTotal`)
}

export const CalculerMontantParCategorie = (categorie) => {
    return axios.get(`${API_URL}/calculerMontantTotalParCategorie/${categorie}`)
}

export const DepenseAyantLeMontant = () => {
    return axios.get(`${API_URL}/depenseAyantLeMontant`)
}