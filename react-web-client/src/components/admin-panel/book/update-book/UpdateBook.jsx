import React from 'react';
import "./UpdateBook.css";

const UpdateBook = (props) => {
    let oldName = React.createRef();
    let name = React.createRef();
    let ageLimit = React.createRef();
    let description = React.createRef();
    let publishDate = React.createRef();
    let coverTypeName = React.createRef();
    let format = React.createRef();
    let countPage = React.createRef();
    let price = React.createRef();
    let weight = React.createRef();
    let duplicate = React.createRef();
    let publisherName = React.createRef();

    let add = () => {
        let currentoldName = oldName.current.value;
        let currentName = name.current.value;
        let currentAgeLimit = ageLimit.current.value;
        let currentDescription = description.current.value;
        let currentPublishDate = publishDate.current.value;
        let currentCoverTypeName = coverTypeName.current.value;
        let currentFormat = format.current.value;
        let currentCountPage = countPage.current.value;
        let currentPrice = price.current.value;
        let currentWeight = weight.current.value;
        let currentDuplicate = duplicate.current.value;
        let currentPublisherName = publisherName.current.value;

        props.updateBook.bookMethods.updateBook(currentoldName, currentName, currentPublishDate,currentCoverTypeName, currentDescription, currentFormat, currentCountPage, currentPrice, currentWeight, currentDuplicate, currentAgeLimit, currentPublisherName);
    }

    let clear = () => {
        oldName.current.value = '';
        name.current.value = '';
        ageLimit.current.value = '';
        description.current.value = '';
        publishDate.current.value = '';
        coverTypeName.current.value = '';
        format.current.value = '';
        countPage.current.value = '';
        price.current.value = '';
        weight.current.value = '';
        duplicate.current.value = '';
        publisherName.current.value = '';
    }
    return (
        <div className="add-form">
            <h3>Update book</h3>
            <div>
                <input className="input" ref={oldName} placeholder="Старое название книги" />
                <input className="input" ref={name} placeholder="Название книги" />
            </div>
            <div>
                <input className="input" ref={publishDate} placeholder="Дата публикации" />
            </div>
            <div>
                <input className="input" ref={coverTypeName} placeholder="Тип переплета" />
            </div>
            <div>
                <input className="input" ref={format} placeholder="format" />
            </div>
            <div>
                <input className="input" ref={countPage} placeholder="Количество страниц" />
            </div>
            <div>
                <input className="input" ref={price} placeholder="Стоимость" />
            </div>
            <div>
                <input className="input" ref={weight} placeholder="Вес" />
            </div>
            <div>
                <input className="input" ref={duplicate} placeholder="duplicate" />
            </div>
            <div>
                <input className="input" ref={ageLimit} placeholder="ageLimit" />
            </div>
            <div>
                <input className="input" ref={description} placeholder="Описание" />
            </div>
            <div>
                <input className="input" ref={publisherName} placeholder="Имя издателя" />
            </div>
            <div>
                <button className="button" onClick={add}>Add</button>
                <button className="button" onClick={clear}>Clear</button>
            </div>
        </div >
    );
}

export default UpdateBook;
