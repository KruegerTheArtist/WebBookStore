import React, { Component } from 'react';
import "./DeletePainterStyle.css";

let Child = (props) => {
  return (
    <option>{props.name}
    </option>
  );
};

class DeletePainterStyle extends Component {
  name = React.createRef();
  painterStyles = []

  state = {
    data: []
  };

  componentDidMount() {
    this.getPainterStyles();
  }

  getPainterStyles = async () => {
    const res = await this.props.deletePainterStyle.painterStyleMethods.getPainterStyle();
    res.data.forEach(data => {
      this.painterStyles.push(data);
    });
    this.setState({ data: this.painterStyles })
  }

  deletePainter = () => {
    const id = this.painterStyles.find(x => x.name === this.name.current.value).id;
    this.props.deletePainterStyle.painterStyleMethods.deletePainterStyle(id);
  }

  render() {
    return (
      < div className="add-form" >
        <h3>Delete painter style</h3>
        <select className="select" ref={this.name}>
          {this.painterStyles.map((ps) => { return <Child key={ps.id} name={ps.name} /> })}
        </select>
        <div className="action-buttons">
          <button className="button" onClick={this.deletePainter}>delete</button>
        </div>

      </div >
    )

  }

}

export default DeletePainterStyle;