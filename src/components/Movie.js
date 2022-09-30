import React from 'react'

function Movie(props) {
    let genresItens;

    if(!props.genres){
        genresItens = '';
    }else{
        genresItens = <ul> {props.genres.map((genre, index) => <li key={genre + index}>{genre}</li>)} </ul>
    }

    return (
        <div className='Movie'>
            <h2>{props.title}</h2>
            <p>Nota do filme: {props.score}</p>
            <p>Este filme é {props.score > 7 ? 'bom.' : 'ruim.'}</p>
            {genresItens}
        </div>
    )
}

Movie.defaultProps = {
    score: "Este filme ainda não foi avaliado",
    genres: null
}

export default Movie