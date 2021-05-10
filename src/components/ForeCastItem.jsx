import React, { Component } from 'react';
import moment from "moment";
import { UserContext } from '../App'


class ForeCastItem extends Component {

    render() {
        var date = new Date(this.props.item.date);

        return (
            <UserContext.Consumer>
                {value =>(
                    <div className="fore-item">
                        <span>{moment(this.props.item.date).format("DD.MM")}</span>
                        <span>{date.getHours() + ':0' + date.getMinutes()}</span>
                        <span>{this.props.item.temp + '℃'}</span>
                        <span>{this.props.item.windSpeed + ' М/C'}</span>
                        <span>{this.props.item.currWeather.description}</span>
                        <span>{localStorage.getItem('email')}</span>
                    </div>)
                }
            </UserContext.Consumer>

        );
    }
}

export default ForeCastItem;