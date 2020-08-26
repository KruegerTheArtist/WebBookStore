import * as axios from "axios";
import state, { initializeData } from "../state";
import { newGuid } from "../shared/Helper";

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

export let deletePublisher = (id) => {
    axios.delete('https://localhost:44394/api/Publisher/' + id).then(response => {
        console.log('delete publisher', response);
    })
    initializeData();
}

export let getPublishersByCount = async (count) => {
    // await axios.get('https://localhost:44394/api/Publisher/GetPublishers/take/' + count + '/skip/0');
    return await axios.get('https://localhost:44394/api/Publisher/GetPublishers/take/' + count + '/skip/0');
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