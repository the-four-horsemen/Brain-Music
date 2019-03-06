package com.codegym.Brainmusic.model;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Set;

@Entity
@Table(name = "categories")
@EntityListeners(AuditingEntityListener.class)
public class Category {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    @NotBlank
    @Column(unique = true)
    private String categoryName;

    @OneToMany(targetEntity = Music.class)
    private Set<Music> musics;

    private Category(){}

    public Category(String categoryName){
        this.categoryName = categoryName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public Set<Music> getMusic() {
        return musics;
    }

    public void setMusic(Set<Music> musics) {
        this.musics = musics;
    }
}
