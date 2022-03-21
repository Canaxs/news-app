package com.news.info.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.news.info.model.Game;

public interface GameService {

	List<Game> getGame();
	Game get(long id);
	Game save(Game game);
	Game delete(long id);
	Page<Game> getPageTechno(Pageable page);
}
