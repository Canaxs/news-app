package com.news.info.techno;

import org.springframework.stereotype.Service;

@Service
public class TechnoService {
	
	TechnoRepository technoRepository;
	
	public TechnoService(TechnoRepository technoRepository) {
		super();
		this.technoRepository = technoRepository;
	}
	
	public Techno save(Techno techno) {
		return technoRepository.save(techno);
	}
}
