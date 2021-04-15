package com.robson.movieflix.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.robson.movieflix.dto.MovieDTO;
import com.robson.movieflix.entities.Genre;
import com.robson.movieflix.entities.Movie;
import com.robson.movieflix.repositories.GenreRepository;
import com.robson.movieflix.repositories.MovieRepository;
import com.robson.movieflix.services.exceptions.ResourceNotFoundException;

@Service
public class MovieService {

	@Autowired
	private MovieRepository repository;
	
	@Autowired
	private GenreRepository genreRepository;

	@Transactional(readOnly = true)
	public Page<MovieDTO> findAllPaged( Long genreId,  PageRequest pagerequest) {
		Genre genre = (genreId == 0) ? null : genreRepository.getOne(genreId);
		Page<Movie> list = repository.find( genre,  pagerequest);
		return list.map(x -> new MovieDTO(x));
	}
	
	@Transactional(readOnly = true)
	public MovieDTO findById(Long id) {
		Optional<Movie> obj = repository.findById(id);
		Movie entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not Found"));
		return new MovieDTO(entity, entity.getReviews());
	}
}
