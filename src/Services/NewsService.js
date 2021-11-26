import axios from "axios";

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