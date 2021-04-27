package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Credit;
import com.example.springtemplate.models.Director;
import com.example.springtemplate.models.Film;
import com.example.springtemplate.models.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CreditRepository
        extends CrudRepository<Credit, Integer> {
  @Query(value = "SELECT * FROM credits",
          nativeQuery = true)
  public List<Credit> findAllCredits();
  @Query(value = "SELECT * FROM credits WHERE username=:userName",
          nativeQuery = true)
  public List<Credit> findCreditsByUsername(@Param("userName") String username);
  @Query(value = "SELECT * FROM credits WHERE title=:filmTitle",
          nativeQuery = true)
  public List<Credit> findCreditsByTitle(@Param("filmTitle") String title);
}
