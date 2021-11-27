import axios from "axios";

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