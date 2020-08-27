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

export let getPainterByCount = async (count) => {
    return await axios.get('https://localhost:44394/api/Painter/GetPainters/take/' + count + '/skip/0');
}

export let deletePainter = (id) => {
    axios.delete('https://localhost:44394/api/Painter/' + id).then(response => {
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
    axios.put('https://localhost:44394/api/Painter/', painter).then(response => {
        console.log('update painter', response);
    })

    initializeData();
}