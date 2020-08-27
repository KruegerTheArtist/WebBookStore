import * as axios from "axios";
import { combineUrl } from "../shared/UrlHelper";

const controllerName = 'Auth';

export let login = async (login, password) => {
    let user = {
        login,
        password
    }
    await axios.post(combineUrl(controllerName) + '/Authorize', user).then(response => {
        console.log('login', response);
        return response;
    });
}

// export let logout = async (count) => {
//     return await axios.get(combineUrl(controllerName) + '/GetAuthors/take/' + count + '/skip/0');
// }

export let register = async (login, password) => {
    let user = {
        login,
        password
    }
    await axios.post(combineUrl(controllerName) + '/Register', user).then(response => {
        console.log('register', response);
    });
}

export let getToken = (login) => {
    axios.get(combineUrl(controllerName) + login).then(response => {
        console.log('token', response);
    })
}