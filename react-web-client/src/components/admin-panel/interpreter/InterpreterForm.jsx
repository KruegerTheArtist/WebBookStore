import React from 'react';
import AddInterpreter from './add-interpreter/AddInterpreter';
import DeleteInterpreter from './delete-interpreter/DeleteInterpreter';
import UpdateInterpreter from './update-interpreter/UpdateInterpreter';
import './InterpreterForm.css';


const InterpreterForm = (props) => {
    return (
        <div className="interpreter-form">
            <span className="title">Переводчик:</span>
            <div className="interpreter-form-content">
                <AddInterpreter className="add-panel" addInterpreter={props} />
                <DeleteInterpreter className="delete-panel" deleteInterpreter={props} />
                <UpdateInterpreter className="update-panel" updateInterpreter={props} />
            </div>
        </div>
    );
}

export default InterpreterForm;
