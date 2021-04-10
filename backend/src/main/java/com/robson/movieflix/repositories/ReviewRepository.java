package com.robson.movieflix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.robson.movieflix.entities.Review;

public interface ReviewRepository extends JpaRepository<Review, Long> {

}
