import AddNumber from "../components/AddNumber";
import React, {Component} from 'react';
import store from "../store";
//  redux 역활
// 화면만 표시 해주는 역할
export default class extends Component {
    render() {
        return (
            <AddNumber onClick={(size) => {
    store.dispatch({
        type: 'INCREMENT',
        size: size
    })
}}/>
        );
    }
}
