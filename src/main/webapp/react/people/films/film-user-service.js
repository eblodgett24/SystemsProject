const DIRECTOR_URL = "http://localhost:8080/api/directors"
const FILM_URL = "http://localhost:8080/api/films"
const USER_URL = "http://localhost:8080/api/users"

export const findCreditsByUsername = (userName) =>
    fetch(`${USER_URL}/${userName}/films`)
        .then(response => response.json())

export default {
    findCreditsByUsername
}