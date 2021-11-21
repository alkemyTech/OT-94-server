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

export { Get, Put }