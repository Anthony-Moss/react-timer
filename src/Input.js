import React from "react";

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: this.props.time || 0
        }
    }

    render() {
        return (
            <div>
                <h1>
                    {(this.state.time)} seconds left
                </h1>
            </div>
        )
    }
}






export default Input;