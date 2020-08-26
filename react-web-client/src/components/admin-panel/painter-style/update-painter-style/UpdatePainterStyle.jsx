import React, { Component } from 'react';
import "./UpdatePainterStyle.css";

let Child = (props) => {
    return (
        <option>{props.name}
        </option>
    );
};
class UpdatePainterStyle extends Component {
    oldName = React.createRef();
    newName = React.createRef();
    painterStyles = []

    state = {
        data: []
    };

    componentDidMount() {
        this.getPainterStyles();
    }

    getPainterStyles = async () => {
        const res = await this.props.updatePainterStyle.painterStyleMethods.getPainterStyle();
        res.data.forEach(data => {
            this.painterStyles.push(data);
        });
        this.setState({ data: this.painterStyles })
    }

    updatePainterStyle = () => {
        const id = this.painterStyles.find(x => x.name === this.oldName.current.value).id;
        this.props.updatePainterStyle.painterStyleMethods.updatePainterStyle(id, this.newName.current.value);
    }

    clear = () => {
        this.newName.current.value = '';
    }

    render() {
        return (
            <div className="add-form">
                <h3>Update painter style</h3>
                <select className="select" ref={this.oldName}>
                    {this.painterStyles.map((ps) => { return <Child key={ps.id} name={ps.name} /> })}
                </select>
                <div>
                    <input className="input" ref={this.newName} placeholder="Новое название жанра" />
                </div>
                <div className="action-buttons">
                    <button className="button" onClick={this.updatePainterStyle}>Update</button>
                    <button className="button" onClick={this.clear}>Clear</button>
                </div>

            </div >
        );
    }

}

export default UpdatePainterStyle;
