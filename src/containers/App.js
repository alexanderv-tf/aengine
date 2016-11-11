import React, { Component } from 'react'
import { Link } from 'react-router'


export default class App extends Component {

    render(){

        return(
            <div className="aengine">
                <div className="wrapper">
                    <div className="userPanel">
                        <div className="userDetails">
                            <p className="userName">TechFinancials</p>
                        </div>
                        <div className="linksWrapper">
                            <p>Main</p>
                            <Link to='/segment' className="link" activeClassName='active' onlyActiveOnIndex={true}>Segments</Link>
                            <Link to='/offering' className="link" activeClassName='active' onlyActiveOnIndex={true}>Offerings</Link>
                            <Link to='/collection' className="link" activeClassName='active' onlyActiveOnIndex={true}>Collections</Link>
                            <p>Reports</p>
                            <Link to='/history' className="link" activeClassName='active' onlyActiveOnIndex={true}>History</Link>
                            <p>Admin</p>
                            <Link to='/admin' className="link" activeClassName='active' onlyActiveOnIndex={true}>Managers</Link>
                        </div>
                    </div>
                    <div className="dashboard">
                        { this.props.children }
                    </div>
                </div>
            </div>
        )
    }
}