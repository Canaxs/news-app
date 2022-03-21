package com.news.info.request;

import com.news.info.model.AdminVM;

import lombok.Data;

@Data
public class AdminAuthRes {
	
	private String token;
	
	private AdminVM admin;

}
