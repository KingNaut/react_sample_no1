import React, { Component } from 'react';
import './App.css';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import UserControl from './components/UserControl';
import { connect } from 'react-redux';
import * as actions from './actions/index';

class App extends Component {

    // toggle redux
    onToggleForm = () => {
        var { itemEditing } = this.props;
        if(itemEditing && itemEditing.id !== ''){
            this.props.onOpenForm();
        }else{
            this.props.onToggleForm();
        }
        this.props.onClearUser({
            id : '',
            name : '',
            status : false
        });
    }

    render() {

        var { isDisplayForm } = this.props;

        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý User</h1><hr/>
                </div>
                <div className="row">
                    <div className={ isDisplayForm === true ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : '' }>
                        <UserForm />
                    </div>
                    <div className={ isDisplayForm === true ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12' }>
                        <button type="button" className="btn btn-primary" onClick={this.onToggleForm} >
                            <span className="fa fa-plus mr-5"></span>
                            Thêm Công Việc
                        </button>
                        <UserControl />
                        <UserList />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isDisplayForm : state.isDisplayForm,
        itemEditing : state.itemEditing
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onToggleForm : () => {
            dispatch(actions.toggleForm());
        },
        onClearUser : (user) => {
            dispatch(actions.editUser(user));
        },
        onOpenForm : () => {
            dispatch(actions.openForm());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
