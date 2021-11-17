import React from 'react';
import { Component } from 'react';

class Card extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="container">

            <div className="card">

                <div className="card-header">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p>{this.props.description}</p>
                </div>

                <ul className="list-group list-group-flush">

                    <li className="list-group-item">
                        <div className="card-body">
                            <h6 className="card-title">[CODE]</h6>
                                <p className="card-text">
                                    <pre>
                                        TODO
                                    </pre>
                                </p>
                        </div>
                    </li>

                    <li className="list-group-item">
                        <p className="card-text"><small>[COMPILACIÓN] g++ Program.cpp -o Program</small></p>
                        <p className="card-text"><small>COUT nos permite mostrar mensajes en pantalla</small></p>
                    </li>

                </ul>
                
            </div>

        </div>
        )
    }
}

export default Card;