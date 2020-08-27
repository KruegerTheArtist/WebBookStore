import React from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import { Component } from 'react';

class AuthForm extends Component {
    render() {
        console.log('this', this.props);

        return (
            <div>
                <Route path={this.props.path} render={() => <Login filter="register" authMethods={this.props.authMethods} />} />
                <Route path='/register' render={() => <Register filter="login" authMethods={this.props.authMethods} state={this.props.state} />} />
            </div>
        );
    }

}

export default AuthForm;
