package com.codegym.music;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@EnableJpaAuditing
@CrossOrigin(origins = "http://localhost:4200")
public class MusicApplication extends ServletInitializer {

    public static void main(String[] args) {
        SpringApplication.run(MusicApplication.class, args);
    }

}
