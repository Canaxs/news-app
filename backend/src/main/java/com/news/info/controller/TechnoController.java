package com.news.info.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.news.info.model.Techno;
import com.news.info.model.TechnoVM;
import com.news.info.service.TechnoService;


@RestController
@RequestMapping("/api/1.0/techno")
public class TechnoController {

	@Autowired
	TechnoService technoService;
	
	@PostMapping("/created")
	Techno createdUser(@RequestBody Techno techno) {
		return technoService.save(techno);
	}
	
	@DeleteMapping("/deleted/{id}")
	Techno deletedUser(@PathVariable long id) {
		return technoService.delete(id);
	}
	@GetMapping("/{id}")
	Techno getNews(@PathVariable long id) {
		return technoService.get(id);
	}
	@GetMapping("get")
	List<Techno> getTechno(){
		return technoService.getTechno();
	}
	
	@GetMapping("page")
	Page<TechnoVM> getPageTechno(Pageable page) {
		return technoService.getPageTechno(page).map(TechnoVM::new);
	}
}
