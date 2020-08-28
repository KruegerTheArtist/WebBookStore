import * as axios from "axios";
import state, { initializeData } from "../state";
import { newGuid } from "../shared/Helper";
import { combineUrl } from "../shared/UrlHelper";

const controllerName = 'PainterStyle';

export let setPainterStyle = (painterStyle) => {
    state.contentPage.painterStyles.push({ id: newGuid(), name: painterStyle });
    axios.post(combineUrl(controllerName), { id: newGuid(), name: painterStyle }).then(response => {
        console.log('add painter style', response);
    })

    initializeData();
}

export let getPainterStyle = async () => {
    return await axios.get(combineUrl(controllerName) + '/GetPainterStyles');
}

export let deletePainterStyle = (id) => {
    axios.delete(combineUrl(controllerName) + '/' + id).then(response => {
        console.log('delete painter style', response);
    })

    initializeData();
}

export let updatePainterStyle = (id, name) => {
    axios.put(combineUrl(controllerName), { id: id, name: name }).then(response => {
        console.log('update painter style', response);
    })

    initializeData();
}