import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as historyActions from '../actions/HistoryActions'

import HistoryViews from '../components/HistoryView'

export class History extends Component {

    render(){

        const { history } = this.props.history
        const { getHistory } = this.props.historyActions

        return (
            <div>
                 <HistoryViews history={history} getHistory={getHistory} />
             </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        history: state.history
    }
}
function mapDispatchToProps(dispatch) {
    return {
        historyActions: bindActionCreators(historyActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(History)