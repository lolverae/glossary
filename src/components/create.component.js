import React, { Component } from 'react';
import axios from 'axios';

export default class create extends Component {

    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePalabra = this.onChangePalabra.bind(this);
        this.onChangeSignificado = this.onChangeSignificado.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            Palabra: '',
            Significado: '',
            users: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users/')
          .then(response => {
            if (response.data.length > 0) {
              this.setState({
                users: response.data.map(user => user.username),
                username: response.data[0].username
              })
            }
          })
          .catch((error) => {
            console.log(error);
          })
      }

    onChangeUsername(e) {
        this.setState({
          username: e.target.value
        })
      }
    onChangePalabra(e) {
        this.setState({
            Palabra: e.target.value
        });
    }

    onChangeSignificado(e) {
        this.setState({
            Significado: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();
    
        const exercise = {
          username: this.state.username,
          description: this.state.description
        }
    
        console.log(exercise);
    
        axios.post('http://localhost:5000/glosario/add', exercise)
          .then(res => console.log(res.data));
    
        window.location = '/';
      }


    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Nueva Palabra</h3>
                <form onSubmit = {this.onSubmit}>
                    <div className="form-group">
                        <label>Palabra:</label>
                        <input  type = "text"
                                className = "form-control"
                                value = {this.state.Palabra}
                                onChange={this.onChangePalabra}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>Username: </label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}>
                            {
                                this.state.users.map(function(user) {
                                return <option 
                                    key={user}
                                    value={user}>{user}
                                    </option>;
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Significado:</label>
                        <input  type = "text"
                                className = "form-control"
                                value = {this.state.Significado}
                                onChange={this.onChangeSignificado}
                                />
                    </div>
                <div className = "form-group">
                    <input type = "submit" value = "Crear Nuevo" className = "btn btn-primary"/> 
                </div>                    
                </form>
            </div>
        )
    }
}