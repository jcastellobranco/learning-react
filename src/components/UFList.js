import React, { Component } from 'react'

class UFList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            UFs: [

            ],
        }
    }
    // componentDidMount(){
    //     fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    // }
    async componentDidMount(){
        try{
        const res = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
        const json = await res.json()
        this.setState({ UFs:json})
        } catch (error){
            console.log(error);
        }
    }

    render() {
        return (
            <div>
                <h3>Unidades Federativas</h3>

                {
                    this.state.UFs.map(uf => <p key={uf.id}>{uf.nome}</p>)
                }

            </div>
        )
    }
}


export default UFList;