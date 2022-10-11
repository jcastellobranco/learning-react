import React, { Component } from "react";
import Movie from './Movie'


class MoviesList extends Component {

  emitAlert(){
    alert("Você clicou na div MoviesList")
  }

  changeToYellow(){
    document.getElementById('list').style.background = "Yellow"
  }

  changeToBrown(){
    document.getElementById('list').style.background = "#282c34";
  }

  render() {
    return (
      <div 
      id='list'
      onClick={this.emitAlert} 
      onMouseOver={this.changeToYellow} 
      onMouseOut={this.changeToBrown}
      >
        <Movie title="Matrix" score={7} genres={["Ficção", "Ação"]} />
        <Movie title="Senhor dos Aneis" score={4} genres={["Ficção", "Aventura"]} />
        <Movie title="Indiana" score={8} genres={["Ação"]} />
      </div>
    )
  }
}

export default MoviesList