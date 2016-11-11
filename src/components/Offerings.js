import React, { Component } from 'react'
import Modal from 'react-modal'

export default class Offerings extends Component {

    constructor(props){
        super(props)
        this.state = {
            id:false,
            name:'',
            categoryId:1,
            description:'',
            modalIsOpen: false,
        }
        this.closeModal = this.closeModal.bind(this);
    }

    addOffer(){
        this.setState({
            modalIsOpen: true
        })
    }

    editOffer(e){
        let elm = e.target.parentNode
        this.setState({
            id: elm.querySelector('#offer-id').innerText,
            name: elm.querySelector('#offer-name').innerText,
            categoryId: elm.querySelector('#categoryId').innerText,
            description: elm.querySelector('#offer-desc').innerText,
            modalIsOpen: true
        })
    }

    saveOffer(){
        this.props.saveOffer(
            this.state.id,
            this.state.name,
            this.state.categoryId,
            this.state.description
        );
        this.setState({ modalIsOpen: false })
        this.props.getOffers();
    }

    closeModal() {
        this.setState({
            modalIsOpen: false,
            id: false,
            name: '',
            categoryId: 1,
            description: ''

        })
    }

    onNameChangeHandler(e){
        this.setState( {name: e.target.value} )
    }
    onTypeChangeHandler(e){
        this.setState( {categoryId: e.target.value} )
    }
    onDescChangeHandler(e){
        this.setState( {description: e.target.value} )
    }

    componentDidMount(){
        this.props.getOffers();
    }

    render(){
        const { offerings } = this.props

        return(
            <div>
                <div onClick={::this.addOffer} className="button add-offer">Add Offer</div>

                <div className="offerings">

                    <table className="offers">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Category ID</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        { offerings.map((offer, index)=>
                            <tr key={index}>
                                <th id="offer-id">{offer.id}</th>
                                <th id="offer-name">{offer.name}</th>
                                <th id="offer-categoryId">{offer.categoryId}</th>
                                <th id="offer-desc">{offer.messageText}</th>
                                <th id="offer-status">{offer.active ? 'active' : 'not active'}</th>
                                <th className="edit" onClick={::this.editOffer}>edit</th>
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

                        <form id="editOffer">
                            <h2 className="title">Add/Edit Offer</h2>
                            <div className="form-group">
                                <label htmlFor="name">Offering Name:</label>
                                <input id="offer-name"
                                       name="name"
                                       type="text"
                                       placeholder="name..."
                                       onChange={::this.onNameChangeHandler}
                                       value={this.state.name}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="type">Offering Type:</label>
                                <select name="type" id="categoryId" value={this.state.categoryId}
                                        onChange={::this.onTypeChangeHandler}>
                                    {offerings.map((offer,index)=>
                                        <option key={index} value={offer.categoryId}>{offer.categoryId}</option>
                                    )}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Offering:</label>
                                <textarea name="description"
                                          id="offer-desc"
                                          placeholder="description..."
                                          onChange={::this.onDescChangeHandler}
                                          value={this.state.description}></textarea>
                            </div>
                            <div className="ln_solid"></div>
                            <div className="form-group buttons">
                                <div onClick={ ::this.saveOffer } className="form-button save">Save</div>
                                <div onClick={ ::this.closeModal } className="form-button cancel">Cancel</div>
                            </div>
                        </form>

                    </Modal>

                </div>
            </div>

        )
    }
}