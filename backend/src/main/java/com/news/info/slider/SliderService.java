package com.news.info.slider;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class SliderService {

	SliderRepository sliderRepository;

	public SliderService(SliderRepository sliderRepository) {
		super();
		this.sliderRepository = sliderRepository;
	}
	
	public Slider create(Slider slider) {
		return sliderRepository.save(slider);
	}
	
	public Slider update(Slider slider) {
		return slider;
	}
	
	public Slider delete(Slider slider) {
		sliderRepository.delete(slider);
		return slider;
	}
	
	public List<Slider> getSliders() {
		return sliderRepository.findAll();
	}
	
}
