import React from 'react';
import "./../../AdminPanel.module.css";
import { Component } from 'react';
import SelectOption from '../../../shared/select-component/SelectOption';

class UpdatePublisher extends Component {
    oldName = React.createRef();
    newName = React.createRef();
    publishers = [];
    state = {
        data: []
    }
    componentDidMount() {
        this.getPublishers(20);
    }

    getPublishers = async (count) => {
        const res = await this.props.updatePublisher.publisherMethods.getPublishersByCount(count);
        res.data.previewPublishers.forEach(data => {
            this.publishers.push(data);
        });
        this.setState({ data: res.data })
    }

    updatePublisher = () => {
        let currentName = this.newName.current.value;
        const id = this.publishers.find(x => x.name === this.oldName.current.value).id;
        this.props.updatePublisher.publisherMethods.updatePublisher(id, currentName);
    }

    clear = () => {
        this.newName.current.value = '';
    }
    render() {
        return (
            <div className="add-form" >
                <h3>Update publisher</h3>
                <select className="select" ref={this.oldName}>
                    {this.publishers.map(data => { return <SelectOption key={data.id} name={data.name} /> })}
                </select>
                <div>
                    <input className="input" ref={this.newName} placeholder="Новое название издателя" />
                </div>
                <div>
                    <button className="button" onClick={this.updatePublisher}>update</button>
                    <button className="button" onClick={this.clear}>Clear</button>
                </div>

            </div >
        );
    }

}

export default UpdatePublisher;
