package com.news.info.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.news.info.model.Slider;

public interface SliderRepository extends JpaRepository<Slider, Long> {
	
	Slider findByid(long id);

}
