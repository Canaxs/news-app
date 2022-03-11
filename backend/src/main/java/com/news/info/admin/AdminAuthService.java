package com.news.info.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AdminAuthService implements UserDetailsService{
	
	@Autowired
	AdminJpaRepository repository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Admin inDB = repository.findByUsername(username);
		if(inDB == null)
			throw new UsernameNotFoundException("Admin not found");
		return inDB;
	}

}
