package com.codegym.Brainmusic;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@EnableJpaAuditing
@CrossOrigin(origins = "*")
public class BrainMusicApplication {

	public static void main(String[] args) {
		SpringApplication.run(BrainMusicApplication.class, args);
	}

}
