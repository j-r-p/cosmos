package org.cs.strm.config;

import java.util.Properties;

import javax.sql.DataSource;

import org.apache.commons.dbcp.BasicDataSource;
import org.cs.strm.user.bean.User;
import org.hibernate.SessionFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.orm.hibernate4.LocalSessionFactoryBuilder;

@Configuration
public class AppConfig {
	@Bean
	public SessionFactory sessionFactory() {
		
		return new LocalSessionFactoryBuilder(getDataSource())
		   .addAnnotatedClasses(User.class). addProperties(hibernateProperties()).buildSessionFactory();

		
	}
	@Bean
	public DataSource getDataSource() {
	    BasicDataSource dataSource = new BasicDataSource();
	    dataSource.setDriverClassName("com.mysql.jdbc.Driver");
	    dataSource.setUrl("jdbc:mysql://localhost:3306/cs");
	    dataSource.setUsername("madmax");
	    dataSource.setPassword("password");
	 
	    return dataSource;
	}
	final Properties hibernateProperties() {
	    final Properties hibernateProperties = new Properties();

	    hibernateProperties.setProperty("hibernate.hbm2ddl.auto", "update");
	    hibernateProperties.setProperty("hibernate.dialect", "org.hibernate.dialect.MySQLDialect");
	    hibernateProperties.setProperty("hibernate.show_sql", "true");

	    return hibernateProperties;
	}
}
