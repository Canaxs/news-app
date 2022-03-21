package com.news.info.service;

import java.util.List;

import com.news.info.model.Slider;

public interface SliderService {

	Slider create(Slider slider);
	Slider update(long id,Slider slider);
	Slider delete(Long id);
	List<Slider> getSliders();
}
