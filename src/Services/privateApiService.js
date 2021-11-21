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

const IsTokenConnected = () => {
    let token = localStorage.getItem("token");
    if (token !== null) {
        let data = {
            headers: {
                authorization: `Bearer ${token}`
            }
        }
        return data;
    } else {
        return console.log("Error, no hay token")
    }
}

export default Get;