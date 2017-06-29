package org.cs.mag.controller.hello;

import org.cs.strm.user.bean.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SampleContoller {
	
	@Autowired
	org.cs.strm.user.repos.UserRepo  userRepo;
	@RequestMapping("/hello")	
	public Iterable<User> sayHi() {
		return userRepo.findAll();
	}

}
