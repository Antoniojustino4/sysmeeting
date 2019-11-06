package br.com.ifpb.sysmeeting;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import br.com.ifpb.sysmeeting.config.TesteProperty;


@SpringBootApplication
@EnableConfigurationProperties(TesteProperty.class)
public class SysmeetingApplication {

	public static void main(String[] args) {
		SpringApplication.run(SysmeetingApplication.class, args);
	}

}
