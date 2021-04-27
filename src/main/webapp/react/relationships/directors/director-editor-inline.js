const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const DirectorEditorInline = ({director, deleteDirector, updateDirector}) => {
    const [directorCopy, setDirectorCopy] = useState(director)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={directorCopy.firstName}
                            onChange={(e)=>setDirectorCopy(directorCopy => ({...directorCopy, firstName: e.target.value}))}/>
                        <input
                            className="form-control"
                            value={directorCopy.lastName}
                            onChange={(e)=>setDirectorCopy(directorCopy => ({...directorCopy, lastName: e.target.value}))}/>
                        <input
                            className="form-control"
                            value={directorCopy.dateOfBirth}
                            onChange={(e)=>setDirectorCopy(directorCopy => ({...directorCopy, dateOfBirth: e.target.value}))}/>
                        <input
                            className="form-control"
                            value={directorCopy.profilePicture}
                            onChange={(e)=>setDirectorCopy(directorCopy => ({...directorCopy, profilePicture: e.target.value}))}/>
                    </div>
                    <div className="col-1">
                        <Link to={`/directors/${directorCopy.id}/films`}>
                            Films
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateDirector(directorCopy.id, directorCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteDirector(director.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/directors/${directorCopy.id}`}>
                            {directorCopy.firstName} {directorCopy.lastName}
                        </Link>
                    </div>
                    <div className="col-1">
                        <Link to={`/directors/${directorCopy.id}/films`}>
                            Films
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-cog fa-2x float-right"
                           onClick={() => setEditing(true)}></i>
                    </div>
                </div>
            }
        </div>
    )
}

export default DirectorEditorInline;