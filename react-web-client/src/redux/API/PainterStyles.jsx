import * as axios from "axios";
import state, { initializeData } from "../state";
import { newGuid } from "../shared/Helper";
import config from '../../assets/settings.json';

const controllerName = 'PainterStyle';

export let setPainterStyle = (painterStyle) => {
    state.contentPage.painterStyles.push({ id: newGuid(), name: painterStyle });
    axios.post(getUrl(), { id: newGuid(), name: painterStyle }).then(response => {
        console.log('add painter style', response);
    })

    initializeData();
}

export let getPainterStyle = async () => {
    let painterStylesResponse = await axios.get(getUrl() + '/GetPainterStyles');
    painterStylesResponse.data.forEach(data => {
        if (!state.contentPage.painterStyles.includes(data)) {
            state.contentPage.painterStyles.push(data);
        }
    });

    return await axios.get(config.apiUrl + controllerName + '/GetPainterStyles');
}

export let deletePainterStyle = (id) => {
    axios.delete(getUrl() + '/' + id).then(response => {
        console.log('delete painter style', response);
    })

    initializeData();
}

export let updatePainterStyle = (id, name) => {
    axios.put(getUrl(), { id: id, name: name }).then(response => {
        console.log('update painter style', response);
    })

    initializeData();
}

let getUrl = () => {
    return config.apiUrl + controllerName;
}