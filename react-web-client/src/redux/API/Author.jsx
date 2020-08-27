import * as axios from "axios";
import state, { initializeData } from "../state";
import { newGuid } from "../shared/Helper";
import config from '../../assets/settings.json';
import { combineUrl } from "../shared/UrlHelper";

const controllerName = 'Author';

export let getAuthorByCount = (count) => {
    axios.get(combineUrl(config.apiUrl, controllerName) + '/GetAuthors/take/' + count + '/skip/0').then(response => {
        console.log('get authors', response);
        state.contentPage.authors = response.data.previewAuthors;
    })
    return state.contentPage.authors;
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
    axios.post(combineUrl(config.apiUrl, controllerName), author).then(response => {
        console.log('add author', response);
    })

    initializeData();
}

export let updateAuthor = (oldName, name, age, description) => {
    let oldAuthor = state.contentPage.authors.find(ps => ps.name === oldName)

    let author = {
        id: oldAuthor.id,
        name,
        age,
        description,
        booksIds: [
            newGuid()
        ]
    }
    axios.put(combineUrl(config.apiUrl, controllerName), author).then(response => {
        console.log('update author', response);
    })

    initializeData();
}

export let deleteAuthor = (name) => {
    let authorId = state.contentPage.authors.find(ps => ps.name === name).id

    axios.delete(combineUrl(config.apiUrl, controllerName) + '/' + authorId).then(response => {
        console.log('delete author', response);
    })
    initializeData();
}