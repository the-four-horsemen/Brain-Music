package com.codegym.music.model;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.persistence.*;
@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name = "songs")
@CrossOrigin(origins = "http://localhost:4200")
public class Songs {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    public  String name;
    public String songUrl;
    public String imageUrl;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSongUrl() {
        return songUrl;
    }

    public void setSongUrl(String songUrl) {
        this.songUrl = songUrl;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Songs() {
    }

    public Songs(String name, String songUrl, String imageUrl) {
        this.name = name;
        this.songUrl = songUrl;
        this.imageUrl = imageUrl;
    }

    @ManyToOne
    @JoinColumn(name = "Category_id")
    private Category category;

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}
