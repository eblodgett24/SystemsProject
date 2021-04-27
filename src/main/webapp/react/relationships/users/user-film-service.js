const DIRECTOR_URL = "http://localhost:8080/api/directors"
const FILM_URL = "http://localhost:8080/api/films"
const USER_URL = "http://localhost:8080/api/users"

export const findCreditsByTitle = (filmTitle) =>
    fetch(`${FILM_URL}/${filmTitle}/users`)
        .then(response => response.json())

export default {
    findCreditsByTitle
}