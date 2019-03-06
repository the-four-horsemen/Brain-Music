package com.codegym.Brainmusic.repository;

import com.codegym.Brainmusic.model.Category;
import com.codegym.Brainmusic.model.Music;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:4200")
@Repository
public interface MusicRepository extends PagingAndSortingRepository<Music, Long> {
    Page<Music> findAllBySongNameContaining(String songName, Pageable pageable);

    Page<Music> findAllByCategory(Category category, Pageable pageable);
}
