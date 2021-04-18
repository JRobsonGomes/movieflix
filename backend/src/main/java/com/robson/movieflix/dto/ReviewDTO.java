package com.robson.movieflix.dto;

import java.io.Serializable;

import javax.validation.constraints.NotBlank;

import com.robson.movieflix.entities.Review;

public class ReviewDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private Long movieId;
	@NotBlank(message = "Campo requerido")
	private String text;
	private UserDTO user;
	
	public ReviewDTO() {
	}
	
	public ReviewDTO(Long id, Long movieId, String text) {
		this.id = id;
		this.movieId = movieId;
		this.text = text;
	}

	public ReviewDTO(Review entity) {
		id = entity.getId();
		movieId = entity.getMovie().getId();
		text = entity.getText();
		user = new UserDTO(entity.getUser());
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public Long getMovieId() {
		return movieId;
	}

	public void setMovieId(Long movieId) {
		this.movieId = movieId;
	}

	public UserDTO getUser() {
		return user;
	}

	public void setUser(UserDTO user) {
		this.user = user;
	}
}
