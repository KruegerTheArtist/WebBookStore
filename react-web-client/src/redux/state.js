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
        painterStyles: [],
        painters: [
            {id:'222', name:'Uou'}
        ]
    }
};

export let initializeData = () => {
    getPainterStyle();
    getPainterByCount(15);

    rerenderEntireTree(state);
}

export let setPainterStyle = (painterStyle) => {
    state.contentPage.painterStyles.push({ id: newGuid(), name: painterStyle });
    axios.post('https://localhost:44394/api/PainterStyle', { id: newGuid(), name: painterStyle }).then(response => {
        console.log('set', response);
    })

    getPainterStyle();
    rerenderEntireTree(state);
}

export let getPainterStyle = () => {
    axios.get('https://localhost:44394/api/PainterStyle/GetPainterStyles').then(response => {
        console.log('get', response);
        state.contentPage.painterStyles = response.data;
    })
    return state.contentPage.painterStyles;
}

export let deletePainterStyle = (id) => {
    axios.delete('https://localhost:44394/api/PainterStyle/' + id).then(response => {
        console.log('delete', response);
    })

    initializeData();
}

export let updatePainterStyle = (id, name) => {
    axios.put('https://localhost:44394/api/PainterStyle/',{id: id, name: name}).then(response => {
        console.log('update', response);
    })

    initializeData();
}

export let setPainter = (name, age, description, styleName) => {
    let styleId = state.contentPage.painterStyles.find(ps => ps.name === styleName).id
    console.log('styleId', styleId);
    
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
        console.log('set', response);
    })

    getPainterByCount(15);
    rerenderEntireTree(state);
}

export let getPainterByCount = (count) => {
    axios.get('https://localhost:44394/api/Painter/GetPainters/take/'+ count + '/skip/0').then(response => {
        console.log('get', response);
        state.contentPage.painters = response.data.previewPainters;
    })
    return state.contentPage.painterStyles;
}

export let deletePainter = (name) => {
    let painterId = state.contentPage.painters.find(ps => ps.name === name).id

    axios.delete('https://localhost:44394/api/Painter/' + painterId).then(response => {
        console.log('delete', response);
    })
    initializeData();
}

export let updatePainter = (id, name) => {
    axios.put('https://localhost:44394/api/PainterStyle/',{id: id, name: name}).then(response => {
        console.log('update', response);
    })

    // initializeData();
}



let newGuid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export default state;