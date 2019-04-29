import React, { Component } from 'react';
import TotalTime from './TimeTotal';
import TimeRemaining from './TimeRemaining';
import TimerButton from './TimerButton';
import ResetButton from './ResetButton';


class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: props.time,
            input: 0,
            status: false,
            done: false,
            adder: []
        }
    }
    render() {
        return (
        <>
            <TimeRemaining time={this.state.time} done={this.state.done} />        
            <TotalTime input={this.state.input} handleType={this._handleType} />
            <TimerButton handleClick={this._timerClick} status={this.state.status} />
            <ResetButton handleClick={this._resetClick} />
        </>
        )
    }
    _handleType = (input) => {
        this.setState({
            input,
            time: input ? input : 0
        })
    }
    _timerClick = () => {
        if (this.state.status) {
        clearInterval(this.interval)
        this.setState({
            status: false,
        }) 
        } else {
        this.setState({
            status: true,
            done: false
        })
        this.interval = setInterval(() => {
            if (this.state.time >= 1) {
            this.setState({
                time: this.state.time - 1,
            })
            } else {
            this.setState({
                time: this.state.input,
                status: false,
                input: this.state.input,
                done: true
            }, clearInterval(this.interval))
            }
        }, 1000)
        }
    }
    _resetClick = () => {
        clearInterval(this.interval)
        this.setState({
            status: false,
            time: this.state.input,
            done: false
        })
    }
}

export default Timer;
