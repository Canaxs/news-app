package com.news.info.model;


import lombok.Data;

@Data
public class AdminVM {
	
	
    private String username;
	
	private String image;
	
	public AdminVM(Admin admin) {
		this.setUsername(admin.getUsername());
		this.setImage(admin.getImage());
	}
}
