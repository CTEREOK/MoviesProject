import React from "react";
import { Movies } from "../Components/Movies";
import { Search } from "../Components/search";
import { Preloader } from "../Components/preloader";

class Main extends React.Component {
    state = {
        movies: [],
    };
    componentDidMount() {
        fetch('https://www.omdbapi.com/?apikey=b35b41d6&s=fast')
            .then((response) => response.json())
            .then((data) => this.setState( {movies: data.Search}  ));
    };

    searchMovies = (str, type = "all") => {
        fetch(`https://www.omdbapi.com/?apikey=b35b41d6&s=${str}${
            type !== "all" ? `&type=${type}` : ""
        }`
    )
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search }));
    };

    render() {
        const { movies, loading } = this.state;

        return (
            <main className="container content">
                <Search searchMovies={this.searchMovies} />
                {loading ? <Preloader /> : <Movies movies={this.state.movies}/>}
            </main>
        ); 
    };
}
export { Main };