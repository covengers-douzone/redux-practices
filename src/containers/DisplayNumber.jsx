import DisplayNumber from "../components/DisplayNumber";
import React , {Component} from "react";
import store from "../store";

export default  class extends  Component{

    state = {number : store.getState().number}
    // 랜더가 안되서 ,
    constructor(props) {
        super(props);
        store.subscribe(() => {
            this.setState({number : store.getState().number})

        })
    }
    render(){
        return(
            <div>
                <h1>Display Number Root</h1>
                <DisplayNumber number = {this.state.number}></DisplayNumber>
            </div>
        )
    }
}