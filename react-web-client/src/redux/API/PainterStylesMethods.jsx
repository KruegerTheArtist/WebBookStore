import * as axios from "axios";
import state, { initializeData, newGuid } from "../state";

export let setPainterStyle = (painterStyle) => {
    state.contentPage.painterStyles.push({ id: newGuid(), name: painterStyle });
    axios.post('https://localhost:44394/api/PainterStyle', { id: newGuid(), name: painterStyle }).then(response => {
        console.log('add painter style', response);
    })

    initializeData();
}

export let getPainterStyle = async () => {
    let painterStylesResponse = await axios.get('https://localhost:44394/api/PainterStyle/GetPainterStyles');
    painterStylesResponse.data.forEach(data => {
        if (!state.contentPage.painterStyles.includes(data)) {
            state.contentPage.painterStyles.push(data);
        }
    });
    return state.contentPage.painterStyles;
}

export let deletePainterStyle = (id) => {
    axios.delete('https://localhost:44394/api/PainterStyle/' + id).then(response => {
        console.log('delete painter style', response);
    })

    initializeData();
}

export let updatePainterStyle = (id, name) => {
    axios.put('https://localhost:44394/api/PainterStyle/', { id: id, name: name }).then(response => {
        console.log('update painter style', response);
    })

    initializeData();
}