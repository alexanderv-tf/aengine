import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as segmentsActions from '../actions/SegmentsActions'

import Segments from '../components/Segments'

export class Segment extends Component {

    render(){

        const { segments } = this.props.segments
        const { getSegments, updateSegment } = this.props.segmentsActions

        return (
            <div>
                <Segments segments={segments} getSegments={getSegments} updateSegment={updateSegment} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        segments: state.segments
    }
}

function mapDispatchToProps(dispatch) {
    return {
        segmentsActions: bindActionCreators(segmentsActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Segment)