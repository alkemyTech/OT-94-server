import axios from "axios";

const Patch = async (route, id, body) => {
    try {
        const response = await axios.patch(`${route}/${id}`, body)
        return
    } catch (error) {
        console.log(`User cannot be modified - error: ${error}`)
    }
}

const Post = async (route, body) => {
    try {
        const response = await axios.post(route, body)
        return
    } catch (error) {
        console.log(`User cannot be saved - error: ${error}`);
    }

}

export default { Patch, Post }