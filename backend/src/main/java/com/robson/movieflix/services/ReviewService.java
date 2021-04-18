package com.robson.movieflix.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.robson.movieflix.dto.ReviewDTO;
import com.robson.movieflix.entities.Movie;
import com.robson.movieflix.entities.Review;
import com.robson.movieflix.entities.User;
import com.robson.movieflix.repositories.MovieRepository;
import com.robson.movieflix.repositories.ReviewRepository;

@Service
public class ReviewService {

	@Autowired
	private ReviewRepository repository;
	
	@Autowired
	private MovieRepository movieRepository;
	
	@Autowired
	private AuthService authService;
	
	@Transactional
	public ReviewDTO insert(ReviewDTO dto) {
		Review entity = new Review();
		copyDtoToEntity(dto, entity);
		entity = repository.save(entity);
		return new ReviewDTO(entity);
	}

	private void copyDtoToEntity(ReviewDTO dto, Review entity) {
		Movie movie = movieRepository.getOne(dto.getMovieId());
		User user = authService.autheticated();
		authService.validateMember(user.getId()); //Verifica se o usuario é realmente um membro
		
		entity.setText(dto.getText());
		entity.setMovie(movie);
		entity.setUser(user);
	}
}
