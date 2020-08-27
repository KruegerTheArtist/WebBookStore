import * as axios from "axios";
import { initializeData } from "../state";
import { newGuid } from "../shared/Helper";
import config from '../../assets/settings.json';

const controllerName = 'Publisher';

export let addPublisher = (name) => {
    let publisher = {
        id: newGuid(),
        name,
        booksIds: [
            newGuid()
        ]
    }
    axios.post(getUrl(), publisher).then(response => {
        console.log('add publisher', response);
    })

    initializeData();
}

export let deletePublisher = (id) => {
    axios.delete(getUrl() + '/' + id).then(response => {
        console.log('delete publisher', response);
    })
    initializeData();
}

export let getPublishersByCount = async (count) => {
    return await axios.get(getUrl() + '/GetPublishers/take/' + count + '/skip/0');
}

export let updatePublisher = (id, name) => {
    let publisher = {
        id: id,
        name,
        booksIds: [
            newGuid()
        ]
    }
    axios.put(getUrl(), publisher).then(response => {
        console.log('update publisher', response);
    })

    initializeData();
}

let getUrl = () => {
    return config.apiUrl + controllerName;
}