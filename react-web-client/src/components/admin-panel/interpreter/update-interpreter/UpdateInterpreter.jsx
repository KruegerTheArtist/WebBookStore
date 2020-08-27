import React from 'react';
import "./../../AdminPanel.module.css";
import { Component } from 'react';
import SelectOption from '../../../shared/select-component/SelectOption';

class UpdateInterpreter extends Component {
    oldName = React.createRef();
    name = React.createRef();
    age = React.createRef();
    description = React.createRef();
    interpreters = []

    state = {
        data: []
    };

    componentDidMount() {
        this.getInterpretersByCount(20);
    }

    getInterpretersByCount = async (count) => {
        const res = await this.props.updateInterpreter.interpreterMethods.getInterpretersByCount(count);
        res.data.previewInterpreters.forEach(data => {
            this.interpreters.push(data);
        });
        this.setState({ data: res.data })
    }

    add = () => {
        let id = this.interpreters.find(p => p.name === this.oldName.current.value).id;
        let currentName = this.name.current.value;
        let currentAge = this.age.current.value;
        let currentDescription = this.description.current.value;
        this.props.updateInterpreter.interpreterMethods.updateInterpreter(id, currentName, currentAge, currentDescription);
    }

    clear = () => {
        this.name.current.value = '';
        this.age.current.value = '';
        this.description.current.value = '';
    }
    render() {
        return (
            <div className="add-form">
                <h3>Update interpreter</h3>
                <div>
                    <select className="select" ref={this.oldName}>
                        {this.interpreters.map(data => { return < SelectOption key={data.id} name={data.name} /> })}
                    </select>
                    <input className="input" ref={this.name} placeholder="Имя переводчика" />
                </div>
                <div>
                    <input className="input" ref={this.age} placeholder="Лет переводчику" />
                </div>
                <div>
                    <input className="input" ref={this.description} placeholder="Описание" />
                </div>
                <div className="action-buttons">
                    <button className="button" onClick={this.add}>Add</button>
                    <button className="button" onClick={this.clear}>Clear</button>
                </div>
            </div >
        );
    }

}

export default UpdateInterpreter;
