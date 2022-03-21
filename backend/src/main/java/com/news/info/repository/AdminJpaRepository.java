package com.news.info.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.news.info.model.Admin;


public interface AdminJpaRepository extends JpaRepository<Admin, Long>{
	
	Admin findByUsername(String username);


}
