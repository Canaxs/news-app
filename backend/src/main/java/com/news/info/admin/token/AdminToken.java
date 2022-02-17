package com.news.info.admin.token;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.news.info.admin.Admin;

import lombok.Data;

@Entity
@Data
public class AdminToken {

	@Id
	private String token;
	
	@ManyToOne
	private Admin admin;
}
