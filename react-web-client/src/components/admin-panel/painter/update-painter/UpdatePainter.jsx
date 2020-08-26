import React, { Component } from 'react';
import "./../../AdminPanel.module.css";

class UpdatePainter extends Component {
    oldName = React.createRef();
    name = React.createRef();
    age = React.createRef();
    description = React.createRef();
    style = React.createRef();

    name = React.createRef();
    painters = [];
    state = {
        data: []
    }
    componentDidMount() {
        this.getPainters(20);
    }

    getPainters = async (count) => {
        const res = await this.props.updatePainter.painterMethods.getPainterByCount(count);
        res.data.previewPainters.forEach(data => {
            this.painters.push(data);
        });
        this.setState({ data: res.data })
    }

    add = () => {
        let currentoldName = this.oldName.current.value;
        let currentName = this.name.current.value;
        let currentAge = this.age.current.value;
        let currentDescription = this.description.current.value;
        let currentStyle = this.style.current.value;

        this.props.updatePainter.painterMethods.updatePainter(currentoldName, currentName, currentAge, currentDescription, currentStyle);
    }

    clear = () => {
        this.oldName.current.value = '';
        this.name.current.value = '';
        this.age.current.value = '';
        this.description.current.value = '';
        this.style.current.value = '';
    }

    render() {
        return (
            <div className="add-form">
                <h3>Update painter</h3>
                <div>
                    <input className="input" ref={this.oldName} placeholder="Старое художника" />
                    <input className="input" ref={this.name} placeholder="Имя художника" />

                </div>
                <div>
                    <input className="input" ref={this.age} placeholder="Лет художнику" />
                </div>
                <div>
                    <input className="input" ref={this.description} placeholder="Описание" />
                </div>
                <div>
                    <input className="input" ref={this.style} placeholder="Стиль" />
                </div>
                <div>
                    <button className="button" onClick={this.add}>Add</button>
                    <button className="button" onClick={this.clear}>Clear</button>
                </div>
            </div >
        );
    }

}

export default UpdatePainter;
