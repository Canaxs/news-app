package com.news.info.techno;

import lombok.Data;

@Data
public class TechnoVM {
	
	private String title;
	
	private String topic;
	
	public TechnoVM(Techno techno) {
		this.setTitle(techno.getTitle());
		this.setTopic(techno.getTopic());
	}

}
