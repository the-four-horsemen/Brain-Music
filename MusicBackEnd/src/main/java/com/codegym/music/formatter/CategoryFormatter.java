package com.codegym.music.formatter;

import com.codegym.music.model.Category;
import com.codegym.music.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.Formatter;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.text.ParseException;
import java.util.Locale;
@CrossOrigin(origins = "http://localhost:4200")

public class CategoryFormatter implements Formatter<Category> {

    @Autowired
    private CategoryService categoryService;

    @Override
    public Category parse(String text, Locale locale) throws ParseException {
        return categoryService.findById(Long.parseLong(text));
    }

    @Override
    public String print(Category object, Locale locale) {
        return "[" + object.getId() + ", " +object.getName() + "]";
    }
}
