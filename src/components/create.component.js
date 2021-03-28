import React, { Component } from 'react';

export default class create extends Component {

    constructor(props){
        super(props);


        this.onChangePalabra = this.onChangePalabra.bind(this);
        this.onChangeSignificado = this.onChangeSignificado.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Palabra: '',
            Significado: '',
        }
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
        console.log(`Form Submitted:`);
        console.log(`Palabra: ${this.state.Palabra}`);
        console.log(`Significado: ${this.state.Significado}`);

        this.setState({
            Palabra: '',
            Significado: '',
        })
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