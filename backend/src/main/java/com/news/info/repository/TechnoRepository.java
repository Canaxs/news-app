package com.news.info.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.news.info.model.Techno;

public interface TechnoRepository extends JpaRepository<Techno, Long> {

	Techno findBytitle(String username);
	
	Techno findByid(long id);
}
