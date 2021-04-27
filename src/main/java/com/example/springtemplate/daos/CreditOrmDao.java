package com.example.springtemplate.daos;

import com.example.springtemplate.models.Credit;
import com.example.springtemplate.repositories.CreditRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class CreditOrmDao {

  @Autowired
  CreditRepository creditRepository;

  @PostMapping("/api/credits")
  public Credit createCredit(@RequestBody Credit credit) {
    return creditRepository.save(credit);
  }

  @GetMapping("/api/credits")
  public List<Credit> findAllCredits() {
    return (List<Credit>) creditRepository.findAllCredits();
  }

  @GetMapping("/api/{userName}/films")
  public List<Credit> findCreditsByUsername(
          @PathVariable("userName") String username) {
    return (List<Credit>) creditRepository.findCreditsByUsername(username);
  }

  @GetMapping("/api/{filmTitle}/users")
  public List<Credit> findCreditsByTitle(
          @PathVariable("filmTitle") String title) {
    return (List<Credit>) creditRepository.findCreditsByTitle(title);
  }
}
