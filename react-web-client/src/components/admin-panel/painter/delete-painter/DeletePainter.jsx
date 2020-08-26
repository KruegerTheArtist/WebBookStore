import React from 'react';
import "./../../AdminPanel.module.css";
import { Component } from 'react';

class DeletePainter extends Component {

    name = React.createRef();
    painters = [];
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

    deletePainter = () => {
        let currentName = name.current.value;
        props.deletePainter.painterMethods.deletePainter(currentName);
    }
    render() {
        return (
            <div className="add-form" >
                <h3>Delete painter</h3>
                <div>
                    <input className="input" ref={name} placeholder="Имя художника" />
                </div>
                <div>
                    <button className="button" onClick={deletePainter}>Delete</button>
                </div>
            </div >
        );
    }

}

export default DeletePainter;
