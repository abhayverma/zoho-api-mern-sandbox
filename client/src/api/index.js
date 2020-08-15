import axios from 'axios'

const baseURL = 'http://localhost:3000/api';

const api = axios.create({
  baseURL,
})

export const getAllContacts = (page, limit) => api.get(`/zoho/contacts`, {
  params: { page, limit }
})

const apis = {
  getAllContacts
}

export default apis
