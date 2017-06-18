package org.cs.mag.controller.hello;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SampleContoller {
	
	@RequestMapping("/hello")	
	public String sayHi() {
		return "Hi";
	}

}
