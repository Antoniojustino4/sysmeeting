package br.com.ifpb.sysmeeting;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import br.com.ifpb.sysmeeting.cors.SysmeetingProperty;

@SpringBootApplication
@EnableConfigurationProperties(SysmeetingProperty.class)
public class SysmeetingApplication {

	public static void main(String[] args) {
		SpringApplication.run(SysmeetingApplication.class, args);
	}

}
