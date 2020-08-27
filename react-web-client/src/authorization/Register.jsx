import React, { Component } from 'react';
import "./../components/admin-panel/AdminPanel.module.css";
import { NavLink } from 'react-router-dom';

class Register extends Component {
    name = React.createRef();
    password = React.createRef();

    login = () => {
        let currentName = this.name.current.value;
        let currentPassword = this.password.current.value;
        let log = this.props.authMethods.register(currentName, currentPassword);
        console.log('log', log);
    }

    clear = () => {
        this.name.current.value = '';
        this.password.current.value = '';
    }

    render() {
        return (
            <div className="add-form">
                <h3>Register</h3>
                <div>
                    <input className="input" ref={this.name} placeholder="Логин" />
                </div>
                <div>
                    <input className="input" type="password" ref={this.password} placeholder="Пароль" />
                </div>
                <button className="title-btn">
                    <NavLink to="/login">Login</NavLink>
                    {/* <Route path='/register' render={() => <Bestsellers filter="catalog" books={props.content.books} />} /> */}
                </button>
                <div className="action-buttons">
                    <button className="button" onClick={this.login}>Login</button>
                    <button className="button" onClick={this.clear}>Clear</button>
                </div>
            </div >
        );
    }

}

export default Register;
