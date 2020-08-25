import * as axios from "axios";
import state, { initializeData, newGuid } from "../state";

export let addPublisher = (name) => {
    let publisher = {
        id: newGuid(),
        name,
        booksIds: [
            newGuid()
        ]
    }
    axios.post('https://localhost:44394/api/Publisher', publisher).then(response => {
        console.log('add publisher', response);
    })

    initializeData();
}

export let deletePublisher = (name) => {
    let publisherId = state.contentPage.publishers.find(ps => ps.name === name).id

    axios.delete('https://localhost:44394/api/Publisher/' + publisherId).then(response => {
        console.log('delete publisher', response);
    })
    initializeData();
}

export let getPublishersByCount = (count) => {
    axios.get('https://localhost:44394/api/Publisher/GetPublishers/take/' + count + '/skip/0').then(response => {
        console.log('get publisher', response);
        state.contentPage.publishers = response.data.previewPublishers;
    })
    return state.contentPage.publishers;
}

export let updatePublisher = (oldName, name) => {
    let publisherId = state.contentPage.publishers.find(ps => ps.name === oldName).id
    let publisher = {
        id: publisherId,
        name,
        booksIds: [
            newGuid()
        ]
    }
    axios.put('https://localhost:44394/api/Publisher/', publisher).then(response => {
        console.log('update publisher', response);
    })

    initializeData();
}