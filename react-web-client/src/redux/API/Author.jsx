import * as axios from "axios";
import state, { initializeData } from "../state";
import { newGuid } from "../shared/Helper";
import config from '../../assets/settings.json';

const controllerName = 'Author';

export let getAuthorByCount = (count) => {
    axios.get(getUrl() + '/GetAuthors/take/' + count + '/skip/0').then(response => {
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
    axios.post(getUrl(), author).then(response => {
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
    axios.put(getUrl(), author).then(response => {
        console.log('update author', response);
    })

    initializeData();
}

export let deleteAuthor = (name) => {
    let authorId = state.contentPage.authors.find(ps => ps.name === name).id

    axios.delete(getUrl() + '/' + authorId).then(response => {
        console.log('delete author', response);
    })
    initializeData();
}

let getUrl = () => {
    return config.apiUrl + controllerName;
}