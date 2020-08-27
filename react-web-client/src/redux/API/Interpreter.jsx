import * as axios from "axios";
import state, { initializeData } from "../state";
import { newGuid } from "../shared/Helper";
import config from '../../assets/settings.json';

const controllerName = 'Interpreter';

export let getInterpretersByCount = async (count) => {
    return await axios.get(getUrl() + '/GetInterpreters/take/' + count + '/skip/0');
}

export let addInterpreter = (name, age, description) => {
    let interpreter = {
        id: newGuid(),
        name,
        age,
        description,
        booksIds: [
            newGuid()
        ]
    }
    axios.post(getUrl(), interpreter).then(response => {
        console.log('add interpreter', response);
    })

    initializeData();
}

export let deleteInterpreter = (name) => {
    let interpreterId = state.contentPage.interpreters.find(ps => ps.name === name).id

    axios.delete(getUrl() + '/' + interpreterId).then(response => {
        console.log('delete interpreter', response);
    })
    initializeData();
}

export let updateInterpreter = (id, name, age, description) => {
    let interpreter = {
        id,
        name,
        age,
        description,
        booksIds: [
            newGuid()
        ]
    }

    axios.put(getUrl(), interpreter).then(response => {
        console.log('update interpreter', response);
    })

    initializeData();
}

let getUrl = () => {
    return config.apiUrl + controllerName;
}