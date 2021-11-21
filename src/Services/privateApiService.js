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

export { Get, Delete };