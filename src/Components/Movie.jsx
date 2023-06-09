function Movie(props) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props;
    
    return <div id={id} className="movie card z-depth-5 red darken-4">
        <div className="card-image waves-effect waves-block waves-light">
            {
                poster === 'N/A' ? (
                    <img
                        className="activator"
                        src={'https://via.placeholder.com/300x400?text=${title}'}
                    />
                ) :
                    <img className="activator" src={poster}/>
            }
        </div>
        <div className="card-content">
            <span className="card-title activator grey-text text-lighten-5">{title}</span>
            <p className="grey-text text-lighten-5">{year} <span className="right grey-text text-lighten-5">{type}</span></p>
        </div>
    </div>;
}

export { Movie };