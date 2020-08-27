import * as axios from "axios";
import state, { initializeData } from "../state";
import { newGuid } from "../shared/Helper";
import { combineUrl } from "../shared/UrlHelper";
import config from '../../assets/settings.json';

const controllerName = 'PainterStyle';

export let setPainterStyle = (painterStyle) => {
    state.contentPage.painterStyles.push({ id: newGuid(), name: painterStyle });
    axios.post(combineUrl(config.apiUrl, controllerName), { id: newGuid(), name: painterStyle }).then(response => {
        console.log('add painter style', response);
    })

    initializeData();
}

export let getPainterStyle = async () => {
    let painterStylesResponse = await axios.get(combineUrl(config.apiUrl, controllerName) + '/GetPainterStyles');
    painterStylesResponse.data.forEach(data => {
        if (!state.contentPage.painterStyles.includes(data)) {
            state.contentPage.painterStyles.push(data);
        }
    });

    return await axios.get(combineUrl(config.apiUrl, controllerName) + '/GetPainterStyles');
}

export let deletePainterStyle = (id) => {
    axios.delete(combineUrl(config.apiUrl, controllerName) + '/' + id).then(response => {
        console.log('delete painter style', response);
    })

    initializeData();
}

export let updatePainterStyle = (id, name) => {
    axios.put(combineUrl(config.apiUrl, controllerName), { id: id, name: name }).then(response => {
        console.log('update painter style', response);
    })

    initializeData();
}