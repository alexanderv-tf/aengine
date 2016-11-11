import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as adminActions from '../actions/AdminActions'

import Managers from '../components/Managers'

export class Admin extends Component {

    render(){
        const { fetchManagers } = this.props.usersActions
        const { managers } = this.props.managers

        return(
            <Managers fetchManagers={fetchManagers} managers={managers}/>
        )
    }
}

function mapStateToProps(state) {
    return {
        managers: state.admin
    }
}

function mapDispatchToProps(dispatch) {
    return {
        usersActions: bindActionCreators(adminActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)