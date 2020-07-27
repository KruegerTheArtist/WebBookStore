import React, { Component } from 'react';
import cs from './Content.module.css';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './news/News'
import Bestsellers from './bestsellers/Bestsellers'


const Content = () => {

    return (

            <div className={cs.content}>
                <Route path='/bestsellers' component={News} />
                <Route path='/catalog' component={Bestsellers} />
                <div className="item">
                    <img src='https://eduru.ru/media/2019/07/23/1263929612/_Pngtree_open_book_3298621.png' />
                </div>
                {/* <div className="item">
                Книга 2
                <img src='https://eduru.ru/media/2019/07/23/1263929612/_Pngtree_open_book_3298621.png' />
            </div>
            <div className="item">
                Книга 3
                <img src='https://eduru.ru/media/2019/07/23/1263929612/_Pngtree_open_book_3298621.png' />
            </div>
            <div className="item">
                Книга 4
                <img src='https://eduru.ru/media/2019/07/23/1263929612/_Pngtree_open_book_3298621.png' />
            </div>
            <div className="item">
                Книга 5
                <img src='https://eduru.ru/media/2019/07/23/1263929612/_Pngtree_open_book_3298621.png' />
            </div> */}
            </div>

    );
}

export default Content;
