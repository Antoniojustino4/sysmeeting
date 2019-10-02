package br.com.ifpb.teste;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import br.com.ifpb.teste.config.TesteProperty;

@SpringBootApplication
@EnableConfigurationProperties(TesteProperty.class)
public class TesteApplication {

	public static void main(String[] args) {
		SpringApplication.run(TesteApplication.class, args);
	}

}
