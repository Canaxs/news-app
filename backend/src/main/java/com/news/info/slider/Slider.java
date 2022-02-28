package com.news.info.slider;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Data;

@Data
@Entity
public class Slider {
	
	@Id
	@GeneratedValue
	private Long id;
	
	@NotNull
	@Size(min=3,max=100)
	private String title;
	
	private String statement;
	
	private String image;
}
