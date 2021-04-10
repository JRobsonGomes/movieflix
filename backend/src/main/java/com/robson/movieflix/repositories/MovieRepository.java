package com.robson.movieflix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.robson.movieflix.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
