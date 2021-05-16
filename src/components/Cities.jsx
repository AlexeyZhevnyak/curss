import Axios from 'axios';
import React, { Component } from 'react';
import ForeCastItem from './ForeCastItem';

class Cities extends Component {
    constructor(props) {
        super(props);
        const test1 = [];

        this.state = {
            cities: [],
            items: new Array(),
            test: new Map(),
            test2: new Array()


        }
    }



    componentDidMount() {
        const user = localStorage.getItem('user');
        Axios.post("http://localhost:8080/api/v1/profile", null, {
            headers: {
                "Authorization": localStorage.getItem('token'),
                "user": user,
            }
        }).then(response => {
            this.setState({
                cities: response.data.user
            },
                () => {

                    this.state.cities.map((elem) => {
                        Axios
                            .post("http://localhost:8080/api/v1/forecast", elem)
                            .then(res => {
                                // this.state.test2.push(res.data)
                                // console.log(this.state.test2)
                                // this.state.test.set(elem, res.data);
                                // console.log(this.state.test)
                                let a = this.state.test2.slice();
                                a.push(res.data);
                                this.setState({
                                    test2: a
                                });
                            });
                    })
                })
        }
        )

    }

    render() {

        return (

            <div className="frst">

                <p>{this.state.cities}</p>
                {
                    this.state.test2.map(t => {
                        return <div className = "fore">{t.map(y => <ForeCastItem item={y} />)}</div>
                    })
                }

            </div>


        );
    }
}

export default Cities;