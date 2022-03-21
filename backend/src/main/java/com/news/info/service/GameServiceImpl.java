package com.news.info.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.news.info.exception.AuthException;
import com.news.info.model.Game;
import com.news.info.repository.GameRepository;

@Service
public class GameServiceImpl implements GameService{

	GameRepository gameRepository;
	
	
	public GameServiceImpl(GameRepository gameRepository) {
		super();
		this.gameRepository = gameRepository;
	}

	@Override
	public List<Game> getGame() {
		return gameRepository.findAll();
	}

	@Override
	public Game get(long id) {
		return gameRepository.findByid(id);
	}

	@Override
	public Game save(Game game) {
		return gameRepository.save(game);
	}

	@Override
	public Game delete(long id) {
		Game game = null;
		try {
			game = gameRepository.findByid(id);
			gameRepository.delete(game);
		}
		catch(Error error) {
			new AuthException();
		}
		return game;
	}

	@Override
	public Page<Game> getPageTechno(Pageable page) {
		return gameRepository.findAll(page);
	}

}
