package com.news.info.slider;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SliderRepository extends JpaRepository<Slider, Long> {
	
	Slider findByid(long id);

}
