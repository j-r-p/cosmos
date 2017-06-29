package org.cs.mag.springbootstarter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("org.cs")
public class CourseApiApp{

	public static void main(String[] args) {
		SpringApplication.run(CourseApiApp.class, args);

	}
	
}
