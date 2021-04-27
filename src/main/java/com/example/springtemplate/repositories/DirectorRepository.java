package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Director;
import com.example.springtemplate.models.Film;
import com.example.springtemplate.models.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface DirectorRepository
        extends CrudRepository<Director, Integer> {
  @Query(value = "SELECT * FROM directors",
          nativeQuery = true)
  public List<Director> findAllDirectors();
  @Query(value = "SELECT * FROM directors WHERE id=:directorId",
          nativeQuery = true)
  public Director findDirectorById(@Param("directorId") Integer id);
}
