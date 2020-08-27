import * as axios from "axios";
import state, { initializeData } from "../state";
import { newGuid } from "../shared/Helper";
import config from '../../assets/settings.json';
import { combineUrl } from "../shared/UrlHelper";

const controllerName = 'CoverType';

export let getCoverTypes = () => {
    axios.get(combineUrl(config.apiUrl, controllerName) + '/GetCoverTypes').then(response => {
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
    axios.post(combineUrl(config.apiUrl, controllerName), сoverType).then(response => {
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
    axios.put(combineUrl(config.apiUrl, controllerName), coverType).then(response => {
        console.log('update cover type', response);
    })

    initializeData();
}

export let deleteCoverType = (name) => {
    let coverTypeId = state.contentPage.coverTypes.find(ps => ps.name === name).id

    axios.delete(combineUrl(config.apiUrl, controllerName) + '/' + coverTypeId).then(response => {
        console.log('delete cover type', response);
    })
    initializeData();
}