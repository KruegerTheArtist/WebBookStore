import React from 'react';
import cs from './../../body/content/Content.module.css';
import AddInterpreter from './add-interpreter/AddInterpreter';
import DeleteInterpreter from './delete-interpreter/DeleteInterpreter';


const InterpreterForm = (props) => {
    console.log('PAAAA', props);
    
    return (

        <div className={cs.content}>
            <AddInterpreter addInterpreter={props}/>
            <DeleteInterpreter deleteInterpreter={props}/>
            {/* <UpdatePainter updatePainter={props}/> */}
        </div>
    );
}

export default InterpreterForm;
