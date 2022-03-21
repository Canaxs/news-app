package com.news.info.web;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.news.info.model.Game;
import com.news.info.request.Credentials;
import com.news.info.service.AdminService;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.MOCK)
@ActiveProfiles("dev")
@AutoConfigureMockMvc
public class NewsGameWebTests {
	
	@Autowired
	private MockMvc mockMvc;
	
	@Autowired
	AdminService adminService;
	
	public String Auth() {
		Credentials credentials = new Credentials();
		credentials.setPassword("user");
		credentials.setUsername("user");
		return adminService.authenticate(credentials).getToken();
	}
	
	@Test
	public void createdNewsGame() throws Exception {
		String format = Auth();
		Game game = new Game();
		game.setTitle("deneme");
		game.setTopic("deneme");
		mockMvc.perform(MockMvcRequestBuilders.post("/api/1.0/game/created")
				.header("Authorization", format)
				.contentType(MediaType.APPLICATION_JSON)
				.content("{\"title\": \""+game.getTitle()+"\",\"topic\": \""+game.getTopic()+"\"}")
				)
				.andExpect(MockMvcResultMatchers.status().isOk());
	}
	
	@Test
	public void deleteNewsGame() throws Exception {
		String format = Auth();
		long id = 3;
		mockMvc.perform(MockMvcRequestBuilders.delete("/api/1.0/game/deleted/"+id).header("Authorization", format))
				.andExpect(MockMvcResultMatchers.status().isOk());
	}
	
	@Test
	public void getNewsGame() throws Exception {
		String format = Auth();
		long id = 3;
		mockMvc.perform(MockMvcRequestBuilders.get("/api/1.0/game/"+id).header("Authorization", format))
				.andExpect(MockMvcResultMatchers.status().isOk());
	}
	@Test
	public void getGame() throws Exception {
		String format = Auth();
		mockMvc.perform(MockMvcRequestBuilders.get("/api/1.0/game/get").header("Authorization", format))
				.andExpect(MockMvcResultMatchers.status().isOk());
	}
	@Test
	public void getPageGame() throws Exception {
		String format = Auth();
		mockMvc.perform(MockMvcRequestBuilders.get("/api/1.0/game/page").header("Authorization", format))
				.andExpect(MockMvcResultMatchers.status().isOk());
	}


}
