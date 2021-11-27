import axios from 'axios';

const config = {
    headers: {
        Group: 94,              //Aqui va el ID del equipo!!
        Authorization: 'userToken'
    }
}

const authAxios = axios.create({
    headers: {
        Authorization: `Bearer ${config.headers.Authorization}`
    }
})

const Get = async (route, id, config) => {
    try {
        const results = await axios.get(`${route}/${id}`, config);
        console.log(results.data)
        return results
    } catch (err) {
        console.log(err.message)
    }
}

const Delete = async (route, id) => {
    try {
        /*IsTokenConnected()*/ /*Método para agregar el header Authorization*/
        const deleted = await axios.delete(`${route}/${id}`);
        console.log(deleted)
        return deleted;
    } catch (err) {
        console.log(err.message)
    }
}

const Put = async (route, id, config) => {
    try {
        /* IsTokenConnected() */ /*Método para agregar el header Authorization*/
        const results = await axios.put(`${route}/${id}`, config);
        console.log(results.data)
        return results;
    } catch (err) {
        console.log(err.message)
    }
}

const Patch = async (route, id, body) => {
    try {
        const results = await authAxios.patch(`${route}/${id}`, body)
        console.log(results)
    } catch (err) {
        console.log(err)
    }
}

const Post = async (route, body) => {
    try {
        const results = await authAxios.post(route, body)
        console.log(results)
    } catch (err) {
        console.log(err)
    }
}

export { Get, Put, Patch, Post, Delete }
