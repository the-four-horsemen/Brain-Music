package com.codegym.Brainmusic.controller;

import com.codegym.Brainmusic.model.Category;
import com.codegym.Brainmusic.model.Music;
import com.codegym.Brainmusic.service.CategoryService;
import com.codegym.Brainmusic.service.MusicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MusicController {
    @Autowired
    MusicService musicService;

    @Autowired
    CategoryService categoryService;

    @GetMapping("/music/category/{id}")
    public Page<Music> music(Pageable pageable, @PathVariable String id) {
        return musicService.findAll(pageable);
    }

    @PostMapping("/music")
    public Music crateMusic(@Valid @RequestBody Music music) {
        return musicService.save(music);
    }
}
