import * as axios from "axios";
import state, { initializeData } from "../state";
import { newGuid } from "../shared/Helper";
import { combineUrl } from "../shared/UrlHelper";

const controllerName = 'Painter';

export let getPainterByCount = async (count) => {
    return await axios.get(combineUrl(controllerName) + '/GetPainters/take/' + count + '/skip/0');
}

export let setPainter = (name, age, description, styleName) => {
    let styleId = state.contentPage.painterStyles.find(ps => ps.name === styleName).id

    let painter = {
        id: newGuid(),
        name,
        age,
        description,
        styleId: styleId,
        booksIds: [
            newGuid()
        ]
    }
    axios.post(combineUrl(controllerName), painter).then(response => {
        console.log('add painter', response);
    })

    initializeData();
}

export let deletePainter = (id) => {
    axios.delete(combineUrl(controllerName) + '/' + id).then(response => {
        console.log('delete painter', response);
    })
    initializeData();
}

export let updatePainter = (id, name, age, description, styleName) => {
    let styleId = state.contentPage.painterStyles.find(ps => ps.name === styleName).id

    let painter = {
        id,
        name,
        age,
        description,
        styleId: styleId,
        booksIds: [
            newGuid()
        ]
    }
    axios.put(combineUrl(controllerName), painter).then(response => {
        console.log('update painter', response);
    })

    initializeData();
}