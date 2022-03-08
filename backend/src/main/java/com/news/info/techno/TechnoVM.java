package com.news.info.techno;

import lombok.Data;

@Data
public class TechnoVM {
	
	private long id;
	
	private String title;
	
	private String topic;
	
	public TechnoVM(Techno techno) {
		this.setTitle(techno.getTitle());
		this.setTopic(techno.getTopic());
		this.setId(techno.getId());
	}

}
