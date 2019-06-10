package br.com.ifpb.sysmeeting.resource;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.ifpb.sysmeeting.event.RecursoCriadoEvent;
import br.com.ifpb.sysmeeting.model.Membro;
import br.com.ifpb.sysmeeting.service.MembroService;

@RestController
@RequestMapping("/membros")
public class MembroResource {
	
	@Autowired
	private MembroService membroService;
	@Autowired
	private ApplicationEventPublisher publisher;
	
	@PostMapping
	public ResponseEntity<Membro> criar(@Valid @RequestBody Membro membro,HttpServletResponse response) {
		Membro membroSalvo=membroService.save(membro);
		publisher.publishEvent(new RecursoCriadoEvent(this, response, membro.getId()));
		return ResponseEntity.status(HttpStatus.CREATED).body(membroSalvo);
	}	
}
