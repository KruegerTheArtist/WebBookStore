import * as axios from "axios";
import state, { initializeData } from "../state";
import { newGuid } from "../shared/Helper";

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
    axios.post('https://localhost:44394/api/Painter', painter).then(response => {
        console.log('add painter', response);
    })

    initializeData();
}

export let getPainterByCount = (count) => {
    axios.get('https://localhost:44394/api/Painter/GetPainters/take/' + count + '/skip/0').then(response => {
        console.log('get painter', response);
        state.contentPage.painters = response.data.previewPainters;
    })
    return state.contentPage.painterStyles;
}

export let deletePainter = (name) => {
    let painterId = state.contentPage.painters.find(ps => ps.name === name).id

    axios.delete('https://localhost:44394/api/Painter/' + painterId).then(response => {
        console.log('delete painter', response);
    })
    initializeData();
}

export let updatePainter = (oldName, name, age, description, styleName) => {
    let oldPainter = state.contentPage.painters.find(ps => ps.name === oldName)
    let styleId = state.contentPage.painterStyles.find(ps => ps.name === styleName).id

    let painter = {
        id: oldPainter.id,
        name,
        age,
        description,
        styleId: styleId,
        booksIds: [
            newGuid()
        ]
    }
    axios.put('https://localhost:44394/api/Painter/', painter).then(response => {
        console.log('update painter', response);
    })

    initializeData();
}