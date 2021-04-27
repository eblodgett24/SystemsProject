import FilmUserService, {findCreditsByUsername} from "./film-user-service"

const FILM_URL = "http://localhost:8080/api/films"
const USER_URL = "http://localhost:8080/api/users"
const { useState, useEffect } = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const FilmUserList = () => {
    const [credits, setCredits] = useState([])
    const {username} = useParams()
    useEffect(() => {
        findCreditsByUsername(username)
    }, [])
    const findCreditsByUsername = (username) =>
        FilmUserService.findCreditsByUsername(username)
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
                                    <Link to={`/films/${credit.title}`}>
                                        {credit.title}
                                    </Link>)
                }
            </ul>
        </div>
    )
}

export default FilmUserList;