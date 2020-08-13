import React from 'react';
import cs from './../../body/content/Content.module.css';
import AddInterpreter from './add-interpreter/AddInterpreter';
import DeleteInterpreter from './delete-interpreter/DeleteInterpreter';
import UpdateInterpreter from './update-interpreter/UpdateInterpreter';


const InterpreterForm = (props) => {
    return (

        <div className={cs.content}>
            <AddInterpreter addInterpreter={props}/>
            <DeleteInterpreter deleteInterpreter={props}/>
            <UpdateInterpreter updateInterpreter={props}/>
        </div>
    );
}

export default InterpreterForm;
