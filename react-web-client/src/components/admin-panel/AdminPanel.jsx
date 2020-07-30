import React from 'react';
import cs from './../body/content/Content.module.css';
import PainterStyleForm from './painter-style/PainterStyleForm';
import PainterForm from './painter/PainterForm';


const AdminPanel = (props) => {
    
    return (

        <div className={cs.content}>
            <PainterStyleForm deletePainterStyle={props.props.deletePainterStyle}  updatePainterStyle={props.props.updatePainterStyle} setPainterStyle={props.props.setPainterStyle} painterStyles={props.props.content} />
            <PainterForm painterMethods={props.props.painterMethods}/>

        </div>
    );
}

export default AdminPanel;
