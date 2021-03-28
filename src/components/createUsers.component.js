import React, { Component } from 'react';

export default class createUsers extends Component {

    constructor(props){
        super(props);

        this.state = {
            username: ''
        }
    }


    render() {
        return (
            <div>
                <p>Welcome to create users Component!!</p>
            </div>
        )
    }
}