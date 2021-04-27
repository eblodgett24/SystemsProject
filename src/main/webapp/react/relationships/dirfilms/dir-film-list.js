import FilmEditorInline from "./film-editor-inline";
import dirFilmService, {createFilmForDirector} from "./dir-film-service"

const DIRECTOR_URL = "http://localhost:8080/api/films"
const { useState, useEffect } = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const DirFilmList = () => {
    const [films, setFilms] = useState([])
    const [newFilm, setNewFilm] = useState({})
    const {directorId} = useParams()
    useEffect(() => {
        findFilmsForDirector(directorId)
    }, [])
    const createFilmForDirector = (film) =>
        filmService.createFilmForDirector(directorId, film)
            .then(film => {
                setNewFilm({title: ''})
                setFilms(films => ([...films, film]))
            })
    const findFilmsForDirector = (directorId) =>
        filmService.findFilmsForDirector(directorId)
            .then(films => setFilms(films))
    return (
        <div>
            <h2>
                <Link onClick={() => history.back()}>
                    <i className="fas fa-arrow-left margin-right-10px"></i>
                </Link>
                Films
            </h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col">
                            <input placeholder="Film Name"
                                   title="Please enter a name for the film"
                                   className="form-control"
                                   value={newFilm.title}
                                   onChange={(e) => setNewFilm(
                                       newFilm => ({...newFilm, title: e.target.value}))}/>
                        </div>
                        <div className="col-2">
                            <i className="fas float-right fa-plus fa-2x"
                               onClick={() => createFilmForDirector(newFilm)}></i>
                        </div>
                    </div>
                </li>
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

export default DirFilmList