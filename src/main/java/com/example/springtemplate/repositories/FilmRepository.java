package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Director;
import com.example.springtemplate.models.Film;
import com.example.springtemplate.models.User;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface FilmRepository
        extends CrudRepository<Film, Integer> {
  @Query(value = "SELECT * FROM films",
          nativeQuery = true)
  public List<Film> findAllFilms();
  @Query(value = "SELECT * FROM films WHERE id=:filmId",
          nativeQuery = true)
  public Film findFilmById(@Param("filmId") Integer id);
  @Query(value = "SELECT * FROM films WHERE title=:filmName",
          nativeQuery = true)
  public Film findFilmByTitle(@Param("filmName") String title);
  @Query(value = "SELECT * FROM films WHERE director=:director",
          nativeQuery = true)
  public List<Film> findFilmByDirector(@Param("director") String director);
}
