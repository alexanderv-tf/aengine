import React, {Component} from 'react'
import {render} from 'react-dom'

export default class Home extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="home">
                <h2 className="small-title">Welcome to Auto Offering Engine</h2>
            </div>
        )
    }
}