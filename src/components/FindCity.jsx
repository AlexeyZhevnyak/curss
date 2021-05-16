import axios from "axios";
import React, {Component} from "react";
import ForeCastItem from "./ForeCastItem.jsx";


class FindCity extends Component {
  state = {
    temp: "",
    value: "k",
    city: "",
    items: [],
    currWeather: []
  };

  //   componentDidMount() {
  //     Service.getData().then((res) => {
  //       this.setState({
  //         temp: res.data,
  //       });
  //     });
  //   }

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/api/v1/forecast", this.state.city)
      .then((res) => {
        this.setState({
          items: res.data,
        });
      });
   // axios.head()
  };

  handleChange = (event) => {
    this.setState({ city: event.target.value });
  };

 


  render() {
    return (
      
      <div className = "frst">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input className="form-control" type="text" name="city" onChange={this.handleChange} />
          </div>
          <input type="submit" value="Поиск" className = 'findBtn btn btn-light'/>
        </form>

   
        <div className="fore">
          {
            this.state.items.map(item => <ForeCastItem item={item} />

            
            )
          }
        </div>

      </div>

    );
  }
}
export default FindCity;
