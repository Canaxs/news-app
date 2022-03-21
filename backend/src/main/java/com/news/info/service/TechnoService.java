package com.news.info.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.news.info.model.Techno;

public interface TechnoService {

	Techno save(Techno techno);
	Techno get(Long id);
	Techno delete(long id);
	List<Techno> getTechno();
	Page<Techno> getPageTechno(Pageable page);
}
