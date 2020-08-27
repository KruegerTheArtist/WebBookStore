import * as axios from "axios";
import { initializeData } from "../state";
import { newGuid } from "../shared/Helper";
import { combineUrl } from "../shared/UrlHelper";

const controllerName = 'Publisher';

export let getPublishersByCount = async (count) => {
    return await axios.get(combineUrl(controllerName) + '/GetPublishers/take/' + count + '/skip/0');
}

export let addPublisher = (name) => {
    let publisher = {
        id: newGuid(),
        name,
        booksIds: [
            newGuid()
        ]
    }
    axios.post(combineUrl(controllerName), publisher).then(response => {
        console.log('add publisher', response);
    })

    initializeData();
}

export let deletePublisher = (id) => {
    axios.delete(combineUrl(controllerName) + '/' + id).then(response => {
        console.log('delete publisher', response);
    })
    initializeData();
}


export let updatePublisher = (id, name) => {
    let publisher = {
        id: id,
        name,
        booksIds: [
            newGuid()
        ]
    }
    axios.put(combineUrl(controllerName), publisher).then(response => {
        console.log('update publisher', response);
    })

    initializeData();
}