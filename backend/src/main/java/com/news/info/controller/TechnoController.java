package com.news.info.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.news.info.techno.Techno;
import com.news.info.techno.TechnoService;


@RestController
@RequestMapping("/api/1.0/techno")
public class TechnoController {

	@Autowired
	TechnoService technoService;
	
	@PostMapping("/created")
	Techno createdUser(@RequestBody Techno techno) {
		return technoService.save(techno);
	}
}
