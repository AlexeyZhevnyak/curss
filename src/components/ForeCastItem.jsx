import React, {Component} from 'react';
import moment from "moment";


class ForeCastItem extends Component {
    render() {
        var date = new Date(this.props.item.date);
        return (
            <div className="fore-item">
                <span>{moment(this.props.item.date).format("DD.MM")}</span>
                <span>{date.getHours() + ':0' + date.getMinutes()}</span>
                <span>{this.props.item.temp + '℃'}</span>
                <span>{this.props.item.windSpeed + ' М/C'}</span>
                <span>{this.props.item.currWeather.description}</span>
            </div>
        );
    }
}

export default ForeCastItem;