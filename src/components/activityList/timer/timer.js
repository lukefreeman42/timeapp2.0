import React from 'react'
import Button from './button'

class Timer extends React.Component{
    state = {
        seconds: 0,
        minutes: this.props.elem.minutes,
        hours: this.props.elem.hours,
        on: this.props.elem.on
    }

    componentDidMount(){
        this.secondsRemaining = this.state.seconds + this.state.minutes * 60 + this.state.hours * 3600;
        this.count();
    }

    formatting = (hr, min, sec) => {
        if (sec < 10){
            this.setState({
                seconds: "0" + this.state.seconds,
            })
        }
        if (min < 10) {
            this.setState({
                minutes: "0" + this.state.minutes,
            })
        }
        if (hr < 10) {
            this.setState({
                hours: "0" + this.state.hours,
                })
        }
    }
    count = () => {
        var hr = Math.floor(this.secondsRemaining / 3600);
        var min = Math.floor((this.secondsRemaining - hr * 3600) / 60);
        var sec = this.secondsRemaining - (hr * 3600) - (min * 60);
       
        this.setState({
          hours: hr,
          minutes: min,
          seconds: sec,
          on: this.props.elem.on
        })
        this.formatting(hr, min, sec);
        if (!this.state.on) {
        clearInterval(this.intervalHandle);
        }
        this.secondsRemaining--
}

startCountDown = () => {
    this.props.killCom(this.props.elem.id);
    this.intervalHandle = setInterval(this.count, 1000);
    }

    render() {
        if (!this.props.admin)
        {
            return(
                <div> 
                {this.state.hours} : {this.state.minutes} : {this.state.seconds}
                <Button     onClick = {this.startCountDown} 
                            option = {!this.state.on}
                            yes = "Start"
                            no = "-----"
                />
                </div>
            );
        }
        else
        {
            return(
                <div> 
                    {this.state.hours} : {this.state.minutes} : {this.state.seconds}
                </div>
            );
        }
    }
}
export default Timer;