import React from 'react';
import cs from './Content.module.css';
import { Route } from 'react-router-dom';
import Bestsellers from './bestsellers/Bestsellers'
import Temp from './Temp';
import AddPainterStyle from './painter-style/AddPainterStyle';

//TODO Оставить только роутинг в этом компоненте
const Content = (props) => {
    
    return (

        <div className={cs.content}>
            <Route path='/news' render={() => <Bestsellers filter="news" books={props.content.books} /> } />
            <Route path='/sale' render={() => <Bestsellers filter="sale" books={props.content.books} /> } />
            <Route path='/bestsellers' render={() => <Bestsellers filter="bestsellers" books={props.content.books} books1={props.content} /> } />
            <Route path='/presents' render={() => <Bestsellers filter="presents" books={props.content.books} /> } />
            <Route path='/preOrder' render={() => <Bestsellers filter="preOrder" books={props.content.books} /> } />
            <Route path='/catalog' render={() => <Bestsellers filter="catalog"books={props.content.books}  /> } />
            <Route path='/addBook' render={() => <Temp /> } />
            <Route path='/addPainter' render={() => <Temp /> } />
            <Route path='/addPainterStyle' render={() => <AddPainterStyle addPainterStyle={props.addPainterStyle} /> } />
        </div>
    );
}

export default Content;
