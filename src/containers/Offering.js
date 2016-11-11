import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as offersAction from '../actions/OfferingActions'

import Offerings from '../components/Offerings'

export class Offering extends Component {

    render(){

        const { offerings } = this.props.offerings
        const { getOffers, saveOffer } = this.props.offersActions

        return(
            <Offerings offerings={offerings} getOffers={getOffers} saveOffer={saveOffer} />
        )
    }
}

function mapStateToProps(state) {
    return {
        offerings: state.offerings
    }
}

function mapDispatchToProps(dispatch) {
    return {
        offersActions: bindActionCreators(offersAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Offering)