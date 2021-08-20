import React, {Component} from "react";
import AddNumber from "../containers/AddNumber"
export default class AddNumberRoot extends Component{
  // 컴포넌트는 화면만 표시를 해준다.
    render(){
        return (
            <div>
                <h1>Add Number Root</h1>
<AddNumber></AddNumber>
            </div>
        )
    }
}