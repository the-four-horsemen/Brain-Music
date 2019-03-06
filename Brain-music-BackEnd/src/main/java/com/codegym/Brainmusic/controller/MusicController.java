//package com.codegym.Brainmusic.controller;
//
//import com.codegym.Brainmusic.model.Music;
//import com.codegym.Brainmusic.repository.CategoryRepository;
//import com.codegym.Brainmusic.repository.MusicRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import javax.validation.Valid;
//import java.util.List;
//
//@RestController
//@CrossOrigin(origins = "http://localhost:4200")
//public class MusicController {
//    @Autowired
//    MusicRepository musicRepository;
//
//    @Autowired
//    CategoryRepository categoryRepository;
//
//    @GetMapping("/music")
//    public List<Music> getMusic() {
//        return musicRepository.findAll();
//    }
//
//    @PostMapping("/music")
//    public Music createEmployee(@Valid @RequestBody Music music) {
//        return musicRepository.save(music);
//    }
//}
