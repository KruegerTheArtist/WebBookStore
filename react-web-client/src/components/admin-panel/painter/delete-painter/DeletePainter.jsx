import React from 'react';
import "./../../AdminPanel.css";
import { Component } from 'react';
import SelectOption from '../../../shared/select-component/SelectOption';

class DeletePainter extends Component {

    name = React.createRef();
    painters = [];
    state = {
        data: []
    }
    componentDidMount() {
        this.getPainters(20);
    }

    getPainters = async (count) => {
        const res = await this.props.deletePainter.painterMethods.getPainterByCount(count);
        res.data.previewPainters.forEach(data => {
            this.painters.push(data);
        });
        this.setState({ data: res.data })
    }

    deletePainter = () => {
        let id = this.painters.find(p => p.name === this.name.current.value);
        this.props.deletePainter.painterMethods.deletePainter(id);
    }
    render() {
        return (
            <div className="add-form" >
                <h3>Delete painter</h3>
                <select className="select" ref={this.name}>
                    {this.painters.map(data => { return <SelectOption key={data.id} name={data.name} /> })}
                </select>
                <div className="action-buttons">
                    <button className="button" onClick={this.deletePainter}>Delete</button>
                </div>
            </div >
        );
    }

}

export default DeletePainter;
