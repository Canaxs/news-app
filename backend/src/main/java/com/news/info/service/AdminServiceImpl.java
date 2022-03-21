package com.news.info.service;

import java.util.List;

import org.hibernate.proxy.HibernateProxy;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.news.info.exception.AuthException;
import com.news.info.model.Admin;
import com.news.info.model.AdminToken;
import com.news.info.model.AdminVM;
import com.news.info.repository.AdminJpaRepository;
import com.news.info.repository.AdminTokenRepository;
import com.news.info.request.AdminAuthRes;
import com.news.info.request.Credentials;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Service
public class AdminServiceImpl implements AdminService{
	
	AdminJpaRepository adminJpaRepository;
	
	AdminTokenRepository adminTokenRepository;

	public AdminServiceImpl(AdminJpaRepository adminJpaRepository, AdminTokenRepository adminTokenRepository) {
		super();
		this.adminJpaRepository = adminJpaRepository;
		this.adminTokenRepository = adminTokenRepository;
	}

	@Override
	public List<Admin> getAdmins() {
		return adminJpaRepository.findAll();
	}

	@Override
	public AdminAuthRes authenticate(Credentials credentials) {
		Admin inDB = adminJpaRepository.findByUsername(credentials.getUsername());
		if(inDB == null) {
			throw new AuthException();
		}
		if(!credentials.getPassword().equals(inDB.getPassword())) {
			throw new AuthException();
		}
		AdminVM adminVM = new AdminVM(inDB);
		String token = Jwts.builder().setSubject(""+inDB.getId()).signWith(SignatureAlgorithm.HS512, "my-app").compact();

		AdminToken adminToken = new AdminToken();
		adminToken.setAdmin(inDB);
		adminToken.setToken(token);
		adminTokenRepository.save(adminToken);
		AdminAuthRes adminAuthRes = new AdminAuthRes();
		adminAuthRes.setAdmin(adminVM);
		adminAuthRes.setToken("Bearer "+token);
		return adminAuthRes;
	}

	@Override
	public UserDetails getUserDetails(String token) {
		System.out.println("Token: "+ token);
		JwtParser parser = Jwts.parser().setSigningKey("my-app");
		try {			
			parser.parse(token);
			Claims claims = parser.parseClaimsJws(token).getBody();
			long adminId = new Long(claims.getSubject());
			Admin admin = adminJpaRepository.getOne(adminId);
			Admin actualAdmin = (Admin)((HibernateProxy)admin).getHibernateLazyInitializer().getImplementation();
			return actualAdmin;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

}
