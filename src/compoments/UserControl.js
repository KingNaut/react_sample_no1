import React, { Component } from 'react'

export class UserControl extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             users : users
        }
    }
    
    render() {
        return (
            <div className="row mt-15">
                <UserSearchControl />
                <TaskSortControl />
            </div>
        );
    }
}

export default UserControl
