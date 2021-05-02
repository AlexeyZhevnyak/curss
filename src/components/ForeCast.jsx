import {Component} from "react";

class ForeCast extends Component{
    state = {
        items :[]
    }


    render(){
        return(
            <div>
                {
                    this.state.items.map(item =>
                        <div>
                            <p>{item.date}</p>
                            <p>{item.temp}</p>
                            <p>{item.windSpeed}</p>
                        </div>
                    )
                }
            </div>
        )

    }
}
export default ForeCast;