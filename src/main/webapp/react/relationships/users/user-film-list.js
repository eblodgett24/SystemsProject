import UserFilmService, {findCreditsByTitle} from "./user-film-service"
import UserFilmEditorInline from "../films/film-editor-inline";

const FILM_URL = "http://localhost:8080/api/films"
const { useState, useEffect } = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const UserFilmList = () => {
    const [credits, setCredits] = useState([])
    const {title} = useParams()
    useEffect(() => {
        findCreditsByTitle(title)
    }, [])
    const findCreditsByTitle = (title) =>
        UserFilmService.findCreditsByTitle(title)
            .then(credits => setCredits(credits))
    return(
        <div>
            <h2>
                <Link onClick={() => history.back()}>
                    <i className="fas fa-arrow-left margin-right-10px"></i>
                </Link>
                Users
            </h2>
            <ul className="list-group">
                {
                    credits.map(credit =>
                                  <Link to={`/users/${credit.username}`}>
                                      {credit.username}
                                  </Link>)
                }
            </ul>
        </div>
    )
}

export default UserFilmList;