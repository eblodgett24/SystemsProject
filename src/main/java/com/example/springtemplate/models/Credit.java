package com.example.springtemplate.models;

import javax.persistence.*;

import java.util.Date;
import java.util.List;

@Entity
@Table(name="credits")
public class Credit {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private String username;
  private String title;

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }
}