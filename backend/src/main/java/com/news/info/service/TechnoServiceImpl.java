package com.news.info.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.news.info.exception.AuthException;
import com.news.info.model.Techno;
import com.news.info.repository.TechnoRepository;

@Service
public class TechnoServiceImpl implements TechnoService{
	
	TechnoRepository technoRepository;

	public TechnoServiceImpl(TechnoRepository technoRepository) {
		super();
		this.technoRepository = technoRepository;
	}

	@Override
	public Techno save(Techno techno) {
		return technoRepository.save(techno);
	}

	@Override
	public Techno get(Long id) {
		return technoRepository.findByid(id);
	}

	@Override
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

	@Override
	public List<Techno> getTechno() {
		return technoRepository.findAll();
	}

	@Override
	public Page<Techno> getPageTechno(Pageable page) {
		return technoRepository.findAll(page);
	}

}
