package br.com.ifpb.sysmeeting.resource;

import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.ifpb.sysmeeting.event.RecursoCriadoEvent;
import br.com.ifpb.sysmeeting.model.Membro;
import br.com.ifpb.sysmeeting.repository.MembroRepository;
import br.com.ifpb.sysmeeting.service.MembroService;

@RestController
@RequestMapping("/membros")
public class MembroResource {
	
	@Autowired
	private MembroService membroService;
	
	@Autowired
	private MembroRepository membroRepository;
	
	@Autowired
	private ApplicationEventPublisher publisher;
	
	
	
	@GetMapping
	public List<Membro> listar(){
		return membroRepository.findAll();
	}
	
	@GetMapping("/{codigo}")
	public ResponseEntity<Membro> buscarPeloCodigo(@PathVariable Long codigo){
		Membro membro = membroRepository.findOne(codigo);
		return membro != null ? ResponseEntity.ok(membro) : ResponseEntity.notFound().build();
	}
	
	@PostMapping
	public ResponseEntity<Membro> criar(@Valid @RequestBody Membro membro,HttpServletResponse response) {
		Membro membroSalvo=membroService.save(membro);
		
		publisher.publishEvent(new RecursoCriadoEvent(this, response, membro.getId()));
		return ResponseEntity.status(HttpStatus.CREATED).body(membroSalvo);
	}	
	
	@DeleteMapping("/{codigo}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void remover(@PathVariable Long codigo) {
		membroRepository.delete(codigo);
	}
	
	public ResponseEntity<Membro> atualizar(@Valid @RequestBody Membro membro, @PathVariable Long codigo){
		Membro membroSalvo= membroService.atualizar(codigo, membro);
		return ResponseEntity.ok(membroSalvo);
	}
	
	
}
