package com.robson.movieflix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.robson.movieflix.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
