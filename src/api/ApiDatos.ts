import axios from "axios";



export const getDatosApi = async () => {
    const url =`https://jsonplaceholder.typicode.com/todos`
    const respDatos = await axios.get(url);
    return respDatos.data;
}
