import axios from 'axios';

const config = {
    headers: {
        Group: 94,              //Aqui va el ID del equipo!!
        Authorization: 'userToken'          
    }
}

const Get = async (route, id, config) => {
    try {
        const results = await axios.get(`${route}/${id}`, config);
        console.log(results.data)
    } catch (err) {
        console.log(err.message)
    }
}

export const getDataNewsDetail = async (route) => {
    try {
        const response = axios.get(`${route}`);
        return response.data;
    } catch (error) {
        return console.log(error)
    }
}

export const getDataNewsForm = async (route) => {
    try {
        const response = axios.get(`${route}`);
        return response.data;
    } catch (error) {
        return console.log(error)
    }
}

export const getDataNewsList = async (route) => {
    try {
        const response = axios.get(`${route}`);
        return response.data;
    } catch (error) {
        return console.log(error)
    }
}

export const getDataNewsTable = async (route) => {
    try {
        const response = axios.get(`${route}`);
        return response.data;
    } catch (error) {
        return console.log(error)
    }
}

export default Get;