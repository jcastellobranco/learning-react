import React from 'react'
import PropTypes from 'prop-types'
function Movie(props) {
    let genresItens;
    let scoreText;
    let movieEvaluation;

    
    if(!props.genres){
        genresItens = '';
    }else{
        genresItens = <ul> {props.genres.map((genre, index) => <li key={genre + index}>{genre}</li>)} </ul>
    }

    if(!props.score){
        scoreText = 'este filme ainda não tem nota'
        movieEvaluation = "Este filme ainda não foi avaliado"
    }else{
        scoreText = props.score
        movieEvaluation = <p>Este filme é {props.score > 7 ? 'bom.' : 'ruim.'}</p>
    }
    
    return (
        <div className='Movie'>
            <h2>{props.title}</h2>
            <p>Nota do filme: {scoreText}</p>
            {movieEvaluation}
            {genresItens}
        </div>
    )
}

Movie.defaultProps = {
    score: null,
    genres: null
}
Movie.propTypes = {
    title: PropTypes.string,
    score: PropTypes.number,

}
export default Movie