package com.news.info.admin;

import org.springframework.stereotype.Service;

@Service
public class AdminService {

	AdminJpaRepository adminJpaRepository;
	
	AdminRepository adminRepository;

	public AdminService(AdminJpaRepository adminJpaRepository, AdminRepository adminRepository) {
		this.adminJpaRepository = adminJpaRepository;
		this.adminRepository = adminRepository;
	}
}
