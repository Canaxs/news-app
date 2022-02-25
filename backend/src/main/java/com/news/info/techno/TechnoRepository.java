package com.news.info.techno;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TechnoRepository extends JpaRepository<Techno, Long> {

	Techno findBytitle(String username);
	
	Techno findByid(long id);
}
