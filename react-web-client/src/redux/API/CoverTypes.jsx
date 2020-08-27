import * as axios from "axios";
import state, { initializeData } from "../state";
import { newGuid } from "../shared/Helper";
import config from '../../assets/settings.json';

const controllerName = 'CoverType';

export let getCoverTypes = () => {
    axios.get(getUrl() + '/GetCoverTypes').then(response => {
        console.log('get cover type', response);
        state.contentPage.coverTypes = response.data;
    })
    return state.contentPage.coverTypes;
}

export let addCoverType = (name) => {
    let сoverType = {
        id: newGuid(),
        name
    }
    axios.post(getUrl(), сoverType).then(response => {
        console.log('add cover type', response);
    })

    initializeData();
}

export let updateCoverType = (oldName, name) => {
    let coverTypeId = state.contentPage.coverTypes.find(ps => ps.name === oldName).id
    let coverType = {
        id: coverTypeId,
        name
    }
    axios.put(getUrl(), coverType).then(response => {
        console.log('update cover type', response);
    })

    initializeData();
}

export let deleteCoverType = (name) => {
    let coverTypeId = state.contentPage.coverTypes.find(ps => ps.name === name).id

    axios.delete(getUrl() + '/' + coverTypeId).then(response => {
        console.log('delete cover type', response);
    })
    initializeData();
}

let getUrl = () => {
    return config.apiUrl + controllerName;
}