import axios from "axios";

const Patch = async (route, id, body) => {
    try {
        const response = await axios.patch(`${route}/${id}`, body)
        return
    } catch (error) {
        return error
    }
}

const Post = async (route, body) => {
    try {
        const response = await axios.post(route, body)
        return
    } catch (error) {
        return error
    }

}

export default { Patch, Post }