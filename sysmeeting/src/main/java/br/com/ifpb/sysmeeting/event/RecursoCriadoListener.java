package br.com.ifpb.sysmeeting.event;

import java.net.URI;

import javax.servlet.http.HttpServletResponse;

import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@Component
public class RecursoCriadoListener implements ApplicationListener<RecursoCriadoEvent>{


	public void onApplicationEvent(RecursoCriadoEvent recursoCriadoEvent) {
		HttpServletResponse response= recursoCriadoEvent.getResponse();
		Long codigo= recursoCriadoEvent.getCodigo();
		
		adicionarHeaderLocation(response,codigo);
	}
	
	public void adicionarHeaderLocation(HttpServletResponse response, Long codigo) {
		URI uri= ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{codigo}")
				.buildAndExpand(codigo).toUri();
		response.setHeader("Location", uri.toASCIIString());
	}


}
