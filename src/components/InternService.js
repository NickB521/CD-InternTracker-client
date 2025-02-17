import axios from 'axios';
import { getAuthHeader } from '../services/AuthService';

const INTERN_BASE_API_URL = 'http://localhost:8080/api/intern';


export function getAllInterns(){
    return axios.get(INTERN_BASE_API_URL, getAuthHeader()); // get all interns
}

export function createIntern(intern){
    return axios.post(INTERN_BASE_API_URL, intern, getAuthHeader()); // create intern
}

export function getInternById(id){
    return axios.get(`${INTERN_BASE_API_URL}/id?id=${id}`, getAuthHeader()); // get by intern id 
}

export function getInternByEmail(email){
    return axios.get(`${INTERN_BASE_API_URL}/${email/{email}}`, getAuthHeader()); // get intern email
}

export function updateIntern(id, intern){
    return axios.put(`${INTERN_BASE_API_URL}/${id}`, intern, getAuthHeader()); //update intern
}

export function deleteIntern(id){
    return axios.delete(`${INTERN_BASE_API_URL}/${id}`, getAuthHeader()); // delete intern
}



const USER_BASE_API_URL = 'http://localhost:8080/api/user';

export function getAllTas(){
    return axios.get(USER_BASE_API_URL, getAuthHeader()); // get all ta
}

export function createTa(ta){
    return axios.post(USER_BASE_API_URL,ta, getAuthHeader()); // create ta
}

export function getTaById(id){
    return axios.get(`${USER_BASE_API_URL}/${id}`, getAuthHeader()); // get by ta id 
}

export function getTaByEmail(email){
    return axios.get(`${USER_BASE_API_URL}/${email/{email}}`, getAuthHeader()); // get ta email
}

export function updateTa(id, ta){
    return axios.put(`${USER_BASE_API_URL}/${id}`, ta, getAuthHeader()); // update ta
}

export function deleteTa(id){
    return axios.delete(`${USER_BASE_API_URL}/${id}`, getAuthHeader()); // delete ta
}

