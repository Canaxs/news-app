package com.news.info.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.Data;

@Entity
@Data
public class AdminToken {

	@Id
	private String token;
	
	@ManyToOne
	private Admin admin;
}
