import * as axios from "axios";
import state, { initializeData } from "../state";
import { newGuid } from "../shared/Helper";
import { combineUrl } from "../shared/UrlHelper";

const controllerName = 'CoverType';

export let getCoverTypes = async () => {
    return await axios.get(combineUrl(controllerName) + '/GetCoverTypes');
}

export let addCoverType = (name) => {
    let сoverType = {
        id: newGuid(),
        name
    }
    axios.post(combineUrl(controllerName), сoverType).then(response => {
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
    axios.put(combineUrl(controllerName), coverType).then(response => {
        console.log('update cover type', response);
    })

    initializeData();
}

export let deleteCoverType = (name) => {
    let coverTypeId = state.contentPage.coverTypes.find(ps => ps.name === name).id

    axios.delete(combineUrl(controllerName) + '/' + coverTypeId).then(response => {
        console.log('delete cover type', response);
    })
    initializeData();
}