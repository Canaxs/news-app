package com.news.info.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.news.info.slider.Slider;
import com.news.info.slider.SliderService;

@RestController
@RequestMapping("/api/1.0/slider")
public class SliderController {
	
	@Autowired
	SliderService sliderService;
	
	@GetMapping("")
	List<Slider> getSliders() {
		return sliderService.getSliders();
	}

}
