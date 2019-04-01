import React, { Component } from 'react';
class ClickCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.onClickButton = this.onClickButton.bind(this);
    }
    onClickButton() {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        const counterStyle = {
            margin: '16px'
        }
        return (
            <div style={counterStyle}>
                <button onClick={this.onClickButton}>Tap Me</button>
                <div>
                    Click Count:<span id="clickCount">{this.state.count}</span>
                </div>
            </div>
        )
    }
}
export default ClickCounter;