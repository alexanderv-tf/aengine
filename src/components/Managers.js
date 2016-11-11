import React, { PropTypes, Component } from 'react'

export default class Users extends Component {

    componentDidMount(){
        this.props.fetchManagers();
    }

    render(){

        const { managers } = this.props

        return(
            <div>
                <div>Users List</div>
                <ul>
                    { managers.map((manager, index)=>
                    <li key={index}>
                        <a href="" >{manager.id}</a>
                        <a href="">{manager.name}</a>
                        <a href="">{manager.email}</a>
                    </li>
                    )}
                </ul>
            </div>


        )
    }
}