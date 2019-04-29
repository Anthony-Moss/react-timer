import React from "react";

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: "",
            time: this.props.time || 0
        }
    }

    render() {
        return (
            <div>
                <h1>
                    {(this.state.time)} seconds left
                    {(this._updateInputText)}
                </h1>
            </div>
        )
    }

    _updateInputText = (e) => {

        console.log('onChange event fired');
        console.log(e.target.value);
    
        // This is a request for a change
        // that will take place in the future.
        this.setState({
        inputText: e.target.value
        }, () => {
        console.log(`After setState, State is now ${this.state.inputText}`);
        });
    }
}


export default Input;