import DirectorEditorInline from "./director-editor-inline";
import directorService from "./director-service"

const DIRECTOR_URL = "http://localhost:8080/api/directors"
const { useState, useEffect } = React;

const DirectorList = () => {
    const [directors, setDirectors] = useState([])
    const [newDirector, setNewDirector] = useState({})
    useEffect(() => {
        findAllDirectors()
    }, [])
    const createDirector = (director) =>
        directorService.createDirector(director)
            .then(director => {
                setNewDirector({lastName:''})
                setDirectors(directors => ([...directors, director]))
            })
    const updateDirector = (id, newDirector) =>
        directorService.updateDirector(id, newDirector)
            .then(director => setDirectors(directors => (directors.map(director => director.id === id ? newDirector : director))))
    const findAllDirectors = () =>
        directorService.findAllDirectors()
            .then(directors => setDirectors(directors))
    const deleteDirector = (id) =>
        directorService.deleteDirector(id)
            .then(directors => setDirectors(directors => directors.filter(director => director.id !== id)))
    return(
        <div>
            <h2>Directors</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col">
                            <input placeholder="Director Last Name"
                                   title="Please enter a last name for the director" className="form-control" value={newDirector.lastName}
                                   onChange={(e) => setNewDirector(newDirector => ({...newDirector, lastName: e.target.value}))}/>
                        </div>
                        <div className="col-3">
                            <i className="fas fa-plus fa-2x float-right" onClick={() => createDirector(newDirector)}></i>
                        </div>
                    </div>
                </li>
            {
                directors.map(director =>
                    <li key={director.id} className="list-group-item">
                        <DirectorEditorInline key={director._id}
                                              updateDirector={updateDirector}
                                              deleteDirector={deleteDirector}
                                              director={director}/>
                    </li>)
            }
            </ul>
        </div>
    )
}

export default DirectorList;