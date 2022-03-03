package com.news.info.techno;

import java.util.List;

import org.springframework.stereotype.Service;

import com.news.info.ex.AuthException;

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
	public Techno get(Long id) {
		return technoRepository.getById(id);
	}
	public Techno delete(long id) {
		Techno techno = null;
		try {
			techno = technoRepository.findByid(id);
			System.out.println(techno);
			technoRepository.delete(techno);
		}
		catch(Error error) {
			new AuthException();
		}
		return techno;
	}
	
	public List<Techno> getTechno(){
		return technoRepository.findAll();
	}
	
}
