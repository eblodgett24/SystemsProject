import FilmEditorInline from "./film-editor-inline";
import filmService, {createFilmForDirector, findAllFilms} from "./film-service"

const DIRECTOR_URL = "http://localhost:8080/api/films"
const { useState, useEffect } = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const FilmList = () => {
    const [films, setFilms] = useState([])
    const [newFilm, setNewFilm] = useState({})
    useEffect(() => {
        findAllFilms()
    }, [])
    const updateFilm = (title, newFilm) =>
        filmService.updateFilm(title, newFilm)
            .then(film => setFilms(films => (films.map(film => film.title === title ? newFilm : film))))
    const deleteFilm = (title) =>
        filmService.deleteFilm(title)
            .then(films => setFilms(films => films.filter(film => film.title !== title)))
    return(
        <div>
            <h2>
                <Link onClick={() => history.back()}>
                    <i className="fas fa-arrow-left margin-right-10px"></i>
                </Link>
                Films
            </h2>
            <ul className="list-group">
            {
                films.map(film =>
                    <li key={film.title} className="list-group-item">
                        <FilmEditorInline key={film.title}
                                             updateFilm={updateFilm}
                                             deleteFilm={deleteFilm}
                                             film={film}/>
                    </li>)
            }
            </ul>
        </div>
    )
}

export default FilmList;