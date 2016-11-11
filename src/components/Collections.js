import React, { PropTypes, Component } from 'react'
import Modal from 'react-modal'

export default class Collections extends Component {

    constructor(props){
        super(props)
        this.state = {
            modalIsOpen: false,
            id: false,
            name:'',
            offerId:1,
            segmentId:1,
            channelId:1
        }
        this.closeCollection = this.closeCollection.bind(this)
    }

    componentDidMount(){
        this.props.fetchCollection()
        this.props.fetchChannels()
        this.props.fetchOffers()
        this.props.fetchSegments()
    }

    addCollection() { this.setState({ modalIsOpen: true }); }

    editCollection(e){
        let collection = e.target.parentNode;
        this.setState({
            id: collection.querySelector('#collection-id').innerText,
            name: collection.querySelector('#collection-name').innerText,
            offerId: collection.querySelector('#collection-offerId').innerText,
            segmentId: collection.querySelector('#collection-segmentId').innerText,
            channelId: collection.querySelector('#collection-channelId').innerText,
            modalIsOpen: true
        })
    }

    saveCollection() {
        this.props.saveCollection
        (
            this.state.id,
            this.state.name,
            this.state.offerId,
            this.state.segmentId,
            this.state.channelId
        )
        this.setState( {modalIsOpen: false} );
    }

    closeCollection() {
        this.setState({
            modalIsOpen: false,
            id: false,
            name:'',
            offerId:1,
            segmentId:1,
            channelId:1
        });
    }

    onNameChangeHandler(e){
        this.setState( {name: e.target.value} )
    }
    onChangeSegmentId(e){
        this.setState( {segmentId: e.target.value} )
    }
    onChangeOfferingId(e){
        this.setState( {offerId: e.target.value} )
    }
    onChangeChannelId(e){
        this.setState( {channelId: e.target.value} )
    }

    render(){

        const { collections } = this.props.collections
        const { channels } = this.props.channels
        const { offerings } = this.props.offerings
        const { segments } = this.props.segments

        return(
            <div>
                <div onClick={::this.addCollection} className="button add-collection">Add Collection</div>
                <div className="searchBlock">
                    <input type="text" placeholder="Search for..."/><div className="search">Go!</div>
                </div>

                <div className="collections">

                    <table className="collection">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>name</th>
                            <th>expiryDate</th>
                            <th>offerId</th>
                            <th>segmentId</th>
                            <th>channelId</th>
                            <th>active</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        { collections.map((collection, index)=>
                            <tr key={index}>
                                <th id="collection-id">{collection.id}</th>
                                <th id="collection-name">{collection.name}</th>
                                <th id="collection-expiryDate">{collection.expiryDate}</th>
                                <th id="collection-offerId">{collection.offerId}</th>
                                <th id="collection-segmentId">{collection.segmentId}</th>
                                <th id="collection-channelId">{collection.channelId}</th>
                                <th id="collection-active">{collection.active ? 'true' : 'false'}</th>
                                <th className="edit"
                                    onClick={collection.active ? '' : ::this.editCollection}>
                                    {collection.active ? '' : 'edit'}
                                </th>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    className="ModalClass"
                    overlayClassName="OverlayClass" >

                        <div className="form" id="add-collection">
                            <h2 className="title">Add / Edit Collection</h2>
                            <div className="form-group">
                                <label className="collection-name" htmlFor="collection-name">Collection Name:</label>
                                <input type="text" id="collection-name" value={this.state.name} onChange={::this.onNameChangeHandler}/>
                            </div>
                            <div className="form-group">
                                <label className="segment-id" htmlFor="segment-id">Segments:</label>
                                <select name="segment-id" id="segment-id" value={this.state.segmentId} onChange={::this.onChangeSegmentId}>
                                    { segments.map((segment, index)=>
                                        <option key={index} value={segment.id}>{segment.name}</option>
                                    )}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="offering-id">Offerings:</label>
                                <select name="offering-id" id="offering-id" value={this.state.offerId} onChange={::this.onChangeOfferingId}>
                                    { offerings.map((offer, index)=>
                                    <option key={index} value={offer.id}>{offer.name}</option>
                                    )}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="channel-id">Channels:</label>
                                <select name="channel-id" id="channel-id" value={this.state.channelId} onChange={::this.onChangeChannelId}>
                                    { channels.map((chanel, index)=>
                                        <option key={index} value={chanel.id}>{chanel.name}</option>
                                    )}
                                </select>
                            </div>
                            <div className="form-group buttons">
                                <div onClick={::this.saveCollection} className="form-button save">Save</div>
                                <div onClick={this.closeCollection} className="form-button cancel">Cancel</div>
                            </div>
                        </div>
                </Modal>
            </div>

        )
    }
}


// Collections.propTypes = {
//     // segments: PropTypes.array.isRequired,
// }