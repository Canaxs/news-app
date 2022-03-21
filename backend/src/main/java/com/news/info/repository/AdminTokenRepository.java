package com.news.info.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.news.info.model.AdminToken;

public interface AdminTokenRepository extends JpaRepository<AdminToken, String>{

}
