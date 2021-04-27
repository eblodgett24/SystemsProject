package com.example.springtemplate.daos;

import com.example.springtemplate.models.Director;
import com.example.springtemplate.models.Film;
import com.example.springtemplate.repositories.DirectorRepository;
import com.example.springtemplate.repositories.FilmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class FilmOrmDao {
    @Autowired
    FilmRepository filmRepository;

    @Autowired
    DirectorRepository directorRepository;

    @PostMapping("/api/films")
    public Film createFilm(@RequestBody Film film) {
        return filmRepository.save(film);
    }

    @PostMapping("/api/directors/{directorId}/films")
    public Film createFilmForDirector(
            @PathVariable("directorId") Integer cid,
            @RequestBody Film film) {
        film = filmRepository.save(film);
        Director director = directorRepository.findDirectorById(cid);
        film.setDirector(director);
        return filmRepository.save(film);
    }

    @GetMapping("/api/directors/{cid}/films")
    public List<Film> findFilmsForDirector(
            @PathVariable("cid") Integer directorId) {
        Director director = directorRepository.findDirectorById(directorId);
        return director.getFilms();
    }
    
    @GetMapping("/api/films")
    public List<Film> findAllFilms() {
        return (List<Film>) filmRepository.findAllFilms();
    }
    
    @GetMapping("/api/films/{filmId}")
    public Film findFilmById(
            @PathVariable("filmId") Integer id) {
        return filmRepository.findFilmById(id);
    }

    @GetMapping("/api/films/{filmTitle}")
    public Film findFilmByTitle(
            @PathVariable("filmTitle") String title) {
        return filmRepository.findFilmByTitle(title);
    }

    @PutMapping("/api/films/{filmId}")
    public Film updateFilm(
            @PathVariable("filmId") Integer id,
            @RequestBody() Film newFilm) {
        Film film = this.findFilmById(id);
        film.setReleaseDate(newFilm.getReleaseDate());
        film.setTitle(newFilm.getTitle());
        film.setGross(newFilm.getGross());
        film.setBudget(newFilm.getBudget());
        film.setGenre(newFilm.getGenre());
        film.setRating(newFilm.getRating());
        film.setLikes(newFilm.getLikes());
        film.setProfilePicture(newFilm.getProfilePicture());
//        film.setStartDate(newFilm.getStartDate());
        return filmRepository.save(film);
    }

    @DeleteMapping("/api/films/{filmId}")
    public void deleteFilm(
            @PathVariable("filmId") Integer id) {
        filmRepository.deleteById(id);
    }
}