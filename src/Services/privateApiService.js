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

export default { Get, Patch, Post }
