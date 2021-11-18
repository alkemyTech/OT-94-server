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

const Patch = (route, id) => {
    const requestInit = {
        method: 'PATCH',
        headers: {    
            Authorization: 'userToken'
        },
        body: JSON.stringify(),
    };
    fetch(`${route}/${id}`, requestInit)
        .then((res) => res.text())
        .then((res) => console.log(res))
}

export default Get;
export default Patch;