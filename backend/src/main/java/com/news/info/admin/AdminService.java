package com.news.info.admin;

import java.util.UUID;

import org.springframework.stereotype.Service;

import com.news.info.admin.token.AdminToken;
import com.news.info.admin.token.AdminTokenRepository;
import com.news.info.ex.AuthException;

@Service
public class AdminService {

	AdminJpaRepository adminJpaRepository;
	
	
	AdminTokenRepository adminTokenRepository;

	public AdminService(AdminJpaRepository adminJpaRepository,AdminTokenRepository adminTokenRepository) {
		super();
		this.adminJpaRepository = adminJpaRepository;
		this.adminTokenRepository = adminTokenRepository;
	}

	public AdminAuthRes authenticate(Credentials credentials) {
		Admin inDB = adminJpaRepository.findByUsername(credentials.getUsername());
		if(inDB == null) {
			throw new AuthException();
		}
		if(!credentials.getPassword().equals(inDB.getPassword())) {
			throw new AuthException();
		}
		AdminVM adminVM = new AdminVM(inDB);
		String token = generateRandomToken();
		
		AdminToken adminToken = new AdminToken();
		adminToken.setAdmin(inDB);
		adminToken.setToken(token);
		adminTokenRepository.save(adminToken);
		AdminAuthRes adminAuthRes = new AdminAuthRes();
		adminAuthRes.setAdmin(adminVM);
		adminAuthRes.setToken(token);
		
		
		return adminAuthRes;
		
	}
	public String generateRandomToken() {
		return UUID.randomUUID().toString().replaceAll("-", "");
	}
}
