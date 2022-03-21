package com.news.info.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.news.info.exception.AuthException;
import com.news.info.model.Slider;
import com.news.info.repository.SliderRepository;

@Service
public class SliderServiceImpl implements SliderService{
	
	SliderRepository sliderRepository;

	public SliderServiceImpl(SliderRepository sliderRepository) {
		super();
		this.sliderRepository = sliderRepository;
	}

	@Override
	public Slider create(Slider slider) {
		return sliderRepository.save(slider);
	}

	@Override
	public Slider update(long id, Slider slider) {
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

	@Override
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

	@Override
	public List<Slider> getSliders() {
		return sliderRepository.findAll();
	}

}
