package com.codegym.Brainmusic.service.Impl;

import com.codegym.Brainmusic.model.Category;
import com.codegym.Brainmusic.model.Music;
import com.codegym.Brainmusic.repository.MusicRepository;
import com.codegym.Brainmusic.service.MusicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class MusicServiceImpl implements MusicService {

    @Autowired
    private MusicRepository musicRepository;

    @Override
    public Page<Music> findAll(Pageable pageable) {
        return musicRepository.findAll(pageable);
    }

    @Override
    public Music findById(Long id) {
        return musicRepository.findById(id).get();
    }

    @Override
    public Page<Music> findAllBySongNameContaining(String songName, Pageable pageable) {
        return musicRepository.findAllBySongNameContaining(songName, pageable);
    }

    @Override
    public Music save(Music music) {
        musicRepository.save(music);
        return music;
    }

    @Override
    public void remove(Long id) {
        musicRepository.deleteById(id);
    }

    @Override
    public Page<Music> findAllByCategory(Category category, Pageable pageable) {
        return musicRepository.findAllByCategory(category, pageable);
    }
}
