package com.news.info.game;

import java.util.List;

import org.springframework.stereotype.Service;

import com.news.info.ex.AuthException;
@Service
public class GameService {
	
	GameRepository gameRepository;

	public GameService(GameRepository gameRepository) {
		super();
		this.gameRepository = gameRepository;
	}
	
	public List<Game> getGame(){
		return gameRepository.findAll();
	}
	
	public Game save(Game game) {
		return gameRepository.save(game);
	}
	
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
	
	

}
