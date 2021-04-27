const DIRECTOR_URL = "http://localhost:8080/api/directors"
const FILM_URL = "http://localhost:8080/api/films"

export const createFilmForDirector = (directorId, film) =>
    fetch(`${DIRECTOR_URL}/${directorId}/films`, {
        method: 'POST',
        body: JSON.stringify(film),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export const findFilmsForDirector = (directorId) =>
    fetch(`${DIRECTOR_URL}/${directorId}/films`)
        .then(response => response.json())

export default {
    createFilmForDirector,
    findFilmsForDirector,
}