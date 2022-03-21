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

import com.news.info.request.AdminAuthRes;
import com.news.info.request.Credentials;
import com.news.info.service.AdminService;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.MOCK)
@ActiveProfiles("dev")
@AutoConfigureMockMvc
public class NewsAdminWebTests {

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
	public void handleAuthentication() throws Exception {
		Credentials credentials = new Credentials();
		credentials.setPassword("user");
		credentials.setUsername("user");
		mockMvc.perform(MockMvcRequestBuilders.post("/api/1.0/admin/auth")
				.contentType(MediaType.APPLICATION_JSON)
				.content("{\"username\": \""+credentials.getUsername()+"\",\"password\": \""+credentials.getPassword()+"\"}")
				)
				.andExpect(MockMvcResultMatchers.status().isOk());
		
	}
	
	@Test
	public void getAdmin() throws Exception {
		String format = Auth();
		mockMvc.perform(MockMvcRequestBuilders.get("/api/1.0/admin/getAdmin")
				.header("Authorization", format)
				)
		.andExpect(MockMvcResultMatchers.status().isOk());
	}
}
