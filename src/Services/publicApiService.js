import axios from 'axios';

const config = {
    headers: {
        //Aqui va el ID del equipo!!
    }
}

const route = 'https://jsonplaceholder.typicode.com/users';
const id = 1;

const Get = (route, id) => {
    axios.get(`${route}/${id}`, config)
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

export default Get