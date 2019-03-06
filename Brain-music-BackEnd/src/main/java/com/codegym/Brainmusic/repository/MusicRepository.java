package com.codegym.Brainmusic.repository;

import com.codegym.Brainmusic.model.Music;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:4200")
@Repository
public interface MusicRepository extends JpaRepository<Music, Long> {
}
