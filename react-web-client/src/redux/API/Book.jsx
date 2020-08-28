import * as axios from "axios";
import state, { initializeData } from "../state";
import { newGuid } from "../shared/Helper";
import { combineUrl } from "../shared/UrlHelper";

const controllerName = 'Book';

export let getBooksByCount = async (count) => {
    return await axios.get(combineUrl(controllerName) + '/GetBooks/take/' + count + '/skip/0');
}

export let addBook = (name, publishDate, coverTypeName, description, format, countPage, price, weight, duplicate, ageLimit, publisherName) => {
    let coverTypeId = state.contentPage.coverTypes.find(ct => ct.name === coverTypeName).id;
    let publisherId = state.contentPage.publishers.find(p => p.name === publisherName).id;

    let book = {
        id: newGuid(),
        name,
        publishDate,
        coverTypeId,
        genreId: newGuid(),
        languageId: newGuid(),
        description,
        isbN_13: '1',
        format,
        countPage,
        price,
        weight,
        duplicate,
        ageLimit,
        publisherId,
        authorsIds: [
            newGuid()
        ],
        paintersIds: [
            newGuid()
        ],
        interpretersIds: [
            newGuid()
        ]
    }
    axios.post(combineUrl(controllerName), book).then(response => {
        console.log('add book', response);
    })

    initializeData();
}

export let updateBook = (oldName, name, publishDate, coverTypeName, description, format, countPage, price, weight, duplicate, ageLimit, publisherName) => {
    let oldBook = state.contentPage.books.find(b => b.name === oldName)

    let coverTypeId = state.contentPage.coverTypes.find(ct => ct.name === coverTypeName).id;
    let publisherId = state.contentPage.publishers.find(p => p.name === publisherName).id;

    let book = {
        id: oldBook.id,
        name,
        publishDate,
        coverTypeId,
        genreId: newGuid(),
        languageId: newGuid(),
        description,
        isbN_13: '1',
        format,
        countPage,
        price,
        weight,
        duplicate,
        ageLimit,
        publisherId,
        authorsIds: [
            newGuid()
        ],
        paintersIds: [
            newGuid()
        ],
        interpretersIds: [
            newGuid()
        ]
    }
    axios.put(combineUrl(controllerName), book).then(response => {
        console.log('update book', response);
    })

    initializeData();
}

export let deleteBook = (name) => {
    let bookId = state.contentPage.books.find(ps => ps.name === name).id

    axios.delete(combineUrl(controllerName) + '/' + bookId).then(response => {
        console.log('delete book', response);
    })
    initializeData();
}