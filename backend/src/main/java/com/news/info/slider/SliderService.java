package com.news.info.slider;

import java.util.List;

import org.springframework.stereotype.Service;

import com.news.info.ex.AuthException;

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
	
	public Slider update(long id,Slider slider) {
		Slider slider2 = sliderRepository.findByid(id);
		slider2.setTitle(slider.getTitle());
		slider2.setStatement(slider.getStatement());
		try {
			sliderRepository.save(slider2);
		}
		catch(Error error) {
			new AuthException();
		}
		
		return slider2;
	}
	
	public Slider delete(Long id) {
		Slider slider = null;
		try {
			slider = sliderRepository.findByid(id);
			sliderRepository.delete(slider);
		}
		catch(Error error) {
			new AuthException();
		}
		
		return slider;
	}
	
	public List<Slider> getSliders() {
		return sliderRepository.findAll();
	}
	
}
