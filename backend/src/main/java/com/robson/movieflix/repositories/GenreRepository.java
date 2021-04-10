package com.robson.movieflix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.robson.movieflix.entities.Genre;

public interface GenreRepository extends JpaRepository<Genre, Long> {

}
