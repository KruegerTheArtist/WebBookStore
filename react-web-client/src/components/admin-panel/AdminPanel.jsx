import React from 'react';
import PainterStyleForm from './painter-style/PainterStyleForm';
import PainterForm from './painter/PainterForm';
import PublisherForm from './publisher/PublisherForm';
import CoverTypeForm from './cover-type/CoverTypeForm';
import InterpreterForm from './interpreter/InterpreterForm';
import AuthorForm from './author/AuthorForm';
import BookForm from './book/BookForm';
import './AdminPanel.module.css';



const AdminPanel = (props) => {
    return (
        <div className="admin-panel">
            <div className="admin-panel-content">
                <div className="painter-style-panel">
                    <PainterStyleForm painterStyleMethods={props.props.painterStyleMethods} state={props.props} />
                </div>
                <div className="painter-panel">
                    <PainterForm painterMethods={props.props.painterMethods} />
                </div>
                <div className="publisher-panel">
                    <PublisherForm publisherMethods={props.props.publisherMethods} />
                </div>
                <div className="cover-type-panel">
                    <CoverTypeForm coverTypeMethods={props.props.coverTypeMethods} />
                </div>
                <div className="interpreter-panel">
                    <InterpreterForm interpreterMethods={props.props.interpreterMethods} />
                </div>
                <div className="author-panel">
                    <AuthorForm authorMethods={props.props.authorMethods} />
                </div>
                <div className="book-panel">
                    <BookForm bookMethods={props.props.bookMethods} />
                </div>
            </div>
        </div>
    );
}

export default AdminPanel;
