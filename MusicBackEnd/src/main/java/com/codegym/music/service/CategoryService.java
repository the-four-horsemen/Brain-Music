package com.codegym.music.service;

import com.codegym.music.model.Category;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:4200")

public interface CategoryService {
    Category findById(Long id);
}
