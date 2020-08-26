import React, { Component } from 'react';
import "./DeletePublisher.css";
import SelectOption from '../../../shared/select-component/SelectOption';

class DeletePublisher extends Component {
    name = React.createRef();
    publishers = [];
    state = {
        data: []
    }
    componentDidMount() {
        this.getPublishers(20);
    }

    getPublishers = async (count) => {
        const res = await this.props.deletePublisher.publisherMethods.getPublishersByCount(count);
        res.data.previewPublishers.forEach(data => {
            this.publishers.push(data);
          });
        this.setState({ data: res.data })
    }

    deletePublisher = () => {
        const id = this.publishers.find(x => x.name === this.name.current.value).id;
        this.props.deletePublisher.publisherMethods.deletePublisher(id);
    }

    render() {
        return (
            <div className="add-form">
                <h3>Delete publisher</h3>
                <select ref={this.name}>
                    {this.publishers.map(data => { return <SelectOption key={data.id} name={data.name} /> })}
                </select>
                <div>
                    <button className="button" onClick={this.deletePublisher}>delete</button>
                </div>

            </div >
        );
    }

}

export default DeletePublisher;
