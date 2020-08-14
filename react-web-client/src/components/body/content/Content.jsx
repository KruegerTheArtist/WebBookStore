import React from 'react';
import cs from './Content.module.css';
import { Route } from 'react-router-dom';
import Bestsellers from './bestsellers/Bestsellers'
import Temp from './Temp';
import AdminPanel from './../../admin-panel/AdminPanel';

//TODO Оставить только роутинг в этом компоненте
const Content = (props) => {
    
    return (

        <div className={cs.content}>
            <Route path='/news' render={() => <Bestsellers filter="news" books={props.content.books} /> } />
            <Route path='/sale' render={() => <Bestsellers filter="sale" books={props.content.books} /> } />
            <Route path='/bestsellers' render={() => <Bestsellers filter="bestsellers" books={props.content.books} books1={props.content} /> } />
            <Route path='/presents' render={() => <Bestsellers filter="presents" books={props.content.books} /> } />
            <Route path='/preOrder' render={() => <Bestsellers filter="preOrder" books={props.content.books} /> } />
            <Route path='/catalog' render={() => <Bestsellers filter="catalog" books={props.content.books}  /> } />

            <Route path='/adminPanel' render={() => <AdminPanel props={props} /> } />

            {/* <Route path='/addBook' render={() => <Temp /> } />
            <Route path='/addPainter' render={() => <Temp /> } />
            <Route path='/addPainterStyle' render={() => <AddPainterStyle setPainterStyle={props.setPainterStyle} /> } /> */}
        </div>
    );
}

export default Content;
