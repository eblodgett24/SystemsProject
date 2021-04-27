import filmService from "./film-service"

const {useState, useEffect} = React
const {useParams, useHistory} = window.ReactRouterDOM;

const FilmEditorForm = () => {
    const [film, setFilm] = useState({})
    const {filmTitle} = useParams()
    const history = useHistory()
    useEffect(() => {
        findFilmByTitle(filmTitle)
    }, []);
    const findFilmByTitle = (title) =>
        filmService.findFilmByTitle(title)
            .then(film => setFilm(film))
    const updateFilm = (title, newFilm) =>
        filmService.updateFilm(title, newFilm)
            .then(() => history.goBack())
    const deleteFilm = (title) =>
        filmService.deleteFilm(title)
            .then(() => history.goBack())
    
    return (
        <div>
            <h2>
                Film Editor
            </h2>
            <label>Id</label>
            <input
                className="form-control margin-bottom-10px"
                readOnly={true}
                value={film.id}/>
            <label>Title</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) => setFilm(film => ({...film, title: e.target.value}))}
                value={film.title}/>
            <label>Release Date (yyyy-mm-dd)</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) => setFilm(film => ({...film, releaseDate: e.target.value}))}
                value={film.releaseDate}/>
            <label>Budget</label>
            <input
                type="number"
                className="form-control margin-bottom-10px"
                value={film.budget}
                onChange={(e)=>setFilm(film => ({...film, budget: parseInt(e.target.value)}))}/>
            <label>Gross</label>
            <input
                type="number"
                className="form-control margin-bottom-10px"
                value={film.gross}
                onChange={(e)=>setFilm(film => ({...film, gross: parseInt(e.target.value)}))}/>
            <label>Genre</label>
            <select
                className="form-control margin-bottom-10px"
                value={film.genre}
                onChange={(e)=>setFilm(film => ({...film, genre: e.target.value}))}>
                <option>ACTION</option>
                <option>COMEDY</option>
                <option>DRAMA</option>
                <option>HORROR</option>
                <option>MUSICAL</option>
                <option>MYSTERY</option>
                <option>SCIFI</option>
                <option>THRILLER</option>
            </select>
            <label>Rating</label>
            <select
                className="form-control margin-bottom-10px"
                value={film.rating}
                onChange={(e)=>setFilm(film => ({...film, rating: e.target.value}))}>
                <option>G</option>
                <option>PG</option>
                <option>PG13</option>
                <option>R</option>
            </select>
            <label>Poster</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) => setFilm(film => ({...film, profilePicture: e.target.value}))}
                value={film.profilePicture}/>
            <br/>
            <button
                onClick={() => updateFilm(film.title, film)}
                className="btn btn-success btn-block">Save</button>
            <button
                onClick={() => {
                    history.goBack()
                }}
                className="btn btn-danger btn-block margin-left-10px">Cancel</button>
            <button
                onClick={() => deleteFilm(film.title)}
                className="btn btn-danger btn-block margin-left-10px">Delete</button>
        </div>
    )
}

export default FilmEditorForm