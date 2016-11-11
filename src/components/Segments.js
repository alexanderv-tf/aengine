import React, { PropTypes, Component } from 'react'
import Modal from 'react-modal'

export default class Segments extends Component {

    constructor(props){
        super(props)
        this.state = {modalIsOpen: false}
        this.closeModal = this.closeModal.bind(this)
        this.saveModal = this.saveModal.bind(this)
    }

    componentDidMount(){
        this.props.getSegments();
    }

    editSegment(e){
        let elm = e.target.parentNode
        let id = elm.querySelector('#segment-id').innerText
        let name = elm.querySelector('#segment-name').innerText
        let description = elm.querySelector('#segment-desc').innerText
        this.setState( {
            id: id,
            name: name,
            description:description,
            modalIsOpen: true
        } );
    }
    closeModal() { this.setState({ modalIsOpen: false }); }

    saveModal() {
        this.props.updateSegment(this.state.id, this.state.name, this.state.description);
        this.setState( function () {
            return { modalIsOpen: false}
        });
    }
    onNameChangeHandler(e){
            this.setState( { name: e.target.value} )
    }
    onDescChangeHandler(e){
            this.setState( { description: e.target.value} )
    }

    render(){

        const { segments } = this.props

        return(
            <div className="segments">

                <table className="segment">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    { segments.map((segment, index)=>
                        <tr key={index}>
                            <th id="segment-id">{segment.id}</th>
                            <th id="segment-name">{segment.name}</th>
                            <th id="segment-desc">{segment.description}</th>
                            <th id="segment-status">{segment.active ? 'active' : 'not active'}</th>
                            <th className="edit" onClick={::this.editSegment}>edit</th>
                        </tr>
                    )}
                    </tbody>
                </table>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    className="ModalClass"
                    overlayClassName="OverlayClass" >

                    <div className="form">
                        <h2 className="title">Edit Segment</h2>
                        <div className="form-group">
                            <label htmlFor="" id="segment-id" data-id={this.state.id}>Name:</label>
                            <input onChange={::this.onNameChangeHandler} name="name" id="segment-name" type="text" value={this.state.name}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="segment-desc">Description:</label>
                            <textarea onChange={::this.onDescChangeHandler}
                                      name="description"
                                      id="segment-desc"
                                      rows="10"
                                      value={this.state.description}></textarea>
                        </div>
                        <div className="ln_solid"></div>
                        <div className="form-group buttons">
                            <div onClick={this.saveModal} className="form-button save">Save</div>
                            <div onClick={this.closeModal} className="form-button cancel">Cancel</div>
                        </div>

                    </div>

                </Modal>
            </div>
        )
    }
}

Segments.propTypes = {
    segments: PropTypes.array.isRequired,
    getSegments: PropTypes.func.isRequired
}