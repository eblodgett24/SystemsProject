const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const FilmEditorInline = ({film, deleteFilm, updateFilm}) => {
    const [filmCopy, setFilmCopy] = useState(film)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={filmCopy.title}
                            onChange={(e)=>setFilmCopy(filmCopy => ({...filmCopy, title: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={filmCopy.releaseDate}
                            onChange={(e)=>setFilmCopy(filmCopy => ({...filmCopy, releaseDate: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            type="number"
                            className="form-control"
                            value={filmCopy.budget}
                            onChange={(e)=>setFilmCopy(filmCopy => ({...filmCopy, budget: parseInt(e.target.value)}))}/>
                    </div>
                    <div className="col">
                        <input
                            type="number"
                            className="form-control"
                            value={filmCopy.gross}
                            onChange={(e)=>setFilmCopy(filmCopy => ({...filmCopy, gross: parseInt(e.target.value)}))}/>
                    </div>
                    <div className="col">
                        <select
                            className="form-control"
                            value={filmCopy.genre}
                            onChange={(e)=>setFilmCopy(filmCopy => ({...filmCopy, genre: e.target.value}))}>
                            <option>ACTION</option>
                            <option>COMEDY</option>
                            <option>DRAMA</option>
                            <option>HORROR</option>
                            <option>MUSICAL</option>
                            <option>MYSTERY</option>
                            <option>SCIFI</option>
                            <option>THRILLER</option>
                        </select>
                    </div>
                    <div className="col">
                        <select
                            className="form-control"
                            value={filmCopy.rating}
                            onChange={(e)=>setFilmCopy(filmCopy => ({...filmCopy, rating: e.target.value}))}>
                            <option>G</option>
                            <option>PG</option>
                            <option>PG13</option>
                            <option>R</option>
                        </select>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={filmCopy.profilePicture}
                            onChange={(e)=>setFilmCopy(filmCopy => ({...filmCopy, profilePicture: e.target.value}))}/>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateFilm(filmCopy.id, filmCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteFilm(film.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/films/${filmCopy.title}`}>
                            {filmCopy.title}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/films/${filmCopy.title}`}>
                            {filmCopy.releaseDate}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/films/${filmCopy.title}`}>
                            {filmCopy.budget}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/films/${filmCopy.title}`}>
                            {filmCopy.gross}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/films/${filmCopy.title}`}>
                            {filmCopy.genre}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/films/${filmCopy.title}`}>
                            {filmCopy.rating}
                        </Link>
                    </div>
                    <div className="col-1">
                        <i className="fas fa-cog fa-2x float-right"
                           onClick={() => setEditing(true)}></i>
                    </div>
                </div>
            }
        </div>
    )
}

export default FilmEditorInline;