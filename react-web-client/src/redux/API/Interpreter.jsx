import * as axios from "axios";
import state, { initializeData } from "../state";
import { newGuid } from "../shared/Helper";
import { combineUrl } from "../shared/UrlHelper";

const controllerName = 'Interpreter';

export let getInterpretersByCount = async (count) => {
    return await axios.get(combineUrl(controllerName) + '/GetInterpreters/take/' + count + '/skip/0');
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
    axios.post(combineUrl(controllerName), interpreter).then(response => {
        console.log('add interpreter', response);
    })

    initializeData();
}

export let deleteInterpreter = (name) => {
    let interpreterId = state.contentPage.interpreters.find(ps => ps.name === name).id

    axios.delete(combineUrl(controllerName) + '/' + interpreterId).then(response => {
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

    axios.put(combineUrl(controllerName), interpreter).then(response => {
        console.log('update interpreter', response);
    })

    initializeData();
}