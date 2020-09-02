import * as axios from "axios";
import store from "../state";
import { newGuid } from "../shared/Helper";
import { combineUrl } from "../shared/UrlHelper";

const controllerName = 'PainterStyle';

export let setPainterStyle = (painterStyle) => {
    store.getState().contentPage.painterStyles.push({ id: newGuid(), name: painterStyle });
    axios.post(combineUrl(controllerName), { id: newGuid(), name: painterStyle }).then(response => {
        console.log('add painter style', response);
    })

    store.initializeData();
}

export let getPainterStyle = async () => {
    let res = await axios.get(combineUrl(controllerName) + '/GetPainterStyles');
    store.dispatch({type: 'get', data: res.data.styles});

    return res;
}

export let deletePainterStyle = async (id) => {
    axios.delete(combineUrl(controllerName) + '/' + id).then(response => {
        console.log('delete painter style', response);
    })
    let res = await getPainterStyle();
    store.dispatch({type: 'get', data: res.data.styles});
}

export let updatePainterStyle = (id, name) => {
    axios.put(combineUrl(controllerName), { id: id, name: name }).then(response => {
        console.log('update painter style', response);
    })

    store.initializeData();
}