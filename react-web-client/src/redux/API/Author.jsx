import * as axios from "axios";
import state, { initializeData, newGuid } from "../state";

export let getAuthorByCount = (count) => {
    axios.get('https://localhost:44394/api/Author/GetAuthors/take/' + count + '/skip/0').then(response => {
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
    axios.post('https://localhost:44394/api/Author', author).then(response => {
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
    axios.put('https://localhost:44394/api/Author/', author).then(response => {
        console.log('update author', response);
    })

    initializeData();
}

export let deleteAuthor = (name) => {
    let authorId = state.contentPage.authors.find(ps => ps.name === name).id

    axios.delete('https://localhost:44394/api/Author/' + authorId).then(response => {
        console.log('delete author', response);
    })
    initializeData();
}