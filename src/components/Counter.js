import React, { Component } from "react";
import './Counter.css'

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: props.initialNumber
        }
    }

    incrementNumber() {
        this.setState({ number:this.state.number + 1 })
    }
    decrementNumber(){
        this.setState({number:this.state.number -1 })
    }

    componentDidMount(){
        console.log('componente foi montado');
    }
    componentDidUpdate(){
        console.log('componente foi atualizado');
    }
    render() {
        return (
            <div>
                <h5>Sou o número: {this.state.number}</h5>
                <button onClick={()=>this.incrementNumber()}>Acrescentar</button>
                <button onClick={()=>this.decrementNumber()}>Diminuir</button>
            </div>
        )
    }
}
export default Counter;

