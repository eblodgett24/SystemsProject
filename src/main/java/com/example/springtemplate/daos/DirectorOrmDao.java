package com.example.springtemplate.daos;

import com.example.springtemplate.models.Director;
import com.example.springtemplate.repositories.DirectorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class DirectorOrmDao {
    @Autowired
    DirectorRepository directorRepository;

    @PostMapping("/api/directors")
    public Director createDirector(@RequestBody Director director) {
        return directorRepository.save(director);
    }
    
    @GetMapping("/api/directors")
    public List<Director> findAllDirectors() {
        return (List<Director>) directorRepository.findAllDirectors();
    }
    
    @GetMapping("/api/directors/{directorId}")
    public Director findDirectorById(
            @PathVariable("directorId") Integer id) {
        return directorRepository.findDirectorById(id);
    }

    /*@GetMapping("/api/update/director/{directorId}/{password}")
    public Director updateDirector(
            @PathVariable("directorId") Integer id,
            @PathVariable("password") String newPass) {
        Director director = this.findDirectorById(id);
        director.setTitle(newPass);
        return directorRepository.save(director);
    }*/

    @PutMapping("/api/directors/{directorId}")
    public Director updateDirector(
            @PathVariable("directorId") Integer id,
            @RequestBody() Director newDirector) {
        Director director = this.findDirectorById(id);
        director.setFirstName(newDirector.getFirstName());
        director.setLastName(newDirector.getLastName());
        director.setDateOfBirth(newDirector.getDateOfBirth());
        director.setLikes(newDirector.getLikes());
        director.setProfilePicture(newDirector.getProfilePicture());
        return directorRepository.save(director);
    }

    @DeleteMapping("/api/directors/{directorId}")
    public void deleteDirector(
            @PathVariable("directorId") Integer id) {
        directorRepository.deleteById(id);
    }
}