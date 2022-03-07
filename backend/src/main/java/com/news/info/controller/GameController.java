package com.news.info.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.news.info.game.Game;
import com.news.info.game.GameService;
import com.news.info.game.GameVM;


@RestController
@RequestMapping("/api/1.0/game")
public class GameController {


	@Autowired
	GameService gameService;
	
	@PostMapping("/created")
	Game createdUser(@RequestBody Game game) {
		return gameService.save(game);
	}
	@DeleteMapping("/deleted/{id}")
	Game deletedUser(@PathVariable long id) {
		return gameService.delete(id);
	}
	@GetMapping("/{id}")
	Game getNews(@PathVariable long id) {
		return gameService.get(id);
	}
	
	@GetMapping("get")
	List<Game> getTechno(){
		return gameService.getGame();
	}
	@GetMapping("page")
	Page<GameVM> getPageTechno(Pageable page) {
		return gameService.getPageTechno(page).map(GameVM::new);
	}
}
