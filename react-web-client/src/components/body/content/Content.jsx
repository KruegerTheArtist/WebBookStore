import React from 'react';
import cs from './Content.module.css';
import { Route } from 'react-router-dom';
import News from './news/News'
import Bestsellers from './bestsellers/Bestsellers'
import Temp from './Temp';

//TODO Оставить только роутинг в этом компоненте
const Content = () => {

    return (

        <div className={cs.content}>
            {/* <Route exact path='/bestsellers' component={News} />
                <Route path='/catalog' component={Bestsellers} />
                <Route path='/addBook' component={Temp} /> */}

            <Route exact path='/news' render={() => <Bestsellers filter="news" /> } />
            <Route path='/sale' render={() => <Bestsellers filter="sale" /> } />
            <Route exact path='/bestsellers' render={() => <Bestsellers filter="bestsellers" /> } />
            <Route path='/presents' render={() => <Bestsellers filter="presents" /> } />
            <Route path='/preOrder' render={() => <Bestsellers filter="preOrder" /> } />
            <Route path='/catalog' render={() => <Bestsellers filter="catalog" /> } />


            <Route path='/addBook' render={() => <Temp /> } />
            <Route path='/addPainter' render={() => <Temp /> } />

            {/* <div className="item">
                    <img src='https://eduru.ru/media/2019/07/23/1263929612/_Pngtree_open_book_3298621.png' />
                </div> */}
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
