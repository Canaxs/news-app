package com.news.info.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.news.info.model.Slider;
import com.news.info.service.SliderService;

@RestController
@RequestMapping("/api/1.0/slider")
public class SliderController {
	
	@Autowired
	SliderService sliderService;
	
	@GetMapping("")
	List<Slider> getSliders() {
		return sliderService.getSliders();
	}
	
	@DeleteMapping("/{id}")
	Slider deleteSlider(@PathVariable long id) {
		return sliderService.delete(id);
	}
	
	@PutMapping("/{id}")
	Slider updateSlider(@PathVariable long id,@RequestBody Slider slider) {
		return sliderService.update(id,slider);
	}
	@PostMapping("/create")
	Slider createSlider(@RequestBody Slider slider) {
		return sliderService.create(slider);
	}

}
