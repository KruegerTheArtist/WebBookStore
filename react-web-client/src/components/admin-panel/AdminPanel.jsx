import React from 'react';
import cs from './../body/content/Content.module.css';
import PainterStyleForm from './painter-style/PainterStyleForm';
import PainterForm from './painter/PainterForm';
import PublisherForm from './publisher/PublisherForm';
import CoverTypeForm from './cover-type/CoverTypeForm';
import InterpreterForm from './interpreter/InterpreterForm';



const AdminPanel = (props) => {

    return (

        <div className={cs.content}>
            <div>
                <PainterStyleForm deletePainterStyle={props.props.deletePainterStyle} updatePainterStyle={props.props.updatePainterStyle} setPainterStyle={props.props.setPainterStyle} painterStyles={props.props.content} />
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
        </div>
    );
}

export default AdminPanel;
