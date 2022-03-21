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
import com.news.info.model.Slider;
import com.news.info.request.Credentials;
import com.news.info.service.AdminService;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.MOCK)
@ActiveProfiles("dev")
@AutoConfigureMockMvc
public class NewsSliderWebTests {
	
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
	public void getSliders() throws Exception {
		String format = Auth();
		mockMvc.perform(MockMvcRequestBuilders.get("/api/1.0/slider")
				.header("Authorization", format)
				)
		.andExpect(MockMvcResultMatchers.status().isOk());
	}
	
	@Test
	public void deleteSlider() throws Exception {
		String format = Auth();
		long id = 3;
		mockMvc.perform(MockMvcRequestBuilders.delete("/api/1.0/slider/"+id).header("Authorization", format))
				.andExpect(MockMvcResultMatchers.status().isOk());
	}
	
	@Test
	public void updateSlider() throws Exception {
		String format = Auth();
		long id = 4;
		Slider slider = new Slider();
		slider.setTitle("deneme");
		slider.setStatement("deneme");
		mockMvc.perform(MockMvcRequestBuilders.put("/api/1.0/slider/"+id)
				.header("Authorization", format)
				.contentType(MediaType.APPLICATION_JSON)
				.content("{\"title\": \""+slider.getTitle()+"\",\"statement\": \""+slider.getStatement()+"\",\"image\":\"32\"}")
				)
				.andExpect(MockMvcResultMatchers.status().isOk());
	}
	
	@Test
	public void createdSlider() throws Exception {
		String format = Auth();
		Slider slider = new Slider();
		slider.setTitle("deneme");
		slider.setStatement("deneme");
		mockMvc.perform(MockMvcRequestBuilders.post("/api/1.0/slider/create")
				.header("Authorization", format)
				.contentType(MediaType.APPLICATION_JSON)
				.content("{\"title\": \""+slider.getTitle()+"\",\"statement\": \""+slider.getStatement()+"\",\"image\":\"32\"}")
				)
				.andExpect(MockMvcResultMatchers.status().isOk());
	}

}
