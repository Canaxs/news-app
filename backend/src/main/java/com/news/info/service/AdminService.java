package com.news.info.service;

import java.util.List;

import org.springframework.security.core.userdetails.UserDetails;

import com.news.info.model.Admin;
import com.news.info.request.AdminAuthRes;
import com.news.info.request.Credentials;

public interface AdminService {

	List<Admin> getAdmins();
	AdminAuthRes authenticate(Credentials credentials);
	UserDetails getUserDetails(String token);
}
