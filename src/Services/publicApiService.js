import axios from 'axios';

const config = {
    headers: {
        //Aqui va el ID del equipo!!
    }
}

const Get = (route, id) => {
    axios.get(`${route}/${id}`, config)
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

// const route = 'https://jsonplaceholder.typicode.com/users';
// Get(route,null)

export default Get