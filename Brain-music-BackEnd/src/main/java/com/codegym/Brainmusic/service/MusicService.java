package com.codegym.Brainmusic.service;

import com.codegym.Brainmusic.model.Category;
import com.codegym.Brainmusic.model.Music;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface MusicService {
    Page<Music> findAll(Pageable pageable);

    Music findById(Long id);

    Page<Music> findAllBySongNameContaining(String songName, Pageable pageable);

    Music save(Music music);

    void remove(Long id);

    Page<Music> findAllByCategory(Category category, Pageable pageable);
}
