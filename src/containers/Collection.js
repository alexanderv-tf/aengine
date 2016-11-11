import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as collectionActions from '../actions/CollectionActions'

import Collections from '../components/Collections'

export class Collection extends Component {

    render(){

        const { collections, offerings, segments, channels } = this.props
        const { fetchCollection, fetchSegments, fetchOffers, fetchChannels, saveCollection } = this.props.collectionActions

        return(
            <div>
                <Collections fetchCollection={fetchCollection}
                             fetchSegments={fetchSegments}
                             fetchOffers={fetchOffers}
                             fetchChannels={fetchChannels}
                             saveCollection={saveCollection}
                             collections={collections}
                             offerings={offerings}
                             channels={channels}
                             segments={segments}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        segments: state.segments,
        offerings: state.offerings,
        channels: state.channels,
        collections: state.collections
    }
}

function mapDispatchToProps(dispatch) {
    return {
        collectionActions: bindActionCreators(collectionActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Collection)