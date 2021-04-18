package com.robson.movieflix.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.robson.movieflix.entities.User;
import com.robson.movieflix.repositories.UserRepository;

@Service
public class AuthService {
	@Autowired
	private UserRepository userRepository;

	@Transactional(readOnly = true)
	public User autheticated() {
		try {
			String userName = SecurityContextHolder.getContext().getAuthentication().getName();
			return userRepository.findByEmail(userName);
		} catch (Exception e) {
			throw new UnauthorizedException("Invalid user");
		}
	}
	
	public void validateMember(Long userId) {
		User user = autheticated();
		if (!user.hasRole("ROLE_MEMBER")) {
			throw new ForbiddenException("Access denied");
		}
	}
}
