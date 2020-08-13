import { rerenderEntireTree } from "../render";
import * as axios from "axios";

let state = {
    contentPage: {
        books: [
            { id: 1, name: 'Harry Potter', url: 'https://cdn1.ozone.ru/multimedia/1013719856.jpg', price: 22 },
            { id: 2, name: 'Master', url: 'https://www.bgoperator.ru/bgmarket/pr_img/1002110015/20191031/30734695/%5B978-5-04-107698-6%5D.jpg', price: 2213 },
            { id: 3, name: 'Otello', url: 'https://booktouch.ru/data/26/18449/GQBL2U4uAfTZfjfOFNS63KlQhCddcV.jpeg', price: 432 },
            { id: 4, name: 'About vampires', url: 'https://26.img.avito.st/640x480/5722920226.jpg', price: 123 },
            { id: 5, name: 'BLM', url: 'https://dwtr67e3ikfml.cloudfront.net/bookCovers/27de7dc0ea9c29ad29b5561cb48a45a7cabdf72e-thumb', price: 456 },
            { id: 6, name: 'About ReactJs', url: 'https://s4-goods.ozstatic.by/200/867/809/10/10809867_0.jpg', price: 234 },
            { id: 7, name: 'About Angular', url: 'https://www.themedownloaded.com/wp-content/uploads/2019/09/angular-tutorial-265x331.jpg', price: 45636 },
            { id: 8, name: 'About .Net', url: 'https://cdn.waterstones.com/bookjackets/medium/9780/1314/9780131472273.jpg', price: 234 },
            { id: 9, name: 'JAVA', url: 'https://images.gr-assets.com/books/1487897948l/34384246.jpg', price: 743 },
            { id: 10, name: 'Ninja Angular', url: 'http://www.angularjs4u.com/wp-content/uploads/2017/03/Become-a-ninja-with-Angular-285x300.png', price: 164 },
            { id: 11, name: 'JDMWay', url: 'https://i.pinimg.com/236x/d2/ea/d0/d2ead01e2b26a4c3d00974048f7d16d4--japanese-graphic-design-japanese-art.jpg', price: 256 },
            { id: 12, name: 'Kokimoto', url: 'https://i.pinimg.com/236x/5d/80/a6/5d80a66582a5fd10cc59289f986a942a--book-design-cover-design.jpg', price: 258 }
        ],
        coverTypes: [],
        painterStyles: [],
        painters: [],
        publishers: [],
        interpreters: []
    }
};

export let initializeData = () => {
    getPainterStyle();
    getCoverTypes();
    getPainterByCount(15);
    getPublishersByCount(10);
    getInterpretersByCount(10);
    rerenderEntireTree(state);
}

// TODO: вынести в отдельный компонент
export let setPainterStyle = (painterStyle) => {
    state.contentPage.painterStyles.push({ id: newGuid(), name: painterStyle });
    axios.post('https://localhost:44394/api/PainterStyle', { id: newGuid(), name: painterStyle }).then(response => {
        console.log('add painter style', response);
    })

    getPainterStyle();
    // rerenderEntireTree(state);
}

export let getPainterStyle = () => {
    axios.get('https://localhost:44394/api/PainterStyle/GetPainterStyles').then(response => {
        console.log('get painter style', response);
        state.contentPage.painterStyles = response.data;
    })
    return state.contentPage.painterStyles;
}

export let deletePainterStyle = (id) => {
    axios.delete('https://localhost:44394/api/PainterStyle/' + id).then(response => {
        console.log('delete painter style', response);
    })

    initializeData();
}

export let updatePainterStyle = (id, name) => {
    axios.put('https://localhost:44394/api/PainterStyle/',{id: id, name: name}).then(response => {
        console.log('update painter style', response);
    })

    initializeData();
}

// TODO: вынести в отдельный компонент
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

    getPainterByCount(15);
    // rerenderEntireTree(state);
}

export let getPainterByCount = (count) => {
    axios.get('https://localhost:44394/api/Painter/GetPainters/take/'+ count + '/skip/0').then(response => {
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
        booksIds: oldPainter.booksIds
    }
    axios.put('https://localhost:44394/api/Painter/', painter).then(response => {
        console.log('update painter', response);
    })

    initializeData();
}

// TODO: вынести в отдельный компонент
export let addPublisher = (name) => {
    let publisher = {
        id: newGuid(),
        name,
        booksIds: [
            newGuid()
        ]
      }
    axios.post('https://localhost:44394/api/Publisher', publisher).then(response => {
        console.log('add publisher', response);
    })

    getPublishersByCount(10);
    // rerenderEntireTree(state);
}

export let deletePublisher = (name) => {
    let publisherId = state.contentPage.publishers.find(ps => ps.name === name).id

    axios.delete('https://localhost:44394/api/Publisher/' + publisherId).then(response => {
        console.log('delete publisher', response);
    })
    initializeData();
}

export let getPublishersByCount = (count) => {
    axios.get('https://localhost:44394/api/Publisher/GetPublishers/take/'+ count + '/skip/0').then(response => {
        console.log('get publisher', response);
        state.contentPage.publishers = response.data.previewPublishers;
    })
    return state.contentPage.publishers;
}

export let updatePublisher = (oldName, name) => {
    let publisherId = state.contentPage.publishers.find(ps => ps.name === oldName).id
    let publisher = {
        id: publisherId,
        name,
        booksIds: [
            newGuid()
        ]
      }
    axios.put('https://localhost:44394/api/Publisher/', publisher).then(response => {
        console.log('update publisher', response);
    })

    initializeData();
}

// TODO: вынести в отдельный компонент
export let getCoverTypes = () => {
    axios.get('https://localhost:44394/api/CoverType/GetCoverTypes').then(response => {
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
    axios.post('https://localhost:44394/api/CoverType', сoverType).then(response => {
        console.log('add cover type', response);
    })

    getCoverTypes(10);
    // rerenderEntireTree(state);
}

export let updateCoverType = (oldName, name) => {
    let coverTypeId = state.contentPage.coverTypes.find(ps => ps.name === oldName).id
    let coverType = {
        id: coverTypeId,
        name
      }
    axios.put('https://localhost:44394/api/CoverType/', coverType).then(response => {
        console.log('update cover type', response);
    })

    initializeData();
}

export let deleteCoverType = (name) => {
    let coverTypeId = state.contentPage.coverTypes.find(ps => ps.name === name).id

    axios.delete('https://localhost:44394/api/CoverType/' + coverTypeId).then(response => {
        console.log('delete cover type', response);
    })
    initializeData();
}

// TODO вынести в отдельный компонент

export let getInterpretersByCount = (count) => {
    axios.get('https://localhost:44394/api/Interpreter/GetInterpreters/take/'+ count + '/skip/0').then(response => {
        console.log('get interpreters', response);
        state.contentPage.interpreters = response.data.previewInterpreters;
    })
    return state.contentPage.interpreters;
}

export let addInterpreter = (name, age, description) => {
    let interpreter = {
        id: newGuid(),
        name,
        age,
        description,
        booksIds: [
            newGuid()
        ]
      }
    axios.post('https://localhost:44394/api/Interpreter', interpreter).then(response => {
        console.log('add interpreter', response);
    })

    getInterpretersByCount(10);
    // rerenderEntireTree(state);
}

export let deleteInterpreter = (name) => {
    let interpreterId = state.contentPage.interpreters.find(ps => ps.name === name).id

    axios.delete('https://localhost:44394/api/Interpreter/' + interpreterId).then(response => {
        console.log('delete interpreter', response);
    })
    initializeData();
}

let newGuid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export default state;