import * as axios from "axios";
import store from "../state";
import { newGuid } from "../shared/Helper";
import { combineUrl } from "../shared/UrlHelper";

const controllerName = 'Author';

export let getAuthorByCount = async (count) => {
    return await axios.get(combineUrl(controllerName) + '/GetAuthors/take/' + count + '/skip/0');
}

export let addAuthor = (name, age, description) => {
    let author = {
        id: newGuid(),
        name,
        age,
        description,
        booksIds: [
            newGuid()
        ]
    }
    axios.post(combineUrl(controllerName), author).then(response => {
        console.log('add author', response);
    })

    store.initializeData();
}

export let updateAuthor = (oldName, name, age, description) => {
    let oldAuthor = store._state.contentPage.authors.find(ps => ps.name === oldName)

    let author = {
        id: oldAuthor.id,
        name,
        age,
        description,
        booksIds: [
            newGuid()
        ]
    }
    axios.put(combineUrl(controllerName), author).then(response => {
        console.log('update author', response);
    })

    store.initializeData();
}

export let deleteAuthor = (name) => {
    let authorId = store._state.contentPage.authors.find(ps => ps.name === name).id

    axios.delete(combineUrl(controllerName) + '/' + authorId).then(response => {
        console.log('delete author', response);
    })
    store.initializeData();
}