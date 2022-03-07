package com.news.info.game;

import lombok.Data;

@Data
public class GameVM {
	
	private long id;
	
	private String title;
	
	private String topic;
	
	public GameVM(Game game) {
		this.setTitle(game.getTitle());
		this.setTopic(game.getTopic());
		this.setId(game.getId());
	}

}
