import axios from 'axios';

const INTERN_BASE_API_URL = 'http://localhost:8080/api/intern/';


export function getAllInterns(){
    return axios.get(INTERN_BASE_API_URL); // get all interns
}

export function createIntern(intern){
    return axios.post(INTERN_BASE_API_URL,intern); // create intern
}

export function getById(id){
    return axios.get(`${INTERN_BASE_API_URL}/${id}`); // get by intern id 
}

export function getByEmail(email){
    return axios.get(`${INTERN_BASE_API_URL}/${email/{email}}`); // get intern email
}

export function updateIntern(id, intern){
    return axios.put(`${INTERN_BASE_API_URL}/${id}`, intern); //update intern
}

export function deleteIntern(id){
    return axios.delete(`${INTERN_BASE_API_URL}/${id}`); // delete intern
}



const USER_BASE_API_URL = 'http://localhost:8080/api/user';

export function getAllTas(){
    return axios.get(USER_BASE_API_URL); // get all ta
}

export function createTa(ta){
    return axios.post(USER_BASE_API_URL,ta); // create ta
}

export function getById(id){
    return axios.get(`${USER_BASE_API_URL}/${id}`); // get by ta id 
}

export function getByEmail(email){
    return axios.get(`${USER_BASE_API_URL}/${email/{email}}`); // get ta email
}

export function updateTa(id, ta){
    return axios.put(`${USER_BASE_API_URL}/${id}`, ta); // update ta
}

export function deleteTa(id){
    return axios.delete(`${USER_BASE_API_URL}/${id}`); // delete ta
}

