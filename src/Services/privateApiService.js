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

export const getDataActivityDetail = async (route) => {
    try {
        const response = await axios.get(`${route}`);
        return response.data;
    } catch (error) {
        return console.log(error);
    }
}
export const getDataActivityForm = async (route) => {
    try {
        const response = await axios.get(`${route}`);
        return response.data;
    } catch (error) {
        return console.log(error);
    }
}

export const getDataActivityList = async (route) => {
    try {
        const response = await axios.get(`${route}`);
        return response.data;
    } catch (error) {
        return console.log(error);
    }
}

export const getDataActivityTable = async (route) => {
    try {
        const response = await axios.get(`${route}`);
        return response.data;
    } catch (error) {
        return console.log(error);
    }
}


export default Get;