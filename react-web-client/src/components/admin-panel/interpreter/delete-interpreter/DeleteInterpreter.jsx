import React from 'react';
import "./../../AdminPanel.module.css";
import { Component } from 'react';
import SelectOption from '../../../shared/select-component/SelectOption';

class DeleteInterpreter extends Component {
    name = React.createRef();
    interpreters = []

    state = {
        data: []
    };

    componentDidMount() {
        this.getInterpretersByCount(20);
    }

    getInterpretersByCount = async (count) => {
        const res = await this.props.deleteInterpreter.interpreterMethods.getInterpretersByCount(count);
        res.data.previewInterpreters.forEach(data => {
            this.interpreters.push(data);
        });
        this.setState({ data: res.data })
    }

    deleteInterpreter = () => {
        let currentName = this.name.current.value;
        this.props.deleteInterpreter.interpreterMethods.deleteInterpreter(currentName);
    }

    render() {
        return (
            <div className="add-form">
                <h3>Delete interpreter</h3>
                <div>
                    <select className="select" ref={this.name}>
                        {this.interpreters.map(data => { return <SelectOption key={data.id} name={data.name} /> })}
                    </select>
                </div>
                <div className="action-buttons">
                    <button className="button" onClick={this.deleteInterpreter}>Delete</button>
                </div>
            </div >
        );
    }

}

export default DeleteInterpreter;
