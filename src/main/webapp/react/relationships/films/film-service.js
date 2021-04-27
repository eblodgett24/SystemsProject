const DIRECTOR_URL = "http://localhost:8080/api/directors"
const FILM_URL = "http://localhost:8080/api/films"

export const createFilmForDirector = (directorId, film) =>
    fetch(`${DIRECTOR_URL}/${directorId}/films`, {
        method: 'POST',
        body: JSON.stringify(film),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

// TODO: retrieve all users from the server
export const findAllFilms = () =>
    fetch(FILM_URL)
        .then(response => response.json())

export const findFilmsForDirector = (directorId) =>
    fetch(`${DIRECTOR_URL}/${directorId}/films`)
        .then(response => response.json())

export const findFilmByTitle = (title) =>
    fetch(`${FILM_URL}/${title}`)
        .then(response => response.json())

export const updateFilm = (title, film) =>
    fetch(`${FILM_URL}/${title}`, {
        method: 'PUT',
        body: JSON.stringify(film),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

const deleteFilm = (title) =>
    fetch(`${FILM_URL}/${title}`, {
        method: "DELETE"
    })

export default {
    createFilmForDirector,
    findAllFilms,
    findFilmsForDirector,
    findFilmByTitle,
    updateFilm,
    deleteFilm
}