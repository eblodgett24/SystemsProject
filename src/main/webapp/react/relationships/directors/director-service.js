const DIRECTOR_URL = "http://localhost:8080/api/directors"

export const createDirector = (director) =>
    fetch(DIRECTOR_URL, {
        method: 'POST',
        body: JSON.stringify(director),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const findAllDirectors = () =>
    fetch(DIRECTOR_URL)
        .then(response => response.json())

export const findDirectorById = (id) =>
    fetch(`${DIRECTOR_URL}/${id}`)
        .then(response => response.json())

export const updateDirector = (id, director) =>
    fetch(`${DIRECTOR_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(director),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

const deleteDirector = (id) =>
    fetch(`${DIRECTOR_URL}/${id}`, {
        method: "DELETE"
    })

export default {
    createDirector,
    findAllDirectors,
    findDirectorById,
    updateDirector,
    deleteDirector
}