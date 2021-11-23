import axios from 'axios';

const config = {
  headers: {
    Group: 01, //Aqui va el ID del equipo!!
  },
};

export const Get = (route, id) => {
  axios
    .get(`${route}/${id}`, config)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export const POST = (url, data) => {
  axios
    .post(url, data, config)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
