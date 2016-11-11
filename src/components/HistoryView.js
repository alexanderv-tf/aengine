import React, { Component } from 'react'

export default class HistoryViews extends Component {
    constructor(props){
        super(props)
        this.state = {
            showFilters: false
        }
    }

    componentDidMount(){
        this.props.getHistory();
    }

    showFilters(){
        this.setState( {showFilters: !this.state.showFilters} )
    }

    render(){

        const { history } = this.props

        return (
            <div className="history-tab">
                <div className="header">
                    <h2 className="table-title">History</h2>
                    <div onClick={::this.showFilters} className="add-filters">Add Filters</div>
                </div>
                <div className={this.state.showFilters ? 'show filters' : 'hide filters'} >
                    <table className="filters-table">
                        <thead>
                        <tr>
                            <th>eventDate</th>
                            <th>actionTypeId</th>
                            <th>actionTypeName</th>
                            <th>
                                <input type="text"/>
                            </th>
                            <th>userName</th>
                            <th>collectionId</th>
                            <th>segmentId</th>
                            <th>segmentName</th>
                            <th>offerId</th>
                            <th>offerName</th>
                            <th>channelId</th>
                            <th>channelName</th>
                            <th>additionalInfo</th>
                        </tr>
                        </thead>
                    </table>
                </div>

                <table className="history">
                    <thead>
                    <tr>
                        <th>eventDate</th>
                        <th>actionTypeId</th>
                        <th>actionTypeName</th>
                        <th>accountId</th>
                        <th>userName</th>
                        <th>collectionId</th>
                        <th>segmentId</th>
                        <th>segmentName</th>
                        <th>offerId</th>
                        <th>offerName</th>
                        <th>channelId</th>
                        <th>channelName</th>
                        <th>additionalInfo</th>
                    </tr>
                    </thead>
                    <tbody>
                    { history.map((item, index)=>
                        <tr key={index}>
                            <th id="coll-date">{item.eventDate.substring(0,10)}</th>
                            <th id="coll-actionTypeId">{item.actionTypeId}</th>
                            <th id="coll-actionTypeName">{item.actionTypeName}</th>
                            <th id="coll-accountId">{item.accountId}</th>
                            <th id="coll-userName">{item.userName}</th>
                            <th id="coll-collectionId">{item.collectionId}</th>
                            <th id="coll-segmentId">{item.segmentId}</th>
                            <th id="coll-segmentName">{item.segmentName}</th>
                            <th id="coll-offerId">{item.offerId}</th>
                            <th id="coll-offerName">{item.offerName}</th>
                            <th id="coll-channelId">{item.channelId}</th>
                            <th id="coll-channelName">{item.channelName}</th>
                            <th id="coll-additionalInfo">{item.additionalInfo}</th>
                        </tr>
                    )}
                    </tbody>
                </table>


                <div className="paging_simple_numbers" id="paginate">
                    <ul className="pagination">
                        <li className="paginate_button previous" id="pagination_previous">
                            <a href="#" data-dt-idx="0" >Previous</a>
                        </li>
                        <li className="paginate_button active">
                            <a href="#" data-dt-idx="1" >1</a>
                        </li>
                        <li className="paginate_button">
                            <a href="#" data-dt-idx="2" >2</a>
                        </li>
                        <li className="paginate_button">
                            <a href="#" data-dt-idx="3" >3</a>
                        </li>
                        <li className="paginate_button">
                            <a href="#" data-dt-idx="4" >4</a>
                        </li>
                        <li className="paginate_button">
                            <a href="#" data-dt-idx="5" >5</a>
                        </li>
                        <li className="paginate_button">
                            <a href="#" data-dt-idx="6" >6</a>
                        </li>
                        <li className="paginate_button next" id="pagination_next">
                            <a href="#" data-dt-idx="7" >Next</a>
                        </li>
                    </ul>
                </div>

            </div>
        )
    }
}