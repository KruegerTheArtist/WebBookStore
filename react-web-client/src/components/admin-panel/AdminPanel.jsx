import React from 'react';
import cs from './../body/content/Content.module.css';
import PainterStyleForm from './painter-style/PainterStyleForm';
import PainterForm from './painter/PainterForm';
import PublisherForm from './publisher/PublisherForm';
import CoverTypeForm from './cover-type/CoverTypeForm';
import InterpreterForm from './interpreter/InterpreterForm';
import AuthorForm from './author/AuthorForm';
import BookForm from './book/BookForm';



const AdminPanel = (props) => {
    return (

        <div className={cs.content}>
            <div>
                <PainterStyleForm painterStyleMethods={props.props.painterStyleMethods} state={props.props} />
            </div>
            <div>
                <PainterForm painterMethods={props.props.painterMethods} />
            </div>
            <div>
                <PublisherForm publisherMethods={props.props.publisherMethods}/>
            </div>
            <div>
                <CoverTypeForm coverTypeMethods={props.props.coverTypeMethods}/>
            </div>
            <div>
                <InterpreterForm interpreterMethods={props.props.interpreterMethods}/>
            </div>
            <div>
                <AuthorForm authorMethods={props.props.authorMethods}/>
            </div>
            <div>
                <BookForm bookMethods={props.props.bookMethods}/>
            </div>
        </div>
    );
}

export default AdminPanel;
