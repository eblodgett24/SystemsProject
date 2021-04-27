import directorService from "./director-service"

const {useState, useEffect} = React
const {useParams, useHistory} = window.ReactRouterDOM;
const DIRECTOR_URL = "http://localhost:8080/api/directors"

const DirectorEditorForm = () => {
    const [director, setDirector] = useState({})
    const {id} = useParams()
    const history = useHistory()
    useEffect(() => {
        findDirectorById(id)
    }, []);
    const findDirectorById = (id) =>
        directorService.findDirectorById(id)
            .then(director => setDirector(director))
    const updateDirector = (id, newDirector) =>
        directorService.updateDirector(id, newDirector)
            .then(() => history.goBack())
    const deleteDirector = (id) =>
        directorService.deleteDirector(id)
            .then(() => history.goBack())
    
    return (
        <div>
            <h2>
                Director Editor
            </h2>
            <label>Id</label>
            <input
                className="form-control margin-bottom-10px"
                readOnly={true}
                value={director.id}/>
            <label>Name</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) => setDirector(director => ({...director, firstName: e.target.value}))}
                value={director.firstName}/>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) => setDirector(director => ({...director, lastName: e.target.value}))}
                value={director.lastName}/>
            <label>Birthdate (yyyy-mm-dd)</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) => setDirector(director => ({...director, dateOfBirth: e.target.value}))}
                value={director.dateOfBirth}/>
            <label>Profile Picture</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) => setDirector(director => ({...director, profilePicture: e.target.value}))}
                value={director.profilePicture}/>
            <button
                onClick={() => updateDirector(director.id, director)}
                className="btn btn-success btn-block">Save</button>
            <button
                onClick={() => {
                    history.goBack()
                }}
                className="btn btn-danger btn-block margin-left-10px">Cancel</button>
            <button
                onClick={() => deleteDirector(director.id)}
                className="btn btn-danger btn-block margin-left-10px">Delete</button>
        </div>
    )
}

export default DirectorEditorForm