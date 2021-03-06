import { getPainterStyle } from "./API/PainterStyles";
import { getPainterByCount } from "./API/Painter";
import { getPublishersByCount } from "./API/Publisher";
import { getCoverTypes } from "./API/CoverTypes";
import { getInterpretersByCount } from "./API/Interpreter";
import { getAuthorByCount } from "./API/Author";
import { getBooksByCount } from "./API/Book";

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
        painterStyles: [{ id: "d680babb-53dc-430e-a267-11669c07fa5c", name: "Империализм" }],
        painters: [],
        publishers: [],
        interpreters: [],
        authors: []
    }
};

export let initializeData = () => {
    getPainterStyle();
    getCoverTypes();
    getPainterByCount(15);
    getPublishersByCount(10);
    getInterpretersByCount(10);
    getAuthorByCount(10);
    getBooksByCount(10);
}

export default state;