import React from 'react'
import Movie from './Movie'

function Movies() {
  return (
    <div>
        <Movie title ="Matrix" score="7" genres ={["Ficção","Ação"]}/>
        <Movie title ="Senhor dos Aneis" score="4" genres ={["Ficção","Aventura"]}/>
        <Movie title ="Indiana" score="8" genres ={["Ação"]}/>
    </div>
  )
}

export default Movies