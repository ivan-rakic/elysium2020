import React, { Component } from 'react';


class Clock extends Component {
    state = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    };


    componentDidMount() {
        this.getTimeUntil(this.props.deadline);
        setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
    }

    leading0(num) {
        return num < 10 ? '0' + num : num;
    }

    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());


        if (time < 0) {
            this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

        } else {
            const seconds = Math.floor((time / 1000) % 60);
            const minutes = Math.floor((time / 1000 / 60) % 60);
            const hours = Math.floor((time / (1000 * 60 * 60)) % 24 + 1);
            const days = Math.floor(time / (1000 * 60 * 60 * 24));

            this.setState({ days, hours, minutes, seconds });
        }

    }

    render() {
        return (
            <div className="cd__holder">
                <div className="cd__holder-outline">

                </div>
                <div className="cd__holder-container">
                    <div className="Clock-days">{this.leading0(this.state.days)} Days</div>
                    <div className="Clock-hours">{this.leading0(this.state.hours)} Hours</div>
                    <div className="Clock-minutes">{this.leading0(this.state.minutes)} Minutes</div>
                    <div className="Clock-seconds">{this.leading0(this.state.seconds)} Seconds</div>
                </div>
            </div>
        );
    }
}
export default Clock;