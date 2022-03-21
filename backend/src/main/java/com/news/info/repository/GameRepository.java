package com.news.info.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.news.info.model.Game;

public interface GameRepository extends JpaRepository<Game,Long> {
	
	Game findByid(long id);

}
