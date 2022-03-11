package com.news.info.admin;

import java.util.List;
import java.util.UUID;

import org.hibernate.proxy.HibernateProxy;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.news.info.admin.token.AdminToken;
import com.news.info.admin.token.AdminTokenRepository;
import com.news.info.ex.AuthException;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Service
public class AdminService {

	AdminJpaRepository adminJpaRepository;
	
	
	AdminTokenRepository adminTokenRepository;

	public AdminService(AdminJpaRepository adminJpaRepository,AdminTokenRepository adminTokenRepository) {
		super();
		this.adminJpaRepository = adminJpaRepository;
		this.adminTokenRepository = adminTokenRepository;
	}
	public List<Admin> getAdmins(){
		return adminJpaRepository.findAll();
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
		String token = Jwts.builder().setSubject(""+inDB.getId()).signWith(SignatureAlgorithm.HS512, "my-app").compact();

		AdminToken adminToken = new AdminToken();
		adminToken.setAdmin(inDB);
		adminToken.setToken(token);
		adminTokenRepository.save(adminToken);
		AdminAuthRes adminAuthRes = new AdminAuthRes();
		adminAuthRes.setAdmin(adminVM);
		adminAuthRes.setToken(token);
		return adminAuthRes;
		
	}

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
