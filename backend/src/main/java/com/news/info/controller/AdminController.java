package com.news.info.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.news.info.admin.AdminAuthRes;
import com.news.info.admin.AdminService;
import com.news.info.admin.Credentials;

@Controller
@RequestMapping("/api/1.0/admin")
public class AdminController {

	@Autowired
	AdminService adminService;
	
	@PostMapping("/auth")
	AdminAuthRes handleAuthentication(@RequestBody Credentials credentials) {
		return adminService.authenticate(credentials);
	}
	
	
}
