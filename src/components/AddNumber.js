import React, {Component} from "react";
export default class AppNumber extends Component {
    state = {size: 1}

    render() {
        return (
            <div>
                <h1>Add Number</h1>
                <input type="button" value="+" onClick={() => {
                     this.props.onClick(this.state.size);
                    // store.dispatch({
                    //     type: 'INCREMENT',
                    //     size: this.state.size
                    // })

                }
                }/>
                    <input type ="text" value= {this.state.size}
                    onChange={(e) => {
                    this.setState({
                    size:Number(e.target.value)
                })}
                }/>
                    </div>
                    );
                }
}
